'use client'
import { Canvas, useFrame} from '@react-three/fiber'
import {useRef, useState, useEffect} from 'react'
import { OrbitControls } from '@react-three/drei';


export default function App() {
  const [data, setData] = useState();
  const [counter, setCounter] = useState(1);

  const MAX_POINTS = 43000
  const [coords, setCoords] = useState(new Float32Array(MAX_POINTS * 3))

  const points = useRef();
  const box = useRef();
  const leftwall = useRef();
  

  useEffect(() => {
    const dataFetch = async () => {
      const data = await (await fetch('/3d.json')).json();
      setData(data);
      console.log("data fetched")
      points.current.geometry.attributes.position.array = new Float32Array(data[counter]["data"])
      points.current.geometry.attributes.position.needsUpdate = true
      
    };
    dataFetch();
  }, []);

  function loadFrame () {
    points.current.geometry.attributes.position.array = new Float32Array(data[counter]["data"])
    points.current.geometry.computeBoundingBox();
    points.current.geometry.attributes.position.needsUpdate = true

  }

  return (
    <div>
      <button onClick={() => {setCounter(counter+1); loadFrame()} }>
        increase
      </button>
      <button onClick={() => {setCounter(counter-1); loadFrame()} }>
        decrease
      </button>
      <p>counter at {counter}</p>
      <div id="canvas-container" className='w-300 h-screen'>
        <Canvas camera={{ fov: 75, position: [600, 400, 200]}}>
          <OrbitControls enableZoom={true} enableRotate={true} enablePan={true} />
          <pointLight position={[1, 5, 1]} />
          <points ref={points}>
            <bufferGeometry attach="geometry">
              <bufferAttribute
                attach="attributes-position"
                count={coords.length / 3}
                array={coords}
                itemSize={3}
              />
            </bufferGeometry>
            <pointsMaterial color="#5786F5" size={2} sizeAttenuation />
          </points>
          <mesh ref={box} position = {[200,10,50]}>
            <boxGeometry attach="geometry" args={[20, 20, 100]}  />
            <meshStandardMaterial attach="material" color={0x0ff000} />
          </mesh>
          <mesh ref={leftwall} position = {[0,0,50]}>
            <boxGeometry attach="geometry" args={[20, 1, 100]}  />
            <meshStandardMaterial attach="material" color={0x0ff000} />
          </mesh>
        </Canvas>
      </div>
      
    </div>
   
  )
}
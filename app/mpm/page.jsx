'use client'
import { Canvas, useFrame} from '@react-three/fiber'
import {useRef, useState, useEffect} from 'react'
import { OrbitControls } from '@react-three/drei';
import { Slider } from "@material-tailwind/react";



export default function App() {
  const [data, setData] = useState();
  const [framechoice, setFrameChoice] = useState(0);
  const [frames, setFrames] = useState();

  const MAX_POINTS = 43000
  const [coords, setCoords] = useState(new Float32Array(MAX_POINTS * 3))

  const points = useRef();
  const box = useRef();
  const floor = useRef();
  const backwall = useRef();
  

  useEffect(() => {
    const dataFetch = async () => {
      const data = await (await fetch('/3d.json')).json();
      setData(data);
      console.log("data fetched")
      setFrames(Array.from(Object.keys(data)))
      points.current.geometry.attributes.position.array = new Float32Array(data[Object.keys(data)[0]]["data"])
      points.current.geometry.attributes.position.needsUpdate = true
      
    };
    dataFetch();
  }, []);

  function loadFrame (frame) {
    points.current.geometry.attributes.position.array = new Float32Array(data[frame.toString()]["data"])
    //points.current.geometry.computeBoundingBox(); fix Nan values in array 
    points.current.geometry.attributes.position.needsUpdate = true
  }

  return (
    <div className='w-full h-full py-20 px-5 justify-center'>
      <h1 className='text-4xl mx-auto'>MPM modelling of subaerial and underwater landslides</h1>
      <div className='w-4/6 mx-auto outline outline-1 p-3'>
      <input
            type="range"
            className="transparent h-1.5 w-60 cursor-pointer appearance-none rounded-lg border-transparent bg-neutral-200"
            min="0"
            max="120"
            step="4"
            defaultValue={0}
            onChange={({ target: { value: frame } }) => {loadFrame(frame)}}
          />
      <div id="canvas-container" className='w-full h-96'>
        <Canvas camera={{ fov: 75, position: [600, 400, 200]}}>
          <perspectiveCamera/>
          <OrbitControls enableZoom={true} maxDistance={900} enableRotate={true} enablePan={true} />
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
            <meshStandardMaterial attach="material" color={'#964B00'} opacity={0.8} transparent={true}/>
          </mesh>
          <mesh ref={floor} position = {[200,0,75]}>
            <boxGeometry attach="geometry" args={[400, 1, 150]}  />
            <meshStandardMaterial attach="material" color={'#964B00'} opacity={0.04} transparent={true}/>
          </mesh>
          <mesh ref={backwall} position = {[0,150,75]}>
            <boxGeometry attach="geometry" args={[1, 300, 150]}  />
            <meshStandardMaterial attach="material" color={'#964B00'} opacity={0.04} transparent={true}/>
          </mesh>
          <mesh position = {[200,150,150]}>
            <boxGeometry attach="geometry" args={[400, 300, 1]}  />
            <meshStandardMaterial attach="material" color={'#964B00'} opacity={0.04} transparent={true}/>
          </mesh>
          <mesh position = {[200,150,0]}>
            <boxGeometry attach="geometry" args={[400, 300, 1]}  />
            <meshStandardMaterial attach="material" color={'#964B00'} opacity={0.04} transparent={true}/>
          </mesh>
        </Canvas>
      </div>
    </div>

    </div>
    
   
  )
}
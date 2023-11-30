'use client'
import { Canvas, useFrame} from '@react-three/fiber'
import {useRef, useState, useEffect} from 'react'
import { OrbitControls } from '@react-three/drei';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader



export default function App() {
  const [data, setData] = useState();
  const [sliderValue, setSliderValue] = useState(0);
  const [text, setText] = useState({"intro":"","intro2":"","3dsim":"","3dcomp":""});

  const MAX_POINTS = 43000
  const [coords, setCoords] = useState(new Float32Array(MAX_POINTS * 3))

  const points = useRef();
  const box = useRef();
  const floor = useRef();
  const backwall = useRef();
  

  useEffect(() => {
    const dataFetch = async () => {
      const data = await (await fetch('/3d.json')).json();
      const fetchedText = await (await fetch('mpm_text.json')).json();
      setText(fetchedText)
      setData(data);
      console.log("data fetched")
      points.current.geometry.attributes.position.array = new Float32Array(data[Object.keys(data)[0]]["data"])
      points.current.geometry.attributes.position.needsUpdate = true
      
    };
    dataFetch();
  }, []);

  

  function loadFrame (frame) {
    points.current.geometry.attributes.position.array = new Float32Array(data[frame.toString()]["data"]) 
    points.current.geometry.attributes.position.needsUpdate = true
  }

  return (
    <div className='w-full h-full py-20 px-5 justify-center space-y-5'>
      <div className='flex justify-center flex-col'>
        <h1 className='text-4xl text-center mx-auto pb-10'>MPM modelling of subaerial and underwater landslides</h1>
        <p className='mx-auto w-4/6 text-center text-xl'>{text.intro}</p>
        <br/>
        
        <br/>
        <h1 className='mx-auto w-4/6 text-2xl underline'>3D asymmetric simulation</h1>
        <br/>
        <p className='mx-auto w-4/6 text-lg font-bold'>Interactive simulation results</p>
        
        <p className='mx-auto w-4/6 text-lg pt-4'>{text["3dsim"]}</p>
        
      </div>
      <div className='w-4/6 mx-auto outline outline-1 p-3'>
        <input
              type="range"
              className="transparent inline-block h-1.5 w-60 cursor-pointer appearance-none rounded-lg border-transparent bg-neutral-200"
              min="0"
              max="120"
              step="4"
              defaultValue={0}
              onChange={({ target: { value: frame } }) => {loadFrame(frame); setSliderValue(frame)}}
            />
        <p className='inline-block px-5'>Elapsed time: {Math.round(1000*sliderValue/120)} ms</p>

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
      
      <p className='mx-auto w-4/6 text-lg font-bold pt-5'>Simulation paramater comparison</p>
      <p className='mx-auto w-4/6 text-lg'>{text["3dcomp"]}</p>
      <div className='w-2/6 mx-auto'>
        <Carousel autoPlay={true} infiniteLoop={true}>
            <div className='p-15'>
                <img src="/cross3d10.png" />
            </div>
            <div className='p-15'>
                <img src="/cross3d34.png" />
            </div>
            <div className='p-15'>
                <img src="/cross3d107.png" />
            </div>
            <div className='p-15'>
                <img src="/cross3d137.png" />
            </div>
        </Carousel>
      </div>


      <h1 className='mx-auto w-4/6 text-2xl underline pt-10'>2D simulation</h1>
      <p className='mx-auto w-4/6 text-lg'>Below is the comparison of the simulation results with the equivalent real-world lab results.</p>

      <div className='w-2/6 mx-auto'>
        <Carousel autoPlay={true} infiniteLoop={true}>
            <div className='p-15'>
                <img src="/labresults.png" />
            </div>
            <div className='p-15'>
                <img src="/labresultspoly.png" />
            </div>
        </Carousel>
      </div>

      <h1 className='mx-auto w-4/6 text-2xl underline pt-10'>2D submarine simulation</h1>
      <p className='mx-auto w-4/6 text-lg'>A similar collapse in water was simulated, and compared to the empirical results obtained from Pinzon and Cabrera in their paper <a href='https://doi.org/10.1063/1.5099494' className='underline text-blue-800'>Planar collapse of a submerged granular column</a>.</p>

      <div className='w-2/6 mx-auto'>
        <Carousel autoPlay={true} infiniteLoop={true}>
            <div className='p-15'>
                <img src="/Picture1.png" />
            </div>
            <div className='p-15'>
                <img src="/Picture2.png" />
            </div>
        </Carousel>
      </div>
        
      <p className='mx-auto w-4/6 text-center pt-10'>{text.intro2}</p>

    </div>
    
   
  )
}
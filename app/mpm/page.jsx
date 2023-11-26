'use client'
import { Canvas } from '@react-three/fiber'
import {useRef} from 'react'
import { OrbitControls } from '@react-three/drei';


export default function App() {
  const points = useRef();
  const particlesPosition = new Float32Array([0,0,0,3,1,1]);
  return (
    <div id="canvas-container">
      <Canvas camera={{ fov: 75, position: [3, 3, 3]}}>
        <OrbitControls autoRotate enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} enablePan={true} />
        <pointLight position={[1, 5, 1]} />
        <points ref={points}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={particlesPosition.length / 3}
              array={particlesPosition}
              itemSize={3}
            />
            </bufferGeometry>
          <pointsMaterial color="#5786F5" size={2} sizeAttenuation />
        </points>
      </Canvas>
    </div>
  )
}
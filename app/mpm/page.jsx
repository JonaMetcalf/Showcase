'use client'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react'
import { Canvas } from '@react-three/fiber'

export default function App() {
  return (
    <div id="canvas-container">
      <Canvas>
    <pointLight position={[10, 10, 10]} />
    <mesh>
      <sphereGeometry />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  </Canvas>
    </div>
  )
}
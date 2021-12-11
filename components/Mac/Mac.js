import * as THREE from 'three'
import React, { Suspense, useRef } from 'react'
import Image from 'next/image'
import { Canvas, useFrame } from '@react-three/fiber'
import { Html, Environment, useGLTF, OrbitControls } from '@react-three/drei'

function Model(props) {
  const group = useRef()
  // Load model
  const { nodes, materials } = useGLTF('/mac.glb')
  // Make it float
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      Math.cos(t / 2) / 10 + 0.25,
      0.1
    )
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      Math.sin(t / 4) / 10,
      0.1
    )
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      Math.sin(t / 4) / 20,
      0.1
    )
    group.current.position.y = THREE.MathUtils.lerp(
      group.current.position.y,
      (-5 + Math.sin(t)) / 5,
      0.1
    )
  })
  console.log(nodes, materials)
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes['base_notebook'].geometry}
        material={materials['Dust Storm']}
      />
      <mesh
        geometry={nodes['notebook_teclado'].geometry}
        material={materials['Rosemary']}
      />
      <mesh
        geometry={nodes['notebook_tela'].geometry}
        material={materials['Safari']}
      >
        <Html
          transform
          occlude
          position={[0, 10, -13.6]}
          rotation-x={-Math.PI / 12}
        >
          <div className="select-none">
            <Image src="/hootsuite.png" height={920} width={1080} />
          </div>
        </Html>
      </mesh>
    </group>
  )
}

export default function HootsuiteMac() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [-10, 0, -80], fov: 35 }}
      style={{ height: '600px', position: 'relative' }}
      className="cursor-pointer"
    >
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <Suspense fallback={null}>
        <group rotation={[0, Math.PI, 0]} position={[0, -10, 0]}>
          <Model />
        </group>
        <Environment preset="city" />
      </Suspense>
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
  )
}

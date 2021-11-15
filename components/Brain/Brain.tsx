import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

useGLTF.preload('/shoe-draco.glb')

export default function Brain({
  ...props
}: Record<string, string | number>): JSX.Element {
  const ref = useRef()
  const { nodes, materials } = useGLTF('/brain.glb')
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    ref.current.rotation.set(
      0.1 + Math.cos(t / 4.5) / 10,
      Math.sin(t / 4) / 4,
      0.3 - (1 + Math.sin(t / 4)) / 8
    )
    ref.current.position.y = (1 + Math.sin(t / 2)) / 10
  })
  return (
    <group {...props} dispose={null}>
      <group ref={ref}>
        <group position={[-0.16, 0, -0.22]} rotation={[0, -Math.PI / 2, 0]}>
          <mesh
            castShadow
            geometry={nodes.Object_115.geometry}
            material={materials['Material.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_119.geometry}
            material={materials['Material.001']}
          />
        </group>
      </group>
    </group>
  )
}

import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

useGLTF.preload('/brain.glb')

export default function Brain({ ...props }) {
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
        <group
          position={[0, -4, 0]}
          rotation={[-Math.PI / 2, Math.PI / 8, Math.PI / 2]}
        >
          <mesh
            castShadow
            geometry={nodes.human_brain_1123.geometry}
            material={materials['Hampton']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.human_brain_1123.geometry}
            material={materials['Hampton']}
          />
        </group>
      </group>
    </group>
  )
}

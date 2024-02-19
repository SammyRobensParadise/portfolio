/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { Ref, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { Color, Group } from 'three'

useGLTF.preload('/brain.glb')

export default function Brain(props: {
  scale: number
  position: [number, number, number]
  shadow: boolean
}): JSX.Element {
  const ref = useRef<Group | undefined>()
  const { nodes, materials } = useGLTF('/brain.glb')
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (ref.current) {
      ref.current.rotation.set(
        0.1 + Math.cos(t / 3) / 10,
        Math.sin(t / 4) / 4,
        0.3 - (1 + Math.sin(t / 4)) / 8
      )
      ref.current.position.y = (1 + Math.sin(t / 2)) / 10
    }
  })

  // @ts-expect-error type mismatch
  materials.Hampton.color = new Color('#FFFCA5')

  return (
    <group {...props} dispose={null}>
      <group ref={ref as Ref<Group> | undefined}>
        <group
          position={[-1, -3, -1]}
          rotation={[Math.PI / 2.25, Math.PI / 1, Math.PI / 0.5]}
        >
          <mesh
            castShadow
            receiveShadow
            // @ts-expect-error assigment
            geometry={nodes.human_brain_1123.geometry}
            material={materials.Hampton}
          />
          <mesh
            receiveShadow
            // @ts-expect-error assigment
            geometry={nodes.human_brain_1123.geometry}
            material={materials.Hampton}
          />
        </group>
      </group>
    </group>
  )
}

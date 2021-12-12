import React, { useRef, useEffect, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF, Html } from '@react-three/drei'

useGLTF.preload('/vr.glb')

export default function Brain({ ...props }) {
  const [hideHtml, setHideHtml] = useState(false)
  const ref = useRef()
  const { nodes, materials } = useGLTF('/vr.glb')
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * 2
    ref.current.rotation.set(
      0.1 + Math.cos(t / 4.5) / 5,
      Math.sin(t / 4) / 2,
      0.3 - (1 + Math.sin(t / 4)) / 4
    )
    ref.current.position.y = (1 + Math.sin(t / 2)) / 10
  })

  useEffect(() => {
    if (window.location.search.includes('overlay')) {
      setHideHtml(true)
    } else {
      setHideHtml(false)
    }
  }, [window.location.search])
  return (
    <>
      <group {...props} dispose={null}>
        <group ref={ref}>
          <group position={[0, 0, 0]} rotation={[0, 0, 0]}>
            <mesh
              castShadow
              geometry={nodes.buffer.geometry}
              material={materials['Emerald Dream']}
            >
              {!hideHtml && (
                <Html className="z-20">
                  <div>
                    <h2 className="bg-cerulaen p-4 text-4xl text-off-white w-max rounded dark:bg-highlight dark:text-shadow z-30">
                      VR, AR, XR and more...
                    </h2>
                  </div>
                </Html>
              )}
            </mesh>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.buffer.geometry}
              material={materials['Emerald Dream']}
            />
          </group>
        </group>
      </group>
    </>
  )
}

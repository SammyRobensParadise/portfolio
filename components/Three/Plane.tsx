import * as THREE from 'three'
import React, { forwardRef, useRef } from 'react'
import { MaterialProps, ReactThreeFiber, useFrame } from '@react-three/fiber'

import './CustonMaterial'
import { Material } from 'three'

import { useBlock } from './Blocks'
import state from './Store'

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      customMaterial: ReactThreeFiber.MaterialProps
    }
  }
}

const Plane = forwardRef(
  (
    {
      color = 'white',
      shift = 100,
      opacity = 1,
      args,
      map,
      ...props
    }: {
      color?: string
      shift?: number
      opacity?: number
      args: [
        width?: number | undefined,
        height?: number | undefined,
        widthSegments?: number | undefined,
        heightSegments?: number | undefined
      ]
      map: unknown
    },
    ref: React.Ref<React.ReactNode> | undefined
  ) => {
    const { viewportWidth, offsetFactor } = useBlock()
    const material = useRef<null | ReactThreeFiber.Object3DNode<
      MaterialProps,
      typeof ReactThreeFiber
    >>(null)
    let last = state.top.current
    useFrame(() => {
      const { pages, top } = state
      if (material.current) {
        material.current.scale = THREE.MathUtils.lerp(
          material.current.scale,
          offsetFactor - top.current / ((pages - 1) * viewportWidth),
          0.1
        )
        material.current.shift = THREE.MathUtils.lerp(
          material.current.shift,
          -(top.current - last) / shift,
          0.1
        )
      }

      last = top.current
    })

    return (
      <mesh ref={ref} {...props}>
        <planeGeometry args={args} />
        <customMaterial
          ref={material}
          color={color}
          map={map}
          map-minFilter={THREE.LinearFilter}
          transparent
          opacity={opacity}
        />
      </mesh>
    )
  }
)
Plane.displayName = 'Plane'
export default Plane

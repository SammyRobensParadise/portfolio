import { ReactThreeFiber, MaterialProps, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import './CustonMaterial'
import { Texture } from 'three'
import React, { forwardRef, useRef } from 'react'

import { useBlock } from './Blocks'
import state from './Store'

export interface CustomMaterialInterface extends ReactThreeFiber.MaterialProps {
  map: Texture
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      customMaterial: CustomMaterialInterface
    }
  }
}

export interface MaterialInterface
  extends ReactThreeFiber.Object3DNode<MaterialProps, typeof ReactThreeFiber> {
  shift: number
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
      map: Texture
      aspect?: number
      scale?: number[]
      frustumCulled?: boolean
      alt: string
    },
    ref: React.Ref<React.ReactNode> | undefined
  ) => {
    const { viewportWidth, offsetFactor } = useBlock()
    const material = useRef<null | MaterialInterface>(null)
    let last = state.top.current
    useFrame(() => {
      const { pages, top } = state
      if (material.current && material.current.scale && top.current && last) {
        material.current.scale = THREE.MathUtils.lerp(
          material.current.scale as number,
          offsetFactor -
            (top.current as number) / ((pages - 1) * viewportWidth),
          0.1
        )
        material.current.shift = THREE.MathUtils.lerp(
          material.current.shift,
          -((top.current as number) - (last as number)) / shift,
          0.1
        )
      }

      last = top.current
    })

    return (
      // @ts-expect-error undefined
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

import * as THREE from 'three'
import React, {
  createContext,
  useRef,
  useContext,
  PropsWithChildren
} from 'react'
import { ReactThreeFiber, useFrame, useThree } from '@react-three/fiber'

import state from './Store'

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      group: ReactThreeFiber.GroupProps
    }
  }
}

const offsetContext = createContext(0)

function useBlock(): {
  offset: number
  viewportWidth: number
  contentMaxWidth: number
  sectionWidth: number
  offsetFactor: number
} {
  const { sections, pages, zoom } = state
  const { size } = useThree()
  const offset = useContext(offsetContext)
  const viewportWidth = size.width
  const canvasWidth = size.width / zoom
  const mobile = size.width < 700
  const contentMaxWidth = canvasWidth * (mobile ? 0.7 : 0.5)
  const sectionWidth = canvasWidth * ((pages - 1) / (sections - 1))
  const offsetFactor = (offset + 1.0) / sections
  return {
    offset,
    viewportWidth,
    contentMaxWidth,
    sectionWidth,
    offsetFactor
  }
}

function Block({
  children,
  offset,
  factor,
  ...props
}: PropsWithChildren<{ offset: number; factor: number }>): React.ReactNode {
  const { offset: parentOffset, sectionWidth } = useBlock()
  const ref = useRef<ReactThreeFiber.GroupProps>()
  const localOffset = offset !== undefined ? offset : parentOffset
  useFrame(() => {
    if (
      ref.current &&
      ref.current.position &&
      ref.current.position &&
      state.top.current
    ) {
      const typedVector = ref.current.position
      const curY = typedVector as number
      const curTop = state.top.current
      // @ts-expect-error type mismatch
      ref.current.position.x = THREE.MathUtils.lerp(
        curY,
        (-curTop / state.zoom) * factor,
        0.1
      )
    }
  })
  return (
    <offsetContext.Provider value={localOffset}>
      <group {...props} position={[sectionWidth * localOffset * factor, 0, 0]}>
        <group ref={ref}>{children}</group>
      </group>
    </offsetContext.Provider>
  )
}

export { Block, useBlock }

/* eslint-disable @typescript-eslint/no-unsafe-call */
import React, {
  createContext,
  useRef,
  useContext,
  Context,
  ReactChildren,
  ReactElement
} from 'react'
import {
  Object3DNode,
  ReactThreeFiber,
  useFrame,
  useThree,
  Viewport
} from '@react-three/fiber'
import lerp from 'lerp'
import * as THREE from 'three'

import state from '../../global/helpers/store'

export interface UseBlock {
  viewport: Viewport
  offset: number
  viewportWidth: number
  viewportHeight: number
  canvasWidth: number
  canvasHeight: number
  mobile: boolean
  margin: number
  contentMaxWidth: number
  sectionHeight: number
  offsetFactor: number
}

export interface BlockInterface {
  offset: number
  props: [x: string]
  factor: number
  children: ReactChildren
}

const offsetContext: Context<number> = createContext(0)

export function useBlock(): UseBlock {
  const { sections, pages, zoom } = state
  const { size, viewport } = useThree()
  const offset = useContext(offsetContext)
  const viewportWidth = viewport.width
  const viewportHeight = viewport.height
  const canvasWidth = viewportWidth / zoom
  const canvasHeight = viewportHeight / zoom
  const mobile = size.width < 700
  const margin = canvasWidth * (mobile ? 0.2 : 0.1)
  const contentMaxWidth = canvasWidth * (mobile ? 0.8 : 0.6)
  const sectionHeight = canvasHeight * ((pages - 1) / (sections - 1))
  const offsetFactor = (offset + 1.0) / sections
  return {
    viewport,
    offset,
    viewportWidth,
    viewportHeight,
    canvasWidth,
    canvasHeight,
    mobile,
    margin,
    contentMaxWidth,
    sectionHeight,
    offsetFactor
  }
}
export function Block({
  children,
  offset,
  factor,
  ...props
}: BlockInterface): ReactElement {
  const { offset: parentOffset, sectionHeight } = useBlock()
  const ref = useRef<Object3DNode<THREE.Group, typeof THREE.Group>>(null)
  const localOffset = offset !== undefined ? offset : parentOffset
  useFrame(() => {
    if (ref?.current?.position) {
      // @ts-expect-error assignment of unknown parameter
      const curY: number = ref.current.position.y as number
      const curTop: number = state.top.current as number
      // @ts-expect-error assignment of unknown parameter
      ref.current.position.y = lerp(
        curY,
        (curTop / state.zoom) * factor,
        0.1
      ) as ReactThreeFiber.Vector3
    }
  })
  return (
    <offsetContext.Provider value={offset}>
      <group
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
        position={[0, -sectionHeight * localOffset * factor, 0]}
      >
        <group ref={ref}>{children}</group>
      </group>
    </offsetContext.Provider>
  )
}

import React, {
  useEffect,
  useCallback,
  Suspense,
  useRef,
  useState,
  PropsWithChildren,
  MouseEventHandler
} from 'react'
import * as THREE from 'three'
import type { NextPage } from 'next'
import {
  Canvas,
  useFrame,
  useThree,
  createPortal,
  ReactThreeFiber,
  MaterialProps,
  Euler,
  GroupProps
} from '@react-three/fiber'
import Head from 'next/head'
import {
  Text,
  Loader,
  Line,
  Shadow,
  useTexture,
  meshBounds
} from '@react-three/drei'
import { useDrag } from '@use-gesture/react'
import { EventHandlers } from '@react-three/fiber/dist/declarations/src/core/events'
import { Texture } from 'three'

import Plane from '../components/Three/Plane'
import Effects from '../components/Three/Effects'
import { Block, useBlock } from '../components/Three/Blocks'
import state from '../components/Three/Store'

export type OverrideEuler = Euler & { z: number }

export interface GroupRef
  extends ReactThreeFiber.Object3DNode<MaterialProps, typeof ReactThreeFiber> {
  rotation: OverrideEuler
}

function HeadsUpDisplay({
  children
}: PropsWithChildren<Record<string, unknown>>) {
  const [scene] = useState(() => new THREE.Scene())
  const { gl, camera } = useThree()
  useFrame(() => {
    gl.autoClear = false
    gl.clearDepth()
    gl.render(scene, camera)
  }, 2)
  return createPortal(children, scene)
}

function Rect({
  scale,
  ...props
}: {
  scale?: number
  props?: GroupProps
  onPointerOver?: (e: Event) => void
  onPointerOut?: (e: Event) => void
  onClick?: MouseEventHandler<EventTarget>
}) {
  const vec = [
    -0.5, 0.5, 0, 0.5, 0.5, 0, 0.5, -0.5, 0, -0.5, -0.5, 0, -0.5, 0.5, 0
  ] as unknown as [number, number, number][]
  return (
    <group scale={scale}>
      <Line points={vec} color="white" linewidth={1} position={[0, 0, 0]} />
      {/* @ts-expect-error undefined */}
      <mesh {...props} raycast={meshBounds}>
        <planeGeometry />
        <meshBasicMaterial transparent opacity={0.1} />
      </mesh>
    </group>
  )
}

function Marker() {
  const ref = useRef<null | GroupRef>(null)
  const [active, setActive] = useState<boolean>(false)
  const [hovered, set] = useState<boolean>(false)
  const { sectionWidth } = useBlock()
  useEffect(() => {
    document.body.style.cursor = hovered ? 'grab' : 'auto'
  }, [hovered])
  useFrame(({ camera }) => {
    if (ref.current && ref.current.rotation && state.top.current) {
      ref.current.rotation.z = THREE.MathUtils.lerp(
        ref.current.rotation.z,
        (state.top.current / state.zoom / sectionWidth / state.pages) *
          -Math.PI *
          2,
        0.1
      )
    }
    // @ts-expect-error udefined
    if (ref.current && ref.current?.scale && ref.current.scale.set) {
      const s = THREE.MathUtils.lerp(
        // @ts-expect-error undefined
        ref.current.scale.x,
        active || hovered ? 2 : 0.75,
        0.1
      )
      // @ts-expect-error undefined
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      ref.current.scale.set(s, s, s)
      camera.zoom = THREE.MathUtils.lerp(
        camera.zoom,
        active || hovered ? 40 : state.zoom,
        0.1
      )
    }

    camera.updateProjectionMatrix()
  })
  const bind = useDrag(
    ({ movement: [x], last }: { movement: number[]; last: boolean }) => {
      setActive(!last)
      // @ts-expect-error undefined
      state.ref.scrollLeft = x * 2 * state.pages
    },
    {
      // @ts-expect-error undefined
      from: () => [(state.ref.scrollLeft * 0.5) / state.pages]
    }
  )

  return (
    <group ref={ref} position={[0, 0, 2]}>
      <Rect
        {...bind()}
        onPointerOver={(e: Event) => {
          e.stopPropagation()
          set(true)
        }}
        onPointerOut={() => {
          set(false)
        }}
      />
    </group>
  )
}

function Dot() {
  const [hovered, set] = useState(false)
  const { offset, sectionWidth } = useBlock()
  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])
  return (
    <Rect
      scale={0.15}
      onPointerOver={() => set(true)}
      onPointerOut={() => set(false)}
      onClick={() => {
        // @ts-expect-error undefined
        state.ref.scrollLeft = offset * sectionWidth * state.zoom
      }}
    />
  )
}

function Map() {
  return new Array(6).fill('').map((_, index) => (
    <Block
      key={Math.random() * 1000}
      factor={1 / state.sections / 2}
      offset={index}
    >
      <Dot />
    </Block>
  ))
}

function Image({
  img,
  index,
  alt
}: {
  img: Texture
  index: number
  alt: string
}) {
  const ref = useRef<null | GroupRef>(null)
  const { contentMaxWidth: w, viewportWidth, offsetFactor } = useBlock()
  useFrame(() => {
    if (state.top.current && ref?.current && ref.current.scale) {
      const scrollOffset =
        state.top.current / (viewportWidth * state.pages - viewportWidth) +
        1 / state.pages / 2
      const scale =
        1 -
        (offsetFactor - scrollOffset) * (offsetFactor > scrollOffset ? 1 : -1)

      // @ts-expect-error undefined
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      ref.current.scale.setScalar(scale)
    }
  })
  return (
    <group ref={ref}>
      <Plane
        map={img}
        args={[1, 1, 32, 32]}
        shift={100}
        aspect={1.5}
        scale={[w, w / 1.5, 1]}
        frustumCulled={false}
        alt={alt}
      />
      <Text
        anchorX="left"
        position={[-w / 2, -w / 1.5 / 2 - 0.25, 0]}
        scale={1.5}
        color="white"
      >
        0{index}
      </Text>
      <Shadow
        scale={[w * 1.2, 1, 1]}
        rotation={[0.75, 0, 0]}
        position={[0, -w / 2, 0]}
      />
    </group>
  )
}

function Content() {
  const images = useTexture([
    '/cat.jpeg',
    '/cat.jpeg',
    '/cat.jpeg',
    '/cat.jpeg'
  ])
  return images.map((img, index) => (
    <Block key={Math.random() * 1000} factor={1} offset={index}>
      <Image key={Math.random() * 1000} index={index} img={img} alt="image" />
    </Block>
  ))
}

const LandingPage: NextPage = () => {
  const scrollArea = useRef()
  const onScroll = (e) => (state.top.current = e.target.scrollLeft)
  useEffect(() => {
    onScroll({ target: (state.ref = scrollArea.current) })
  }, [])

  return (
    <>
      <Head>
        <title>Sammy</title>
      </Head>
      <>
        <Canvas
          orthographic
          dpr={[1, 1.5]}
          mode="concurrent"
          camera={{ zoom: 1, position: [0, 0, 500] }}
          raycaster={{
            computeOffsets: ({ offsetX, offsetY }) => ({
              offsetX: offsetX - scrollArea.current.scrollLeft,
              offsetY
            })
          }}
          onCreated={(state) => state.events.connect(scrollArea.current)}
        >
          <Effects>
            <Suspense fallback={null}>
              <Content />
              <HeadsUpDisplay>
                <Map />
                <Marker />
              </HeadsUpDisplay>
            </Suspense>
          </Effects>
        </Canvas>
        <div className="scrollArea" ref={scrollArea} onScroll={onScroll}>
          <div style={{ height: '100vh', width: `${state.pages * 100}vw` }} />
        </div>
        <Loader />
      </>{' '}
    </>
  )
}

export default LandingPage

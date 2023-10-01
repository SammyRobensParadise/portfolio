/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable no-multi-assign */
import React, { forwardRef, useEffect, useState, useRef } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { uniqueId } from 'lodash'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import { Image, ScrollControls, Scroll, useScroll } from '@react-three/drei'
import { proxy, useSnapshot } from 'valtio'

const { damp } = THREE.MathUtils
const material = new THREE.LineBasicMaterial({ color: 'white' })
const geometry = new THREE.BufferGeometry().setFromPoints([
  new THREE.Vector3(0, -0.5, 0),
  new THREE.Vector3(0, 0.5, 0)
])
const state = proxy<{ clicked: number | null; urls: string[] }>({
  clicked: null,
  urls: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 5, 7, 8, 2, 4, 9, 6].map(
    (u) => `/${u}.jpg`
  )
})

function Minimap() {
  const ref = useRef<THREE.Group | null>(null)
  const scroll = useScroll()
  const { urls } = useSnapshot(state)
  const { height } = useThree((s) => s.viewport)
  useFrame(() => {
    if (ref.current && ref.current.children)
      ref.current.children.forEach((child, index: number) => {
        // Give me a value between 0 and 1
        //   starting at the position of my item
        //   ranging across 4 / total length
        //   make it a sine, so the value goes from 0 to 1 to 0.
        const y = scroll.curve(
          index / urls.length - 1.5 / urls.length,
          4 / urls.length
        )
        child.scale.y = damp(child.scale.y, 0.1 + y / 6, 8, 8)
      })
  })
  return (
    <group ref={ref}>
      {urls.map((_, i) => (
        <line
          key={i}
          // @ts-expect-error typematch
          geometry={geometry}
          material={material}
          position={[i * 0.06 - urls.length * 0.03, -height / 2 + 0.6, 0]}
        />
      ))}
    </group>
  )
}

function Item({
  index,
  position,
  scale,
  c = new THREE.Color(),
  url,
  ...props
}: {
  index: number
  position:
    | THREE.Vector3
    | [x: number, y: number, z: number]
    | readonly [x: number, y: number, z: number]
  scale: number | [number, number]
  c?: THREE.ColorRepresentation
  url: string
}) {
  const ref = useRef<THREE.Mesh | null>(null)
  const scroll = useScroll()
  const { clicked, urls } = useSnapshot(state)
  const [hovered, hover] = useState(false)
  function click() {
    state.clicked = index === clicked ? null : index
  }
  const over = () => hover(true)
  const out = () => hover(false)
  useFrame((_, delta) => {
    const y = scroll.curve(
      index / urls.length - 1.5 / urls.length,
      4 / urls.length
    )
    if (ref.current) {
      // @ts-expect-error err
      ref.current.material.scale[1] = ref.current.scale.y = damp(
        ref.current.scale.y,
        clicked === index ? 5 : 4 + y,
        8,
        delta
      )
      // @ts-expect-error err
      ref.current.material.scale[0] = ref.current.scale.x = damp(
        ref.current.scale.x,
        // @ts-expect-error err
        clicked === index ? 4.7 : scale[0],
        6,
        delta
      )
    }
    if (clicked !== null && index < clicked && ref.current)
      ref.current.position.x = damp(
        ref.current.position.x,
        position[0] - 2,
        6,
        delta
      )
    if (clicked !== null && index > clicked && ref.current)
      ref.current.position.x = damp(
        ref.current.position.x,
        position[0] + 2,
        6,
        delta
      )
    if ((clicked === null || clicked === index) && ref.current)
      ref.current.position.x = damp(
        ref.current.position.x,
        position[0],
        6,
        delta
      )
    if (ref.current) {
      ref.current.material.grayscale = damp(
        ref.current.material.grayscale,
        hovered || clicked === index ? 0 : Math.max(0, 1 - y),
        6,
        delta
      )
      ref.current.material.color.lerp(
        c.set(hovered || clicked === index ? 'white' : '#aaa'),
        hovered ? 0.3 : 0.1
      )
    }
  })
  return (
    <Image
      ref={ref}
      {...props}
      position={position}
      scale={scale}
      // eslint-disable-next-line react/jsx-no-bind
      onClick={click}
      onPointerOver={over}
      onPointerOut={out}
      alt="image"
    />
  )
}

function Items({ w = 0.7, gap = 0.15 }) {
  const { urls } = useSnapshot(state)
  const { width } = useThree((s) => s.viewport)
  const xW = w + gap
  return (
    <ScrollControls
      horizontal
      damping={0.1}
      pages={(width - xW + urls.length * xW) / width}
    >
      <Minimap />
      <Scroll>
        {urls.map((url, i) => (
          <Item
            key={i}
            index={i}
            position={[i * xW, 0, 0]}
            scale={[w, 4]}
            url={url}
          />
        ))}
      </Scroll>
    </ScrollControls>
  )
}

const LandingPage: NextPage = forwardRef((): JSX.Element => {
  const [idx, setIdx] = useState(1)
  const timeout = 200

  const introText = ['THIS', 'IS', 'MY', 'WORK']
  useEffect(() => {
    let secInterval: NodeJS.Timeout
    let interval: NodeJS.Timeout
    let thirdInterval: NodeJS.Timeout
    const condition = idx <= introText.length + 1
    if (condition) {
      interval = setInterval(() => {
        setIdx((s) => s + 1)
      }, timeout)
      if (idx >= introText.length + 1) {
        clearInterval(interval)
      }
    }
    return () => {
      clearInterval(interval)
      clearInterval(secInterval)
      clearInterval(thirdInterval)
    }
  }, [idx, introText.length])

  return (
    <>
      <Head>
        <title>Work</title>
      </Head>
      <div className=" bg-prussian-blue min-h-screen">
        <div className="text-center p-16  flex flex-col justify-center gap-16 items-center">
          <h1 className="text-6xl font-bold text-canary tracking-tight text-center leading-[78px] max-w-7xl selection:text-ruby selection:bg-ocean-green">
            {introText.slice(0, idx).map((word, index) => (
              <span
                key={`${word}-${uniqueId()}`}
                data-label={word.toLowerCase()}
                className={clsx(index === idx - 1 && 'text-ocrean-green')}
              >
                {word.split('').map((letter) => (
                  <motion.span
                    key={`${letter}-${uniqueId()}`}
                    whileHover={{
                      fontSize: '86px',
                      lineHeight: '60px',
                      letterSpacing: '-5px'
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}{' '}
              </span>
            ))}
          </h1>
        </div>
      </div>
    </>
  )
})
export default LandingPage

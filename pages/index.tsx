import React, { useRef, useEffect, useState, useCallback } from 'react'
import type { NextPage } from 'next'
import { Canvas, useFrame } from '@react-three/fiber'
import Head from 'next/head'

import Watertexture from '../global/helpers/waterTexture'

const LandingPage: NextPage = () => {
  const canvas = useRef<HTMLCanvasElement | null>(null)
  const [water, setWater] = useState<Watertexture | null>(null)

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      if (water) {
        const point: { x: number; y: number } = {
          x: event.clientX,
          y: event.clientY
        }
        water.addPoint(point)
        water.update()
      }
    },
    [water]
  )

  useEffect(() => {
    if (canvas.current) {
      const wtr = new Watertexture({
        debug: true,
        canvas: canvas.current
      })
      setWater(wtr)
    }
  }, [setWater])

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [handleMouseMove])

  useEffect(() => {
    let tick: NodeJS.Timer
    if (water) {
      tick = setInterval(() => {
        water.update()
      }, 1)
    }
    return () => {
      clearInterval(tick)
    }
  }, [water])

  console.log(water, canvas)
  return (
    <>
      <Head>
        <title>Sammy</title>
      </Head>
      <canvas ref={canvas} />
    </>
  )
}

export default LandingPage

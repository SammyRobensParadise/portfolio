import React, { useRef, useEffect, useState } from 'react'
import type { NextPage } from 'next'
import { Canvas, useFrame } from '@react-three/fiber'
import Head from 'next/head'

import Watertexture from '../global/helpers/waterTexture'

const LandingPage: NextPage = () => {
  const canvas = useRef<HTMLCanvasElement | null>(null)
  const [water, setWater] = useState<Watertexture | null>(null)

  useEffect(() => {
    if (canvas.current) {
      const wtr = new Watertexture({
        debug: true,
        canvas: canvas.current
      })
      setWater(wtr)
    }
  }, [setWater])

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

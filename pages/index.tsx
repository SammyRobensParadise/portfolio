import React, { useRef, useEffect, useState, useCallback } from 'react'
import * as THREE from 'three'
import type { NextPage } from 'next'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import Head from 'next/head'

const LandingPage: NextPage = () => {
  const scrollRegion = useRef<HTMLDivElement>(null)

  return (
    <>
      <Head>
        <title>Sammy</title>
      </Head>
      <Canvas orthographic>{/* */}</Canvas>
    </>
  )
}

export default LandingPage

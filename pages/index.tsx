import React, {
  useEffect,
  useCallback,
  Suspense,
  useRef,
  useState
} from 'react'
import * as THREE from 'three'
import type { NextPage } from 'next'
import { Canvas, useFrame, useThree, createPortal } from '@react-three/fiber'
import Head from 'next/head'
import {
  Text,
  Loader,
  Line,
  Shadow,
  useTexture,
  meshBounds
} from '@react-three/drei'
import { useDrag } from 'react-use-gesture'

import Plane from '../components/Three/Plane'
import Effects from '../components/Three/Effects'
import { Block, useBlock } from '../components/Three/Blocks'
import state from '../components/Three/Store'

const LandingPage: NextPage = () => {
  const scrollRegion = useRef<HTMLDivElement>(null)

  return (
    <>
      <Head>
        <title>Sammy</title>
      </Head>
      <Canvas>{/* */}</Canvas>
    </>
  )
}

export default LandingPage

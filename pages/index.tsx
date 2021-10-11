import React from 'react'
import * as THREE from 'three'
import type { NextPage } from 'next'
import { Canvas } from '@react-three/fiber'
import Head from 'next/head'

import Flow from '../components/Flow/Flow'

const LandingPage: NextPage = () => (
  <div>
    <Flow />
  </div>
)

export default LandingPage

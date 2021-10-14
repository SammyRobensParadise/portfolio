import React from 'react'
import type { NextPage } from 'next'
import { Text, Html } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Head from 'next/head'

import Flow from '../components/Flow/Flow'
import BlobElement from '../components/Blob/Blob'

const LandingPage: NextPage = () => (
  <>
    <BlobElement />
  </>
)

export default LandingPage

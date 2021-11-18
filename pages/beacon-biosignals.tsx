import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

import Stage from '../components/Stage/Stage'
import Brain from '../components/Brain/Brain'

const LandingPage: NextPage = (): JSX.Element => (
  <>
    <Head>
      <title>Sammy - Beacon</title>
    </Head>
    <div>
      <Stage>
        <Brain scale={0.5} position={[0, 0, -10]} />
      </Stage>
    </div>
  </>
)

export default LandingPage

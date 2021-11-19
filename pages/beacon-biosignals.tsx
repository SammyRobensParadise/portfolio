import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

import ThreeStage from '../components/Stage/ThreeStage'
import Brain from '../components/Brain/Brain'

const LandingPage: NextPage = (): JSX.Element => (
  <>
    <Head>
      <title>Sammy - Beacon</title>
    </Head>
    <div>
      <ThreeStage height={200}>
        <Brain scale={0.2} position={[0, 0, -10]} shadow />
      </ThreeStage>
    </div>
  </>
)

export default LandingPage

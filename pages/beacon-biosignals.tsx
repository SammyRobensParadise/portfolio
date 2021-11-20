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
      <div id="beacon-biosignals-landing" className="group">
        <div className="grid justify-items-center pb-36 pt-6">
          <h1 className="text-cerulaen dark:text-off-white font-work font-extrabold text-7xl w-2/3 absolute z-20 tracking-tighter text-center">
            Working with Beacon Biosignals to revolutionize the way we analyze
            the brain and change lives while doing it.
          </h1>
        </div>
        <div className="z-50 relative transition transform group-hover:translate-y-8">
          <ThreeStage height={400}>
            <Brain scale={0.2} position={[0, 0, -10]} shadow />
          </ThreeStage>
        </div>
      </div>
      <p>This is some text</p>
    </div>
  </>
)

export default LandingPage

import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

import BlobElement from '../components/Blob/Blob'

const LandingPage: NextPage = () => (
  <>
    <Head>
      <title>Sammy</title>
    </Head>
    <div className="grid grid-cols-3 gap-4">
      <div />
      <div>
        <div className="flex p-24">
          <BlobElement color="#2B2B2B" className="absolute" radius={250} />
          <BlobElement color="#3F46F3" className="absolute" radius={200} />
          <BlobElement color="#3FF3B2" className="absolute" radius={150} />
        </div>
      </div>
    </div>
  </>
)

export default LandingPage

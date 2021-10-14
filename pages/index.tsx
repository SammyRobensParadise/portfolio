import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

import BlobElement from '../components/Blob/Blob'

const LandingPage: NextPage = () => (
  <>
    <Head>
      <title>Sammy</title>
    </Head>
    <div className="flex justify-end">
      <BlobElement
        color="#2B2B2B"
        //   height={600}
        width={700}
        className="absolute"
        radius={250}
      />
      <BlobElement
        color="#3F46F3"
        //  height={600}
        width={700}
        className="absolute"
        radius={200}
      />
      <BlobElement
        color="#3FF3B2"
        //  height={600}
        width={700}
        className="absolute"
        radius={150}
      />
    </div>
  </>
)

export default LandingPage

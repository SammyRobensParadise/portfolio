import React, { forwardRef, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

import Layout from '../components/Layout'

const Work = forwardRef((): JSX.Element => {
  const [state, setState] = useState()
  return (
    <>
      <Head>
        <title>Work</title>
      </Head>
      <div className=" bg-prussian-blue min-h-screen overflow-y-hidden">
        <div className="text-center p-16 z-10 flex justify-center gap-16 items-center">
          <h1 className="text-6xl font-bold text-canary tracking-tight  text-center leading-[78px] max-w-7xl selection:text-ruby selection:bg-prussian-blue">
            About Me
          </h1>
          <p>this is some text about me</p>
        </div>
      </div>
    </>
  )
})

const WorkPage: NextPage = () => (
  <Layout>
    <Work />
  </Layout>
)
export default WorkPage

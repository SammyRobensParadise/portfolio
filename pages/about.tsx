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
      <div className="bg-off-white  min-h-screen overflow-y-hidden">
        <div className="p-16 z-10 flex justify-center gap-16 items-center">
          <h1 className="text-5xl px-24 font-bold text-prussian-blue leading-tight max-w-7xl selection:text-ruby selection:bg-prussian-blue">
            I’m Sammy Robens-Paradise, a product designer who weaves engineering
            principles and beautiful design to solve problems for people.
          </h1>
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

import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import toUpper from 'lodash/toUpper'

const LandingPage: NextPage = (): JSX.Element => {
  const intro = toUpper(
    'i am sammy robens-paradise and i build beautiful products'
  )
    .split(' ')
    .join(' ')

  return (
    <>
      <Head>
        <title>Sammy Robens-Paradise</title>
      </Head>
      <div className=" bg-ocrean-green h-screen">
        <div className="text-center p-16  flex justify-center">
          <h1 className="text-6xl font-bold text-prussian-blue tracking-tight max-w-5xl">
            {intro}
          </h1>
        </div>
      </div>
    </>
  )
}
export default LandingPage

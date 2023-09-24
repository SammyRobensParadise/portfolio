import React, { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { uniqueId } from 'lodash'
import clsx from 'clsx'

const LandingPage: NextPage = (): JSX.Element => {
  const [idx, setIdx] = useState(1)
  const [idx2, setIdx2] = useState(0)
  const introText = [
    'I',
    'AM',
    'SAMMY',
    'ROBENS-PARADISE',
    'AND',
    'I',
    'BUILD',
    'BEAUTIFUL',
    'PRODUCTS'
  ]
  const introText2 = ['THESE', 'ARE', 'YOUR', 'OPTIONS']
  const timeout = 200

  useEffect(() => {
    let secInterval: NodeJS.Timeout
    let interval: NodeJS.Timeout
    if (idx <= introText.length + 1 && idx2 <= introText2.length + 1) {
      interval = setInterval(() => {
        setIdx((s) => s + 1)
      }, timeout)
      if (idx >= introText.length + 1) {
        clearInterval(interval)
        secInterval = setInterval(() => {
          setIdx2((s) => s + 1)
          if (idx2 >= introText2.length + 1) {
            clearInterval(secInterval)
            clearInterval(interval)
          }
        }, timeout)
      }
    }
    return () => {
      clearInterval(interval)
      clearInterval(secInterval)
    }
  }, [idx, idx2, introText.length, introText2.length])

  return (
    <>
      <Head>
        <title>Sammy Robens-Paradise</title>
      </Head>
      <div className=" bg-ocrean-green min-h-screen">
        <div className="text-center p-16  flex flex-col justify-center gap-12 items-center">
          <h1 className="text-6xl font-bold text-prussian-blue tracking-tight  text-center leading-[78px] max-w-7xl">
            {introText.slice(0, idx).map((word, index) => (
              <span
                key={`${uniqueId()}`}
                data-label={word.toLowerCase()}
                className={clsx(index === idx - 1 && 'text-canary')}
              >
                {`${word} `}
              </span>
            ))}
          </h1>
          <h2 className=" text-5xl font-bold text-prussian-blue tracking-tight  text-center leading-[60px] max-w-6xl">
            {introText2.slice(0, idx2).map((word, index) => (
              <span
                key={`${uniqueId()}`}
                data-label={word.toLowerCase()}
                className={clsx(index === idx2 - 1 && 'text-canary')}
              >
                {`${word} `}
              </span>
            ))}
          </h2>
        </div>
      </div>
    </>
  )
}
export default LandingPage

import React, { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { uniqueId } from 'lodash'
import clsx from 'clsx'

import Button from '../components/button'

const LandingPage: NextPage = (): JSX.Element => {
  const [idx, setIdx] = useState(1)
  const [idx2, setIdx2] = useState(0)
  const [idx3, setIdx3] = useState(0)

  const timeout = 200

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
  const introText2 = ['THESE', 'ARE', 'YOUR', 'CHOICES']
  const options = [
    <Button key="see-work" anchor>
      SEE WORK
    </Button>,
    <Button key="view resume" anchor href="/SammyRPResume.pdf">
      VIEW RESUME
    </Button>,
    <Button key="see-work" anchor>
      ABOUT ME
    </Button>
  ]

  useEffect(() => {
    let secInterval: NodeJS.Timeout
    let interval: NodeJS.Timeout
    let thirdInterval: NodeJS.Timeout
    const condition =
      idx <= introText.length + 1 &&
      idx2 <= introText2.length + 1 &&
      idx3 <= options.length + 1

    if (condition) {
      interval = setInterval(() => {
        setIdx((s) => s + 1)
      }, timeout)
      if (idx >= introText.length + 1) {
        clearInterval(interval)
        secInterval = setInterval(() => {
          if (idx2 >= introText2.length) {
            clearInterval(secInterval)
            thirdInterval = setInterval(() => {
              setIdx3((s) => s + 1)
              if (idx3 >= options.length) {
                clearInterval(thirdInterval)
              }
            }, timeout)
          } else {
            setIdx2((s) => s + 1)
          }
        }, timeout)
      }
    }
    return () => {
      clearInterval(interval)
      clearInterval(secInterval)
      clearInterval(thirdInterval)
    }
  }, [idx, idx2, idx3, introText.length, introText2.length, options.length])

  return (
    <>
      <Head>
        <title>Sammy Robens-Paradise</title>
      </Head>
      <div className=" bg-ocrean-green min-h-screen">
        <div className="text-center p-16  flex flex-col justify-center gap-16 items-center">
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
          <div className="gap-12">
            <h2 className=" text-5xl font-bold text-prussian-blue tracking-tight  text-center leading-[60px] max-w-6xl">
              {introText2.slice(0, idx2).map((word, index) => (
                <span
                  key={`${uniqueId()}`}
                  data-label={word.toLowerCase()}
                  className={clsx(
                    index === idx2 - 1 && idx3 <= 0 && 'text-canary'
                  )}
                >
                  {`${word} `}
                </span>
              ))}
            </h2>
            <div className="space-x-24 py-16">
              {options.slice(0, idx3).map((option) => (
                <span key={`${uniqueId()}`}>{option}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default LandingPage

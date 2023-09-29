import React, { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { uniqueId } from 'lodash'
import clsx from 'clsx'
import { motion } from 'framer-motion'

const LandingPage: NextPage = (): JSX.Element => {
  const [idx, setIdx] = useState(1)
  const [idx2, setIdx2] = useState(0)
  const timeout = 200

  const introText = ['THIS', 'IS', 'MY', 'WORK']
  const introText2 = ['THESE', 'ARE', 'YOUR', 'CHOICES']

  useEffect(() => {
    let secInterval: NodeJS.Timeout
    let interval: NodeJS.Timeout
    let thirdInterval: NodeJS.Timeout
    const condition =
      idx <= introText.length + 1 && idx2 <= introText2.length + 1
    if (condition) {
      interval = setInterval(() => {
        setIdx((s) => s + 1)
      }, timeout)
      if (idx >= introText.length + 1) {
        clearInterval(interval)
        secInterval = setInterval(() => {
          if (idx2 >= introText2.length) {
            clearInterval(secInterval)
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
  }, [idx, idx2, introText.length, introText2.length])

  return (
    <>
      <Head>
        <title>Work</title>
      </Head>
      <div className=" bg-prussian-blue min-h-screen">
        <div className="text-center p-16  flex flex-col justify-center gap-16 items-center">
          <h1 className="text-6xl font-bold text-canary tracking-tight text-center leading-[78px] max-w-7xl selection:text-ruby selection:bg-ocean-green">
            {introText.slice(0, idx).map((word, index) => (
              <span
                key={`${word}-${uniqueId()}`}
                data-label={word.toLowerCase()}
                className={clsx(index === idx - 1 && 'text-ocrean-green')}
              >
                {word.split('').map((letter) => (
                  <motion.span
                    key={`${letter}-${uniqueId()}`}
                    whileHover={{
                      fontSize: '86px',
                      lineHeight: '60px',
                      letterSpacing: '-5px'
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}{' '}
              </span>
            ))}
          </h1>
          <div className="gap-12">
            <h2 className=" text-5xl font-bold text-prussian-blue tracking-tight  text-center leading-[60px] max-w-6xl  selection:bg-ruby selection:text-prussian-blue">
              {introText2.slice(0, idx2).map((word, index) => (
                <span
                  key={`${uniqueId()}`}
                  data-label={word.toLowerCase()}
                  className={clsx(index === idx2 - 1 && 'text-canary')}
                >
                  {word.split('').map((letter) => (
                    <motion.span
                      key={`${letter}-${uniqueId()}`}
                      whileHover={{
                        fontSize: '64px',
                        lineHeight: '48px',
                        letterSpacing: '-2.5px'
                      }}
                    >
                      {letter}
                    </motion.span>
                  ))}{' '}
                </span>
              ))}
            </h2>
          </div>
        </div>
      </div>
    </>
  )
}
export default LandingPage

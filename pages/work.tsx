import React, { forwardRef, useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { uniqueId } from 'lodash'
import clsx from 'clsx'
import { motion } from 'framer-motion'

import Layout from '../components/Layout'

const Work = forwardRef((): JSX.Element => {
  const [idx, setIdx] = useState(1)

  const timeout = 200

  const introText = ['THIS', 'IS', 'MY', 'WORK']

  useEffect(() => {
    const condition = idx <= introText.length + 1
    let interval: NodeJS.Timeout
    if (condition) {
      setTimeout(() => {
        if (condition) {
          interval = setInterval(() => {
            setIdx((s) => s + 1)
            if (idx >= introText.length + 1) {
              clearInterval(interval)
            }
          }, timeout)
          if (idx >= introText.length + 1) {
            clearInterval(interval)
          }
        }
      }, 250)
    }
    return () => {
      clearInterval(interval)
    }
  })

  return (
    <>
      <Head>
        <title>Work</title>
      </Head>
      <div className=" bg-prussian-blue min-h-screen overflow-y-hidden">
        <div className="text-center p-16  flex flex-col justify-center gap-16 items-center">
          <h1 className="text-6xl font-bold text-canary tracking-tight text-center leading-[78px] max-w-7xl selection:text-ruby selection:bg-ocean-green fixed">
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

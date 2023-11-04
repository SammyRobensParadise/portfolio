import React, { forwardRef, useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { uniqueId } from 'lodash'
import clsx from 'clsx'
import { motion } from 'framer-motion'

const LandingPage: NextPage = forwardRef((): JSX.Element => {
  const [idx, setIdx] = useState(1)
  const [x, setX] = useState(0)
  const timeout = 200

  const introText = ['THIS', 'IS', 'MY', 'WORK']

  function handleWheel(event: WheelEvent) {
    window.scrollTo({ top: 0 })
    const { deltaY } = event
    const reverseY = (-1 * deltaY) / 3
    setX((cur) => cur + reverseY)
  }

  useEffect(() => {
    document.addEventListener('wheel', handleWheel)
    return () => {
      document.removeEventListener('wheel', handleWheel)
    }
  }, [])

  useEffect(() => {
    let secInterval: NodeJS.Timeout
    let interval: NodeJS.Timeout
    let thirdInterval: NodeJS.Timeout
    const condition = idx <= introText.length + 1
    if (condition) {
      interval = setInterval(() => {
        setIdx((s) => s + 1)
      }, timeout)
      if (idx >= introText.length + 1) {
        clearInterval(interval)
      }
    }
    return () => {
      clearInterval(interval)
      clearInterval(secInterval)
      clearInterval(thirdInterval)
    }
  }, [idx, introText.length])
  console.log(x)

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
        </div>
        <div className="overflow-x-hidden">
          <div
            className={`justify-center `}
            style={{ transform: `translateX(${x}px)` }}
          >
            <div className="px-5 flex flex-row space-x-5 min-w-fit">
              <div className="h-24 w-24 bg-ruby">Text 1</div>
              <div className="h-24 w-24 bg-ruby">Text 2</div>
              <div className="h-24 w-24 bg-ruby">Text 3</div>
              <div className="h-24 w-24 bg-ruby">Text 4</div>
              <div className="h-24 w-24 bg-ruby">Text 5</div>
              <div className="h-24 w-24 bg-ruby">Text 6</div>
              <div className="h-24 w-24 bg-ruby">Text 7</div>
              <div className="h-24 w-24 bg-ruby">Text 8</div>
              <div className="h-24 w-24 bg-ruby">Text 9</div>
              <div className="h-24 w-24 bg-ruby">Text 10</div>
              <div className="h-24 w-24 bg-ruby">Text 11</div>
              <div className="h-24 w-24 bg-ruby">Text 12</div>
              <div className="h-24 w-24 bg-ruby">Text 13</div>
              <div className="h-24 w-24 bg-ruby">Text 14</div>
              <div className="h-24 w-24 bg-ruby">Text 15</div>
              <div className="h-24 w-24 bg-ruby">Text 16</div>
              <div className="h-24 w-24 bg-ruby">Text 17</div>
              <div className="h-24 w-24 bg-ruby">Text 18</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
})
export default LandingPage

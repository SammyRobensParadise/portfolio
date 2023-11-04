import React, { forwardRef, useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { uniqueId } from 'lodash'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import Image from 'next/image'

import WorkSegment from '../components/workSegment'

const LandingPage: NextPage = forwardRef((): JSX.Element => {
  const [idx, setIdx] = useState(1)
  const [x, setX] = useState(0)
  const timeout = 200

  const introText = ['THIS', 'IS', 'MY', 'WORK']
  const workItems: {
    title: string
    description: string
    children: JSX.Element
  }[] = [
    {
      title: 'Beacon Biosignals',
      description:
        'Designing the world’s AI neurobiomarker platform accelerating clinical trials and powering new treatments for patients with neurological and psychiatric diseases',
      children: (
        <div className="align-center inline-block">
          <Image
            src="/beacon-render.png"
            alt="Beacon Render"
            width={460}
            height={460}
          />
        </div>
      )
    },
    {
      title: 'Float Card',
      description:
        'Orchestrating the dream-to-design-to-build pipeline for Float Inc on a mission to redesign business spending',
      children: (
        <div className="align-center inline-block">
          <Image
            src="/float-render.png"
            alt="Float Render"
            width={460}
            height={460}
          />
        </div>
      )
    },
    {
      title: 'Puma',
      description:
        'Leading designer and systems engineer at PUMA Utilites, responsible for user experience research, graphic and interface design',
      children: (
        <div className="align-center inline-block">
          <Image
            src="/puma-render.png"
            alt="Puma Render"
            width={600}
            height={600}
          />
        </div>
      )
    },
    {
      title: 'Pharmabox',
      description:
        'A capstone project to deliver accessible prescription pickup for Canadians',
      children: (
        <div className="align-center inline-block">
          <Image
            src="/pharmabox-render.png"
            alt="Puma Render"
            width={1400}
            height={600}
          />
        </div>
      )
    }
  ]

  function handleWheel(event: WheelEvent) {
    window.scrollTo({ top: 0 })
    const { deltaY } = event
    const reverseY = (-1 * deltaY) / 2
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
              {workItems.map((workItem) => (
                <WorkSegment
                  key={workItem.title}
                  title={workItem.title}
                  description={workItem.description}
                >
                  {workItem.children}
                </WorkSegment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
})
export default LandingPage

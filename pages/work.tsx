import React, { forwardRef, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { uniqueId } from 'lodash'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { useInterval } from 'usehooks-ts'
import Link from 'next/link'

import Layout from '../components/Layout'

const timeout = 200

const txt1 = ['THIS', 'IS', 'MY', 'WORK']

const workOptions: Array<{
  label: string
  subtext: string
  anchor: boolean
  href: string
}> = [
  {
    label: 'BEACON BIOSIGNALS',
    subtext:
      "Designing the world's AI neurobiomarker platform accelerating clinical trials and powering new treatments for patients with neurological and psychiatric diseases",
    anchor: true,
    href: '/beacon-biosignals'
  },
  {
    label: 'FLOAT',
    subtext:
      'Orchestrating the dream-to-design-to-build pipeline for Float Inc on a mission to redesign business spending',
    anchor: true,
    href: '/float'
  },
  {
    label: 'PHARMABOX',
    subtext:
      'A capstone project to deliver accessible prescription pickup for Canadians',
    anchor: true,
    href: '/pharmabox'
  },
  {
    label: 'HOOTSUITE',
    subtext:
      'Developing and deploy code to 18 million users on a daily basis, driving product growth and an unparalleled tool belt for social media gurus.',
    anchor: true,
    href: '/hootsuite'
  },
  {
    label: 'FINGER FOOD STUDIOS',
    subtext:
      'I developed a system to quantify UX for world class brands like LEGO, and led QA infrastructure development on bleeding edge mixed reality projects',
    anchor: true,
    href: '/finger-food-studios'
  }
]

const Work = forwardRef((): JSX.Element => {
  const [txt1Index, setTxt1Index] = useState(1)
  const [optionsIndex, setOptionsIndex] = useState(0)
  const [playText1, setPlayText1] = useState(true)
  const [playOptions, setPlayOptions] = useState(false)

  useInterval(
    () => {
      setTxt1Index((i) => i + 1)
      if (txt1Index >= txt1.length) {
        setPlayText1(false)
        setPlayOptions(true)
      }
    },
    playText1 ? timeout : null
  )

  useInterval(
    () => {
      setOptionsIndex((j) => j + 1)
      if (optionsIndex >= workOptions.length) {
        setPlayOptions(false)
      }
    },
    playOptions ? timeout : null
  )

  return (
    <>
      <Head>
        <title>Work</title>
      </Head>
      <div className=" bg-prussian-blue min-h-screen overflow-y-hidden">
        <div className="text-center p-16 z-10 flex flex-col justify-center gap-16 items-center">
          <h1 className="text-6xl font-bold text-canary tracking-tight text-center leading-[78px] max-w-7xl selection:text-ruby selection:bg-ocean-green fixed">
            {txt1.slice(0, txt1Index).map((word, index) => (
              <span
                key={`${word}-${uniqueId()}`}
                data-label={word.toLowerCase()}
                className={clsx(index === txt1Index - 1 && 'text-ocrean-green')}
                aria-label={word}
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
          </h1>
        </div>
        {optionsIndex > 0 && (
          <div className="text-center z-20">
            <div className="text-6xl py-8 relative font-bold text-canary tracking-tight text-center leading-[78px]  selection:text-ruby selection:bg-ocean-green bg-prussian-blue border-y-4">
              {workOptions
                .slice(0, optionsIndex)
                .map(({ label, href, subtext }, index) => (
                  <motion.div
                    whileHover={{
                      borderBottom: '4px solid',
                      borderTop: '4px solid'
                    }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    key={`${label}-${uniqueId()}`}
                    data-label={label.toLowerCase()}
                    className={` py-1 border-prussian-blue border-4 hover:bg-canary hover:text-prussian-blue ${clsx(
                      index === optionsIndex - 1 && 'text-ocrean-green'
                    )}`}
                  >
                    <Link
                      href={href}
                      aria-label={label.toLowerCase()}
                      aria-details={subtext}
                    >
                      {label.split('').map((letter) => (
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
                    </Link>
                  </motion.div>
                ))}
            </div>
          </div>
        )}
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

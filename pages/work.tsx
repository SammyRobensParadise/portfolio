import React, { forwardRef, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { uniqueId } from 'lodash'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { useInterval } from 'usehooks-ts'

import Layout from '../components/Layout'

const timeout = 200

const txt1 = ['THIS', 'IS', 'MY', 'WORK']

const Work = forwardRef((): JSX.Element => {
  const [txt1Index, setTxt1Index] = useState(1)
  const [playText1, setPlayText1] = useState(true)

  useInterval(
    () => {
      setTxt1Index((i) => i + 1)
      if (txt1Index >= txt1.length) {
        setPlayText1(false)
      }
    },
    playText1 ? timeout : null
  )

  return (
    <>
      <Head>
        <title>Work</title>
      </Head>
      <div className=" bg-prussian-blue min-h-screen overflow-y-hidden">
        <div className="text-center p-16  flex flex-col justify-center gap-16 items-center">
          <h1 className="text-6xl font-bold text-canary tracking-tight text-center leading-[78px] max-w-7xl selection:text-ruby selection:bg-ocean-green fixed">
            {txt1.slice(0, txt1Index).map((word, index) => (
              <span
                key={`${word}-${uniqueId()}`}
                data-label={word.toLowerCase()}
                className={clsx(index === txt1Index - 1 && 'text-ocrean-green')}
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

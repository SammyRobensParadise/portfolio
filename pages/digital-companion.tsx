import React, { forwardRef, useState } from 'react'
import Head from 'next/head'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { NextPage } from 'next'
import { useInterval } from 'usehooks-ts'

import Layout from '../components/Layout'

const timeout = 200

const txt1 = ['Digital', 'Companion']

const LandingPage = forwardRef((): JSX.Element => {
  const [txt1Index, setText1Index] = useState(1)
  const [playText1, setPlayText1] = useState(true)
  const [loaded, setLoaded] = useState(false)

  useInterval(
    () => {
      setText1Index((i) => i + 1)
      if (txt1Index >= txt1.length) {
        setPlayText1(false)
        setLoaded(true)
      }
    },
    playText1 ? timeout : null
  )

  return (
    <>
      <div>
        <Head>
          <title>Digital Companion</title>
        </Head>
        <div className=" bg-off-white min-h-screen">
          <div className="py-16 md:p-16 flex flex-col gap-8">
            <h1 className="text-6xl px-24 font-bold text-prussian-blue tracking-tight leading-[78px] selection:text-ruby selection:bg-prussian-blue">
              {txt1.slice(0, txt1Index).map((word, index) => (
                <span
                  key={`${word}-${index}`}
                  data-label={`${word}-${index}`}
                  className={clsx(index === txt1Index - 1 && 'text-canary')}
                >
                  {word.split('').map((letter, i) => (
                    <motion.span
                      key={`${word}-${letter}-${i}-${index}`}
                      data-label={`${word}-${letter}-${i}-${index}`}
                      whileHover={{
                        fontSize: '86px',
                        lineHeight: '60px',
                        letterSpacing: '-5px'
                      }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                  <span> </span>
                </span>
              ))}
            </h1>
          </div>
          <div className="px-16 space-y-16">{loaded && <></>}</div>
        </div>
      </div>
    </>
  )
})

const Page: NextPage = () => (
  <Layout>
    <LandingPage />
  </Layout>
)

export default Page

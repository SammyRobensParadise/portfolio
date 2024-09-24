import React, { forwardRef, useState } from 'react'
import Head from 'next/head'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { NextPage } from 'next'
import { useInterval } from 'usehooks-ts'

import Layout from '../components/Layout'
import Anchor from '../components/anchor'

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
                  className={clsx(index === txt1Index - 1 && 'text-ruby')}
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
          <div className="md:px-16">
            {loaded && (
              <div className="px-24 space-y-6">
                <div className="text-xl">
                  <Anchor anchor href="https://beacon.bio">
                    For Beacon Biosignals
                  </Anchor>
                </div>
                <div>
                  <span className="space-x-2 flex">
                    <p>My Role:</p>
                    <p>
                      Senior Product Designer, <i>Project Lead</i>
                    </p>
                  </span>
                </div>
                <h2 className="text-4xl text-prussian-blue font-semibold">
                  Project Overview
                </h2>

                <h2 className="text-4xl text-prussian-blue font-semibold">
                  The Problem
                </h2>
                <p>
                  Patients undergoing treatment for sleep-related often struggle
                  to understand how their medication affects their sleep,
                  especially outside of clinical studies. This can result in
                  confusion about the effectiveness of the treatment, leading to
                  non-adherence or improper use of medication.
                </p>
                <p>
                  There are a wide variety of medication that affect sleep, many
                  in ways that are unique to each patient. In many cases, the
                  effectiveness of a therapy is assoicated to the time that it
                  is taken, however this also varies from patient to patient.
                </p>
                <h2 className="text-4xl text-prussian-blue font-semibold">
                  Research
                </h2>
                <p>This is a problem statement</p>
                <h2 className="text-4xl text-prussian-blue font-semibold">
                  The Solution
                </h2>
                <p>This is a problem statement</p>
              </div>
            )}
          </div>
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

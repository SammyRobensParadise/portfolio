import React, { Suspense, forwardRef, useState } from 'react'
import Head from 'next/head'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { NextPage } from 'next'
import { useInterval } from 'usehooks-ts'

import Layout from '../components/Layout'
import Particles from '../3d/particles'
import Button from '../components/button'
import ParalaxBlock from '../components/paralax'

const timeout = 200

const txt1 = ['BEACON', 'BIOSIGNALS']

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
          <title>Sammy Robens-Paradise</title>
        </Head>
        <div className=" bg-prussian-blue min-h-screen">
          <div className="text-center p-16  flex flex-col justify-center gap-8 items-center">
            <h1 className="text-6xl font-bold text-canary tracking-tight  text-center leading-[78px] max-w-7xl selection:text-ruby selection:bg-prussian-blue">
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
            <Suspense fallback={<p>Loading...</p>}>
              <Particles />
            </Suspense>
          </div>
          <div className="p-16 space-y-16">
            {loaded && (
              <>
                <div className="bg-canary p-16 rounded-sm">
                  <h3 className=" text-prussian-blue text-4xl font-bold">
                    Product Design at Beacon
                  </h3>
                  <p className="py-8 text-prussian-blue text-lg selection:bg-ruby selection:text-canary">
                    Product design at Beacon involves a number of things, lorem
                    impsum etc Product design at Beacon involves a number of
                    things, lorem impsum etc Product design at Beacon involves a
                    number of things, lorem impsum etc Product design at Beacon
                    involves a number of things, lorem impsum etc Product design
                    at Beacon involves a number of things, lorem impsum etc
                    Product design at Beacon involves a number of things, lorem
                    impsum etc Product design at Beacon involves a number of
                    things, lorem impsum etc Product design at Beacon involves a
                    number of things, lorem impsum etc Product design at Beacon
                    involves a number of things, lorem impsum etc Product design
                    at Beacon involves a number of things, lorem impsum etc
                  </p>
                </div>
                <ParalaxBlock
                  speed={300}
                  paralaxComponent={
                    <h3 className=" text-canary text-4xl font-bold">
                      Product Design at Beacon
                    </h3>
                  }
                >
                  <p className="py-8 text-canary text-lg selection:bg-ruby selection:text-canary">
                    Product design at Beacon involves a number of things, lorem
                    impsum etc Product design at Beacon involves a number of
                    things, lorem impsum etc Product design at Beacon involves a
                    number of things, lorem impsum etc Product design at Beacon
                    involves a number of things, lorem impsum etc Product design
                    at Beacon involves a number of things, lorem impsum etc
                    Product design at Beacon involves a number of things, lorem
                    impsum etc Product design at Beacon involves a number of
                    things, lorem impsum etc Product design at Beacon involves a
                    number of things, lorem impsum etc Product design at Beacon
                    involves a number of things, lorem impsum etc Product design
                    at Beacon involves a number of things, lorem impsum etc
                  </p>
                </ParalaxBlock>
              </>
            )}
            <div className="py-8">
              <Button href="/work" anchor>
                Back to Work
              </Button>
            </div>
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

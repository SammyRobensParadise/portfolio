import React, { forwardRef, useState } from 'react'
import Head from 'next/head'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { NextPage } from 'next'
import { useInterval } from 'usehooks-ts'

import Button from '../components/button'
import Layout from '../components/Layout'

const timeout = 200

const txt1 = [
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
const txt2 = ['THESE', 'ARE', 'YOUR', 'CHOICES']
const options: Array<{
  label: string
  variant: 'primary' | 'secondary'
  anchor: boolean
  href: string
}> = [
  { label: 'SEE WORK', anchor: true, variant: 'secondary', href: '/work' },
  {
    label: 'VIEW RESUME',
    anchor: true,
    variant: 'secondary',
    href: '/SammyRPResume.pdf'
  },
  { label: 'ABOUT ME', anchor: true, variant: 'secondary', href: '/about' }
]
const txt3 = ['JOIN', 'THE', 'PARTY.']

const LandingPage = forwardRef((): JSX.Element => {
  const [txt1Index, setText1Index] = useState(1)
  const [txt2Index, setText2Index] = useState(0)
  const [optionsIndex, setOptionsIndex] = useState(0)
  const [text3Index, setText3Index] = useState(0)

  const [playText1, setPlayText1] = useState(true)
  const [playText2, setPlayText2] = useState(false)
  const [playOptions, setPlayOptions] = useState(false)
  const [playText3, setPlayText3] = useState(false)

  useInterval(
    () => {
      setText1Index((i) => i + 1)
      if (txt1Index >= txt1.length) {
        setPlayText1(false)
        setPlayText2(true)
      }
    },
    playText1 ? timeout : null
  )

  useInterval(
    () => {
      setText2Index((j) => j + 1)
      if (txt2Index >= txt2.length) {
        setPlayText2(false)
        setPlayOptions(true)
      }
    },
    playText2 ? timeout : null
  )

  useInterval(
    () => {
      setOptionsIndex((k) => k + 1)
      if (optionsIndex >= txt3.length) {
        setPlayOptions(false)
        setPlayText3(true)
      }
    },
    playOptions ? timeout : null
  )

  useInterval(
    () => {
      setText3Index((l) => l + 1)
      if (text3Index >= txt3.length) {
        setPlayText3(false)
      }
    },
    playText3 ? timeout * 2 : null
  )

  return (
    <>
      <div>
        <Head>
          <title>Sammy Robens-Paradise</title>
        </Head>
        <div className=" bg-ocrean-green min-h-screen">
          <div className="text-center p-16  flex flex-col justify-center gap-16 items-center">
            <h1 className="text-6xl font-bold text-prussian-blue tracking-tight  text-center leading-[78px] max-w-7xl selection:text-ruby selection:bg-prussian-blue">
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
            <div className="gap-12">
              <h2 className=" text-5xl font-bold text-prussian-blue tracking-tight  text-center leading-[60px] max-w-6xl  selection:bg-ruby selection:text-prussian-blue">
                {txt2.slice(0, txt2Index).map((word, index) => (
                  <span
                    key={`two-${word}-${index}`}
                    data-label={`two-${word}-${index}`}
                    className={clsx(
                      index === txt2Index - 1 &&
                        optionsIndex <= 0 &&
                        'text-canary'
                    )}
                  >
                    {word.split('').map((letter, i) => (
                      <span
                        key={`two-${word}-${letter}-${i}-${index}`}
                        data-label={`two-${word}-${letter}-${i}-${index}`}
                      >
                        <motion.span
                          whileHover={{
                            fontSize: '64px',
                            lineHeight: '48px',
                            letterSpacing: '-2.5px'
                          }}
                        >
                          {letter}
                        </motion.span>
                      </span>
                    ))}{' '}
                  </span>
                ))}
              </h2>
              <div className="flex flex-col space-y-24 py-16 lg:space-x-24 lg:py-16 lg:block ">
                {options
                  .slice(0, optionsIndex)
                  .map(({ label, href }, index) => (
                    <span
                      key={`button-${label}-${index}`}
                      data-label={`button-${label}-${index}`}
                    >
                      <motion.span>
                        <Button
                          anchor
                          href={href}
                          variant={
                            clsx({
                              secondary: index === optionsIndex - 1,
                              primary: index !== optionsIndex - 1
                            }) as 'primary' | 'secondary'
                          }
                        >
                          {label}
                        </Button>
                      </motion.span>
                    </span>
                  ))}
              </div>
              <h2 className=" text-5xl font-bold text-prussian-blue tracking-tight  text-center leading-[60px] max-w-6xl  selection:bg-ruby selection:text-prussian-blue">
                {txt3.slice(0, text3Index).map((word, index) => (
                  <span
                    key={`two-${word}-${index}`}
                    data-label={`two-${word}-${index}`}
                    className={clsx(index === text3Index - 1 && 'text-canary')}
                  >
                    {word.split('').map((letter, i) => (
                      <span
                        key={`two-${word}-${letter}-${i}-${index}`}
                        data-label={`two-${word}-${letter}-${i}-${index}`}
                      >
                        <motion.span
                          whileHover={{
                            fontSize: '64px',
                            lineHeight: '48px',
                            letterSpacing: '-2.5px'
                          }}
                        >
                          {letter}
                        </motion.span>
                      </span>
                    ))}{' '}
                  </span>
                ))}
              </h2>
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

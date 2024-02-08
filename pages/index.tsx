import React, { forwardRef, useEffect, useState } from 'react'
import Head from 'next/head'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { NextPage } from 'next'

import Button from '../components/button'
import Layout from '../components/Layout'

const LandingPage = forwardRef((): JSX.Element => {
  const [idx, setIdx] = useState(1)
  const [idx2, setIdx2] = useState(0)
  const [idx3, setIdx3] = useState(0)
  const [idx4, setIdx4] = useState(0)

  const timeout = 200

  const introText = [
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
  const introText2 = ['THESE', 'ARE', 'YOUR', 'CHOICES']
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
  const introText4 = ['JOIN', 'THE', 'PARTY.']

  useEffect(() => {
    let secInterval: NodeJS.Timeout
    let interval: NodeJS.Timeout
    let thirdInterval: NodeJS.Timeout
    let fourthInterval: NodeJS.Timeout
    const condition =
      idx <= introText.length + 1 &&
      idx2 <= introText2.length + 1 &&
      idx3 <= options.length + 1 &&
      idx4 <= options.length + 1

    if (condition) {
      interval = setInterval(() => {
        setIdx((s) => s + 1)
      }, timeout)
      if (idx >= introText.length + 1) {
        clearInterval(interval)
        secInterval = setInterval(() => {
          if (idx2 >= introText2.length) {
            clearInterval(secInterval)
            thirdInterval = setInterval(() => {
              setIdx3((s) => s + 1)
              if (idx3 >= options.length) {
                clearInterval(thirdInterval)
                fourthInterval = setInterval(() => {
                  setIdx4((s) => s + 1)
                  if (idx4 >= introText4.length) {
                    clearInterval(fourthInterval)
                  }
                }, timeout * 1.5)
              }
            }, timeout)
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
  }, [
    idx,
    idx2,
    idx3,
    idx4,
    introText.length,
    introText2.length,
    introText4.length,
    options.length
  ])

  return (
    <>
      <div>
        <Head>
          <title>Sammy Robens-Paradise</title>
        </Head>
        <div className=" bg-ocrean-green min-h-screen">
          <div className="text-center p-16  flex flex-col justify-center gap-16 items-center">
            <h1 className="text-6xl font-bold text-prussian-blue tracking-tight  text-center leading-[78px] max-w-7xl selection:text-ruby selection:bg-prussian-blue">
              {introText.slice(0, idx).map((word, index) => (
                <span
                  key={`${word}-${index}`}
                  data-label={`${word}-${index}`}
                  className={clsx(index === idx - 1 && 'text-canary')}
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
                {introText2.slice(0, idx2).map((word, index) => (
                  <span
                    key={`two-${word}-${index}`}
                    data-label={`two-${word}-${index}`}
                    className={clsx(
                      index === idx2 - 1 && idx3 <= 0 && 'text-canary'
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
                {options.slice(0, idx3).map(({ label, href }, index) => (
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
                            secondary: index === idx3 - 1,
                            primary: index !== idx3 - 1
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
                {introText4.slice(0, idx4).map((word, index) => (
                  <span
                    key={`two-${word}-${index}`}
                    data-label={`two-${word}-${index}`}
                    className={clsx(index === idx4 - 1 && 'text-canary')}
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

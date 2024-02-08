import React, { forwardRef, useLayoutEffect, useState } from 'react'
import Head from 'next/head'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { NextPage } from 'next'
import { useInterval } from 'usehooks-ts'

import Button from '../components/button'
import Layout from '../components/Layout'

const LandingPage = forwardRef((): JSX.Element => {
  const [idx, setIdx] = useState(1)
  const [idx2, setIdx2] = useState(0)
  const [idx3, setIdx3] = useState(0)
  const [idx4, setIdx4] = useState(0)

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

  useLayoutEffect(() => {
    let intv1: NodeJS.Timeout | number = 0
    let intv2: NodeJS.Timeout | number = 0
    let intv3: NodeJS.Timeout | number = 0
    let intv4: NodeJS.Timeout | number = 0
    const condition =
      idx <= txt1.length + 1 &&
      idx2 <= txt2.length + 1 &&
      idx3 <= options.length + 1 &&
      idx4 <= options.length + 1
    if (condition) {
      intv1 = setInterval(() => {
        setIdx((s) => s + 1)
      }, timeout)
      if (idx >= txt1.length + 1) {
        clearInterval(intv1)
        intv2 = setInterval(() => {
          if (idx2 >= txt2.length) {
            clearInterval(intv2)
            intv3 = setInterval(() => {
              setIdx3((s) => s + 1)
              if (idx3 >= options.length) {
                clearInterval(intv3)
                intv4 = setInterval(() => {
                  setIdx4((s) => s + 1)
                  if (idx4 >= txt3.length) {
                    clearInterval(intv4)
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
      clearInterval(intv1)
      clearInterval(intv2)
      clearInterval(intv3)
    }
  })

  return (
    <>
      <div>
        <Head>
          <title>Sammy Robens-Paradise</title>
        </Head>
        <div className=" bg-ocrean-green min-h-screen">
          <div className="text-center p-16  flex flex-col justify-center gap-16 items-center">
            <h1 className="text-6xl font-bold text-prussian-blue tracking-tight  text-center leading-[78px] max-w-7xl selection:text-ruby selection:bg-prussian-blue">
              {txt1.slice(0, idx).map((word, index) => (
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
                {txt2.slice(0, idx2).map((word, index) => (
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
                {txt3.slice(0, idx4).map((word, index) => (
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

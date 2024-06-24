import React, { forwardRef } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import Layout from '../components/Layout'
import Button from '../components/button'
import Anchor from '../components/anchor'

const Work = forwardRef(
  (): JSX.Element => (
    <>
      <Head>
        <title>About Me: Sammy</title>
      </Head>
      <div className="bg-off-white  min-h-screen overflow-y-hidden">
        <div className="p-16 flex justify-center gap-16 items-center">
          <h1 className="text-5xl px-24 font-bold text-prussian-blue leading-tight max-w-7xl selection:text-ruby selection:bg-prussian-blue">
            I’m Sammy Robens-Paradise, a product designer who weaves engineering
            principles and beautiful design to solve problems for people.
          </h1>
        </div>
        <div className="px-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-24">
            <div className="col-span-2 text-gray text-xl space-y-6">
              <p>
                I&apos;m a versatile designer with a strong background in
                engineering and a passion for tackling complex problems through
                an iterative design process. My journey has taken me through a
                variety of exciting fields, including medicine, gaming, consumer
                products, heavy industry, and social media. Each experience has
                enriched my perspective and honed my skills.
              </p>
              <p>
                I leverage principles of engineering design to craft innovative
                and practical solutions that truly make a quantifiable
                difference for users that extends beyond the product. I have a
                special passion for accessible design, where I strive to create
                inclusive and user-friendly experiences for everyone, regardless
                of their abilities and background.
              </p>
              <p>
                I thrive on feedback from users and work with teams, large and
                small to constantly improve solutions to complex problems.
                Whether I&apos;m designing for a medical device, a new gaming
                interface, or an industrial tool, my goal is to deliver
                delightful, quantifiable, and impactful results when they matter
                most.
              </p>
            </div>
            <div className=" w-full h-full">
              <Image
                src="/me.png"
                alt="Sammy Robens-Paradise"
                width={254}
                height={432}
              />
            </div>
          </div>
        </div>
        <div className="p-16">
          <div className="px-24 space-y-12 flex flex-col">
            <div>
              <Button
                anchor
                href="mailto:srobensparadise@gmail.com"
                variant="primary"
              >
                GET IN TOUCH
              </Button>
            </div>
            <div className="text-xl">
              <Anchor anchor href="/work">
                See my work
              </Anchor>
            </div>
          </div>
        </div>
      </div>
    </>
  )
)

const WorkPage: NextPage = () => (
  <Layout>
    <Work />
  </Layout>
)
export default WorkPage

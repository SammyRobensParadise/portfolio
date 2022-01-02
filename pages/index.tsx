import React from 'react'
import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import { Transition } from '@headlessui/react'
import { Parallax } from 'react-scroll-parallax'
import { generateUUID } from 'three/src/math/MathUtils'

import BlobElement from '../components/Blob/Blob'
import { animate, cubicBezier } from '../global/helpers/animation'
import Table from '../components/Table/Table'
import { RESUME_FILE_NAME } from '../global/constants/constants'
import Headshot from '../components/Headshot/Headshot'
import useTransition from '../hooks/transition'
import useResizeParalax from '../hooks/resize'

const LANDING_MESSAGE =
  'I AM SAMMY ROBENS-PARADISE, DESIGNER AND FULL-STACK WEB DEVELOPER'

const LandingPage: NextPage = (): JSX.Element => {
  const { visibility, handlePageTransition } = useTransition({ timeout: 0 })
  useResizeParalax()

  return (
    <>
      <Head>
        <title>Sammy</title>
      </Head>
      <div>
        <div title={LANDING_MESSAGE}>
          <Transition
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            show={visibility}
            appear
            enter={`${animate(1000, 1000)} ${cubicBezier(
              0.97,
              0.03,
              0.36,
              0.45
            )}`}
            leave={`${animate(250, 0)} ${cubicBezier(0.97, 0.03, 0.36, 0.45)}`}
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leaveTo="opacity-0"
            leaveFrom="opacity-100"
          >
            <Transition.Child
              className="px-8 sm:pl-24 sm:pr-0 z-30"
              enter="transition-opacity ease-linear duration-300 delay-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300 delay-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div>
                <h1 className="text-cerulaen dark:text-off-white font-work font-extrabold text-5xl sm:text-7xl sm:pl-6 z-50 tracking-tighter">
                  {Array.from(LANDING_MESSAGE).map((letter: string) => (
                    <span
                      key={generateUUID()}
                      className="transition transform hover:text-highlight z-50"
                    >
                      {letter}
                    </span>
                  ))}
                </h1>
              </div>
            </Transition.Child>
            <div className="hidden sm:block z-0">
              <div className="flex">
                <BlobElement
                  color="#2B2B2B"
                  className="absolute"
                  radius={250}
                  height={500}
                />
                <BlobElement
                  color="#3F46F3"
                  className="absolute blue"
                  radius={200}
                  height={500}
                />
                <BlobElement
                  color="#3FF3B2"
                  className="absolute green"
                  radius={150}
                  height={500}
                />
              </div>
            </div>
          </Transition>
        </div>
        <Transition
          appear
          className="space-y-24 px-8 md:px-32 z-40 pt-32"
          id="tables"
          show={visibility}
          enter="transition-opacity ease-linear duration-300 delay-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave={`${animate(250, 0)} ${cubicBezier(0.97, 0.03, 0.36, 0.45)}`}
          leaveTo="opacity-0 -translate-x-full scale-150"
          leaveFrom="opacity-100"
        >
          <Table
            id="work-table"
            headers={['Work']}
            rows={[
              {
                onClick: () => {
                  handlePageTransition('/beacon-biosignals')
                },
                elements: [
                  {
                    name: 'Beacon.bio',
                    type: 'text'
                  },
                  {
                    type: 'style',
                    name: 'Revolutionizing end-to-end clinician workflows with interactive data visualization and machine learning.'
                  },
                  { name: "'21 - Present", type: 'text' }
                ]
              },
              {
                onClick: () => {
                  handlePageTransition('/float-card')
                },
                elements: [
                  { name: 'Float Card', type: 'text' },
                  {
                    type: 'style',
                    name: 'Bringing expense managment to the future.'
                  },
                  { name: "'20 - '21", type: 'text' }
                ]
              },
              {
                onClick: () => {
                  handlePageTransition('/puma')
                },
                elements: [
                  { name: 'PUMA', type: 'text' },
                  {
                    type: 'style',
                    name: 'Leading better design for data scientists'
                  },
                  { name: "'20 - '20", type: 'text' }
                ]
              },
              {
                onClick: () => {
                  handlePageTransition('/hootsuite')
                },
                elements: [
                  { name: 'Hootsuite', type: 'text' },
                  {
                    type: 'style',
                    name: "Kickstarting Hootsuite's W3C AA/AAA accessibility implementation strategy."
                  },
                  { name: "'19 - '19", type: 'text' }
                ]
              },
              {
                onClick: () => {
                  handlePageTransition('/unity-finger-foods')
                },
                elements: [
                  { name: 'Unity, FF', type: 'text' },
                  {
                    type: 'style',
                    name: 'AR, VR, XR, computer vision and your childhood toys re-imagined '
                  },
                  { name: "'18 - '19", type: 'text' }
                ]
              }
            ]}
          />
          <Table
            id="projects-table"
            headers={['Projects']}
            rows={[
              {
                onClick: () => {
                  handlePageTransition('/github-stats')
                },
                elements: [
                  { name: 'Github Stats', type: 'text' },
                  {
                    type: 'style',
                    name: 'Report Github contributions on your websites.'
                  },
                  { name: "'20 - Present", type: 'text' }
                ]
              },
              {
                onClick: () => {
                  handlePageTransition('/intensif-eye')
                },
                elements: [
                  { name: 'Intensif-Eye, AI', type: 'text' },
                  {
                    type: 'style',
                    name: 'Information access for our visually impared.'
                  },
                  { name: "'19'", type: 'text' }
                ]
              },
              {
                onClick: () => {
                  handlePageTransition('/arduino-scream')
                },
                elements: [
                  { name: 'Arduino Scream', type: 'text' },
                  {
                    type: 'style',
                    name: 'Open a safe by screaming at it? Sure thing!'
                  },
                  { name: "'19", type: 'text' }
                ]
              }
            ]}
          />
        </Transition>

        <div id="about" className="px-8 pt-8 pb-24 sm:p-24">
          <Transition
            appear
            show={visibility}
            enter="transition-opacity ease-linear duration-300 delay-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave={`${animate(1000, 0)} ${cubicBezier(0.97, 0.03, 0.36, 0.45)}`}
            leaveTo="opacity-0 translate-x-full scale-150 h-full"
            leaveFrom="opacity-100"
          >
            <Parallax x={[-10, 5]}>
              <h2
                id="about"
                className="text-3xl justify-start text-left pb-4 block text-cerulaen dark:text-off-white font-bold"
              >
                About
              </h2>
            </Parallax>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-cerulaen dark:text-off-white text-lg">
              <div className="space-y-8 pr-4 sm:col-span-2 z-50">
                <Parallax x={[-5, 2]}>
                  <div className="space-y-4">
                    <p>
                      I study systems design engineering, a problem-based
                      engineering approach to complex systems. I use principles
                      of UX/UI design, ergonomic design, and accessibility to
                      engineer creative solutions for our world&apos;s most
                      complex problems.
                    </p>
                    <p>
                      I have designed and developed dozens of solutions for the
                      biomedical, financial, gaming, social media, and energy
                      industries tackling complex usability and experiential
                      problems.
                    </p>
                    <p>
                      I work with a complete software stack to build beautiful
                      accessibility-driven experiences and am specializing in
                      computing and human-computer interaction including
                      networking and machine intelligence.
                    </p>
                    <Link href={RESUME_FILE_NAME} passHref>
                      <p className="underline transition-all hover:font-semibold">
                        See my Résume...
                      </p>
                    </Link>
                  </div>
                </Parallax>
                <Parallax x={[-10, 10]}>
                  <h2 className="text-3xl text-left pb-4 block text-cerulaen dark:text-off-white font-bold">
                    Focus
                  </h2>
                </Parallax>
                <Parallax x={[10, -5]}>
                  <p>
                    UX and ergonomic design, software development, systems
                    modeling and analysis, prototyping and quantitative design
                    patterns, HCI design, signal processing, circuit design,
                    data structures and algorithms, system optimization, control
                    systems, physical ergonomics
                  </p>
                </Parallax>
              </div>
              <div className=" pl-4 sm:col-span-1">
                <Headshot />
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </>
  )
}

export default LandingPage

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
import RightArrow from '../global/assets/rightArrow.svg'
import { RESUME_FILE_NAME } from '../global/constants/constants'
import Headshot from '../components/Headshot/Headshot'

const LANDING_MESSAGE =
  'I AM SAMMY ROBENS-PARADISE, DESIGNER AND FULL-STACK WEB DEVELOPER'
const styleOffsetOverride: {
  fontSize: string
  lineHeight: string
} = { fontSize: '4.51rem', lineHeight: '1' }

const LandingPage: NextPage = (): JSX.Element => (
  <>
    <Head>
      <title>Sammy</title>
    </Head>
    <div className="relative" title={LANDING_MESSAGE}>
      <Parallax y={[-20, 20]}>
        <Transition
          className="grid grid-cols-2 gap-4 h-full relative"
          show
          appear
          enter={`${animate(1000, 1000)} ${cubicBezier(
            0.97,
            0.03,
            0.36,
            0.45
          )}`}
          enterFrom="opacity-0"
          enterTo="opaciy-100"
        >
          <Transition.Child
            className="p-24 pt-48"
            enter="transition-opacity ease-linear duration-300 delay-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300 delay-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <h1
              className="text-off-white dark:text-cerulaen font-work font-extrabold w-2/3 absolute z-20 tracking-tighter"
              style={styleOffsetOverride}
            >
              {LANDING_MESSAGE}
            </h1>
            <h1 className="text-cerulaen dark:text-off-white font-work font-extrabold text-7xl w-2/3 absolute z-20 tracking-tighter">
              {Array.from(LANDING_MESSAGE).map((letter: string) => (
                <span
                  key={generateUUID()}
                  className="transition hover:text-highlight"
                >
                  {letter}
                </span>
              ))}
            </h1>
          </Transition.Child>
          <div>
            <Parallax y={[-50, 50]}>
              <div className="flex">
                <BlobElement
                  color="#2B2B2B black"
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
            </Parallax>
          </div>
        </Transition>
      </Parallax>
    </div>
    <div className="relative pt-96 isolate p-24 mt-36 space-y-24" id="tables">
      <Table
        id="work-table"
        headers={['Work']}
        footers={[
          <div
            key="view-more"
            className="text-cerulaen dark:text-off-white inline-flex space-x-4 transform transition focus:scale-125 outline-none hover:scale-125 cursor-pointer"
          >
            <p className="leading-6 ">View More</p>
            <div>
              <RightArrow />
            </div>
          </div>
        ]}
        rows={[
          {
            elements: [
              {
                name: 'Beacon Biosignals',
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
            elements: [
              { name: 'Unity, Finger Foods', type: 'text' },
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
        footers={[
          <div
            key="view-more"
            className="text-cerulaen dark:text-off-white inline-flex space-x-4 transform transition hover:scale-125 cursor-pointer focus:scale-125 outline-none"
          >
            <p className="leading-6 ">View More</p>
            <div>
              <RightArrow />
            </div>
          </div>
        ]}
        rows={[
          {
            elements: [
              {
                name: 'Verify, Social Media',
                type: 'text'
              },
              {
                type: 'style',
                name: 'Uncover mis-information right in your instagram feed.'
              },
              { name: "'21 - Present", type: 'text' }
            ]
          },
          {
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
    </div>
    <div id="about" className="p-24 pt-0">
      <Parallax x={['-400px', '112px']}>
        <h2 className="text-3xl justify-start text-left pb-4 h-14 block text-cerulaen dark:text-off-white font-bold">
          About
        </h2>
      </Parallax>
      <div className="grid grid-cols-3 gap-4 text-cerulaen dark:text-off-white text-lg">
        <div className="space-y-8 pr-4 col-span-2 z-50">
          <Parallax x={['-200px', '112px']}>
            <p>
              I study systems design engineering, a problem-based engineering
              approach to complex systems. I use principles of UX/UI design,
              ergonomic design, and accessibility to engineer creative solutions
              for our worlds most complex problems.
            </p>
            <p>
              I have designed and developed dozens of solutions for the
              biomedical, financial, gaming, social media, and energy industries
              tackling complex usabililty and experential problems.
            </p>
            <p>
              I work with a complete software stack to build beautiful
              accessibility-driven experiences and am specializing in computing
              and human-computer interaction including networking and machine
              intelligence.
            </p>
            <Link href={RESUME_FILE_NAME} passHref>
              <p className="underline transition-all cursor-pointer hover:font-semibold">
                See my Résume...
              </p>
            </Link>
          </Parallax>
          <Parallax x={['60px', '0px']}>
            <h2 className="text-3xl text-left pb-4 h-14 block text-cerulaen dark:text-off-white font-bold">
              Focus
            </h2>
          </Parallax>
          <Parallax x={['60px', '-60px']}>
            <p>
              UX and ergonomic design, software development, systems modeling
              and analysis, prototyping and quantitative design patterns, HCI
              design, signal processing, circuit design, data structures and
              algorithms, system optimization, control systems, physical
              ergonomics
            </p>
          </Parallax>
        </div>

        <div className="pl-4 col-span-1">
          <Headshot />
        </div>
      </div>
    </div>
  </>
)

export default LandingPage

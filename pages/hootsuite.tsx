import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Transition } from '@headlessui/react'

import useTransition from '../hooks/transition'
import { animate, cubicBezier } from '../global/helpers/animation'
import Flow from '../components/Flow/Flow'
import ScrollButton from '../components/ScrollButton/ScrollButton'
import HootsuiteMac from '../components/Mac/Mac'
import useResizeParalax from '../hooks/resize'

const Hootsuite: NextPage = (): JSX.Element => {
  const { visibility, handlePageTransition } = useTransition({ timeout: 0 })
  useResizeParalax()
  function handleScrollButtonClick() {
    handlePageTransition('/unity-finger-foods')
  }
  const flowWidth = window.innerWidth < 374 + 12 ? window.innerWidth - 100 : 374
  const flowHeight = flowWidth * (281 / 374)
  return (
    <>
      <Head>
        <title>Sammy - Hootsuite 🦉</title>
      </Head>

      <div>
        <div id="hootsuite-landing">
          <Transition
            className="px-8 md:px-40 pt-6"
            show={visibility}
            appear
            enter={`${animate(1000, 0)} ${cubicBezier(0.97, 0.03, 0.36, 0.45)}`}
            leave={`${animate(250, 0)} ${cubicBezier(0.97, 0.03, 0.36, 0.45)}`}
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leaveTo="opacity-0"
            leaveFrom="opacity-100"
          >
            <h1 className="text-cerulaen dark:text-off-white font-work font-extrabold text-5xl md:text-7xl z-20 tracking-tighter text-left pr-28">
              Software Developer @Hootsuite
            </h1>
          </Transition>
          <div className="relative z-30">{visibility && <HootsuiteMac />}</div>
        </div>
        <Transition
          className="px-8 md:px-40 relative opacity-0"
          appear
          show={visibility}
          enter={`${animate(1000, 0)} ${cubicBezier(0.97, 0.03, 0.36, 0.45)}`}
          leave={`${animate(1000, 0)} ${cubicBezier(0.97, 0.03, 0.36, 0.45)}`}
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leaveTo="opacity-0"
          leaveFrom="opacity-100"
        >
          <div>
            <h2 className="text-3xl md:text-5xl justify-start text-left block text-cerulaen dark:text-off-white font-bold">
              My Contributions
            </h2>
            <ul className="list-inside list-disc space-y-2 text-shadow dark:text-off-white text-lg py-4">
              <li>
                Owned, maintained, and built all parts of Hootsuite that dealt
                with the scheduling, and creation of content, used by 18 million
                users, and shared with hundreds of millions of users across
                multiple social media platforms
              </li>
              <li>
                I worked primarily with Hootsuite&#39;s React-based frontend
                building features that enhanced users&#39; abilities to schedule
                content across multiple timezones. Much love for the team at
                Hootsuite!
              </li>
            </ul>
            <h2 className="text-3xl md:text-5xl justify-start text-left block text-cerulaen dark:text-off-white font-bold">
              A Deeper Dive
            </h2>
            <div className="space-y-4 py-4">
              <p className="text-shadow dark:text-off-white text-lg">
                I had the opportunity to work on multiple projects while at
                Hootsuite and was able to contribute to all aspects of the
                software development lifecycle. I Implemented front-end calendar
                service redesign to meet the marketing needs of Hootsuite&#39;s
                global clients in react.js, allowing users to customize how they
                view a week&#39;s content schedule.
              </p>
              <p className="text-shadow dark:text-off-white text-lg">
                I championed efforts along with a team of front-end developers
                to promote flat react architecture, reducing the number of
                render calls that reduced app TTI and degraded KPI conformance.
                I also led an initiative backed by 130 developers to create W3C
                AA accessibility implementation strategy at Hootsuite and
                developed accessibility CI/CD pipeline automation to ensure that
                developers were deploying code that met accessibility standards.
              </p>
              <p className="text-shadow dark:text-off-white text-lg">
                I also led an initiative backed by 130 developers to create W3C
                AA accessibility implementation strategy at Hootsuite and
                developed accessibility CI/CD pipeline automation to ensure that
                developers were deploying code that met accessibility standards.
              </p>
            </div>
          </div>
        </Transition>
        <Transition
          className="px-8 md:px-40 relative"
          show={visibility}
          enter={`${animate(1000, 500)} ${cubicBezier(0.97, 0.03, 0.36, 0.45)}`}
          leave={`${animate(1000, 0)} ${cubicBezier(0.97, 0.03, 0.36, 0.45)}`}
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leaveTo="opacity-0"
          leaveFrom="opacity-100"
        >
          <div className="grid transform justify-items-center py-16">
            <Flow
              src="/hs-logo.png"
              height={`${flowHeight}px`}
              width={`${flowWidth}px`}
              alt="hootsuite art"
            />
          </div>
        </Transition>
        <div className="grid justify-items-center pt-3 pb-6 items-center">
          <ScrollButton handler={handleScrollButtonClick} name="Finger Foods" />
        </div>
      </div>
    </>
  )
}

export default Hootsuite

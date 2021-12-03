import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Transition } from '@headlessui/react'
import { Parallax } from 'react-scroll-parallax'

import ThreeStage from '../components/Stage/ThreeStage'
import Brain from '../components/Brain/Brain'
import useTransition from '../hooks/transition'
import { animate, cubicBezier } from '../global/helpers/animation'
import Flow from '../components/Flow/Flow'
import ScrollButton from '../components/ScrollButton/ScrollButton'

const BeaconBiosignals: NextPage = (): JSX.Element => {
  const { visibility, handlePageTransition } = useTransition({ timeout: 1000 })

  return (
    <>
      <Head>
        <title>Sammy - Beacon 🧠</title>
      </Head>

      <div>
        <div id="beacon-biosignals-landing">
          <Transition
            className="grid justify-items-center pb-48 pt-6 md:pb-64"
            show={visibility}
            appear
            enter={`${animate(1000, 0)} ${cubicBezier(0.97, 0.03, 0.36, 0.45)}`}
            leave={`${animate(1000, 0)} ${cubicBezier(0.97, 0.03, 0.36, 0.45)}`}
            enterFrom="opacity-0"
            enterTo="opaciy-100"
            leaveTo="opacity-0"
            leaveFrom="opacity-100"
          >
            <h1 className="text-cerulaen dark:text-off-white font-work font-extrabold text-7xl w-2/3 absolute z-20 tracking-tighter text-center">
              Working with Beacon Biosignals to revolutionize the way we analyze
              the brain and change lives while doing it.
            </h1>
          </Transition>
          <div className="relative transition transform z-50">
            <Parallax y={['0px', '100px']}>
              {visibility && (
                <ThreeStage height={400}>
                  <Brain scale={0.2} position={[0, 0, -10]} shadow />
                </ThreeStage>
              )}
            </Parallax>
          </div>
        </div>
        <Transition
          className="px-40 relative opacity-0"
          appear
          show={visibility}
          enter={`${animate(1000, 0)} ${cubicBezier(0.97, 0.03, 0.36, 0.45)}`}
          leave={`${animate(1000, 0)} ${cubicBezier(0.97, 0.03, 0.36, 0.45)}`}
          enterFrom="opacity-0"
          enterTo="opaciy-100"
          leaveTo="opacity-0"
          leaveFrom="opacity-100"
        >
          <div>
            <h2 className="text-5xl justify-start text-left h-14 block text-cerulaen dark:text-off-white font-bold">
              What I do at Beacon
            </h2>
            <ul className="list-inside list-disc space-y-2 text-shadow dark:text-off-white text-lg py-4">
              <li>
                I work with specialized developers, designers, and scientists to
                revolutionize precision medicine for the brain using the latest
                and greatest in web technology.
              </li>
              <li>
                Build end-to-end clinician workflows that combine in-browser
                signal processing, interactive data visualization, and machine
                learning reader-assist.
              </li>
              <li>
                Problem-solve alongside neurologists and data scientists to
                design and develop web-based tools bring neuroscience tooling to
                the web.
              </li>
              <li>
                I spend my time co-developing brainwave data visualization
                interfaces in React and Figma seeking continuious feedback and
                iteration from key stakeholders.
              </li>
            </ul>

            <h2 className="text-5xl justify-start text-left block text-cerulaen dark:text-off-white font-bold">
              A Case Study in Web Engineering
            </h2>
            <h3 className="text-2xl justify-start text-left block py-4 text-cerulaen dark:text-off-white font-bold">
              The Problem
            </h3>
            <div className="space-y-4">
              <p className="text-shadow dark:text-off-white text-lg">
                Beacon Biosignals’ brainwave, and biometric detection models
                accelerate clinical trials and enable new treatments for
                patients with neurological and psychiatric disease. By using
                advanced machine learning to quicly identify critical biomarkers
                Beacon can surface only the most critical information for
                neurologists to make life altering decisions. The problem?
                Looking at brain data isn’t exactly straight forward, and as a
                result, neither are the tools we need to do it.
              </p>
              <p className="text-shadow dark:text-off-white text-lg">
                In order to analyze EEG data, the signals are examined in a
                multitude of ways. By filtering, applying signal montages, or
                adjusting the gain, these often illusive biomarkers can become
                clearer. In order to facilitate such analysis, lots of detailed
                information is required. More data means more processing time,
                and when it comes to the world wide web, this means more
                latency. Data latency proves detremental to the workflow of
                neurologists and data scientists who rely on Beacon’s portal to
                adjudicate brainwave data. A solution bringing post-processed
                data to the client without latency was needed.
              </p>
            </div>
            <h3 className="text-2xl justify-start text-left block py-4 text-cerulaen dark:text-off-white font-bold">
              The Solution
            </h3>
            <div className="space-y-4">
              <p className="text-shadow dark:text-off-white text-lg">
                To increase the speed at which processed data could be sent to
                the client, the bottleneck needed to be itentified. On the
                frontend, I did not need to look far. Javascript is single
                threaded. Meaning that although asyncronous and done via web
                socket, loading brainwave data into the browser would block the
                main thread. This inhibited renders and additional processes
                degrading the platform’s UX.
              </p>
              <p className="text-shadow dark:text-off-white text-lg">
                The remedy was the Web Worker, a browser feature that allowed us
                to offload heavy data streaming tasks to a worker thread leaving
                the main javascript thread to carry on in peace. I architected
                the worker to harness message chunking, and autonomous
                streaming, further reducing message overhead. Once the data was
                in the browser, I implemented a caching algorithm to ensure the
                client would not attempt to re-fetch data it already had.
              </p>
            </div>
            <h3 className="text-2xl justify-start text-left block py-4 text-cerulaen dark:text-off-white font-bold">
              Results
            </h3>
            <div className="space-y-4">
              <p className="text-shadow dark:text-off-white text-lg">
                Initial benchmarks shwed an average speed increase of 300%, and
                up to 1000% increases in cases where data had been cached in the
                backends data layer. The results were 1-2 second load-times for
                EEG recordings up to 24 minutes with logarithmic scaling for
                larger datasets. The work is paving the way for near-instant EEG
                processing in the browser. A first for the world of
                neuroscience.
              </p>
            </div>
          </div>
        </Transition>
        <Transition
          className="px-40 relative"
          show={visibility}
          enter={`${animate(1000, 500)} ${cubicBezier(0.97, 0.03, 0.36, 0.45)}`}
          leave={`${animate(1000, 0)} ${cubicBezier(0.97, 0.03, 0.36, 0.45)}`}
          enterFrom="opacity-0"
          enterTo="opaciy-100"
          leaveTo="opacity-0"
          leaveFrom="opacity-100"
        >
          <div className="grid transform justify-items-center py-16">
            <Flow src="/portal.png" height="291px" width="450px" alt="sammy" />
          </div>
        </Transition>
        <div className="grid justify-items-center py-6 items-center">
          <ScrollButton
            handler={() => {
              handlePageTransition('/float-card')
            }}
            name="Float Card"
          />
        </div>
      </div>
    </>
  )
}

export default BeaconBiosignals

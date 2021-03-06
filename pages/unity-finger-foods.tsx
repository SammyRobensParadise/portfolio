import React, { useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Transition } from '@headlessui/react'

import useTransition from '../hooks/transition'
import { animate, cubicBezier } from '../global/helpers/animation'
import ScrollButton from '../components/ScrollButton/ScrollButton'
import ThreeStage from '../components/Stage/ThreeStage'
import Vr from '../components/Renders/Vr'
import useResizeParalax from '../hooks/resize'

const FingerFood: NextPage = (): JSX.Element => {
  const { visibility, handlePageTransition, paint } = useTransition({
    timeout: 0
  })
  useResizeParalax()
  function handleScrollButtonClick() {
    handlePageTransition('/')
  }

  useEffect(() => {
    paint()
  }, [paint])

  return (
    <>
      <Head>
        <title>Sammy - Finger Food 🎂</title>
      </Head>
      <div>
        <div id="float-card-landing">
          <Transition
            className="px-8 md:px-40 pb-16 md:pb-28 pt-6"
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
              QA Lead and UX Developer<span className="text-highlight">.</span>
            </h1>
          </Transition>
        </div>
        <ThreeStage height={400}>
          <Vr scale={1} position={[0, 0, -10]} shadow />
        </ThreeStage>
        <Transition
          className="px-8 md:px-40 relative opacity-0"
          appear
          show={visibility}
          enter={`${animate(1000, 0)} ${cubicBezier(0.97, 0.03, 0.36, 0.45)}`}
          leave={`${animate(250, 0)} ${cubicBezier(0.97, 0.03, 0.36, 0.45)}`}
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leaveTo="opacity-0"
          leaveFrom="opacity-100"
        >
          <div>
            <h2 className=" relative text-3xl md:text-5xl justify-start text-left block text-cerulaen dark:text-off-white font-bold">
              Product and Quality at{' '}
              <a
                href="https://unity.com/solutions/accelerate-solutions-industry"
                className="hover:underline"
              >
                Finger Food
              </a>
            </h2>
            <ul className="list-inside list-disc space-y-2 text-shadow dark:text-off-white text-lg py-4">
              <li>
                Designed and implemented data-driven UX analysis forLEGO App to
                quantify engagement growth potential.
              </li>
              <li>
                Led 3 project QA groups and lean infrastructure development from
                concept design to product delivery. Increased web project test
                efficiency by 50%.
              </li>
              <li>
                Designed and developed python automated test infrastructure to
                quantify the accuracy of computer vision system.
              </li>
            </ul>

            <h2 className="text-3xl md:text-5xl justify-start text-left block text-cerulaen dark:text-off-white font-bold">
              Some Contributions
            </h2>
            <div className="space-y-4 py-4">
              <p className="text-shadow dark:text-off-white text-lg">
                I designed and implemented data-driven UX analysis for a
                Bluetooth-connected experience app to quantify engagement growth
                potential. I was given the opportunity to work with an
                international design team to quantify core product design
                decisions based on the receptivity and understanding users
                showed during a series of user testing sessions. These sessions
                involved tree testing, as well as cognitive walkthroughs of the
                product prototypes.
              </p>
              <p className="text-shadow dark:text-off-white text-lg">
                I developed a system to quantify the accuracy of a computer
                vision system designed to automate mining processes. I wrote
                code to analyze hours of video recorded of automated gantry
                movement to determine if the tracking system could accurately
                determine the location of a target in 3D space over long periods
                of time
              </p>
              <p className="text-shadow dark:text-off-white text-lg">
                During my time at Finger Food ATG, in total, I led the QA
                Initiatives for more than 3 projects from ideation through to
                product delivery working with all kinds of clients, and was able
                to reduce test infrastructure overhead by 50% for web-based
                projects!
              </p>
            </div>
          </div>
        </Transition>

        <div className="grid justify-items-center py-6 items-center">
          <ScrollButton handler={handleScrollButtonClick} name="Home" />
        </div>
      </div>
    </>
  )
}

export default FingerFood

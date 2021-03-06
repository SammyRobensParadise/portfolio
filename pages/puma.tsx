import React, { useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Transition } from '@headlessui/react'
import { Parallax } from 'react-scroll-parallax'
import Image from 'next/image'

import useTransition from '../hooks/transition'
import { animate, cubicBezier } from '../global/helpers/animation'
import ScrollButton from '../components/ScrollButton/ScrollButton'
import { ENGINEERING_PAPER_SOURCE_CONTROL_NAME } from '../global/constants/constants'
import useResizeParalax from '../hooks/resize'

const scale = { width: 400, height: 300 }

const Puma: NextPage = (): JSX.Element => {
  const { visibility, handlePageTransition, paint } = useTransition({
    timeout: 0
  })
  useResizeParalax()
  function handleScrollButtonClick() {
    handlePageTransition('/hootsuite')
  }
  useEffect(() => {
    paint()
  }, [paint])

  return (
    <>
      <Head>
        <title>Sammy - Puma 🏢</title>
      </Head>
      <div>
        <div id="puma-landing" className="overflow-x-hidden">
          <Transition
            className="px-8 md:px-40 pb-16 md:pb-48 pt-6"
            show={visibility}
            appear
            enter={`${animate(1000, 0)} ${cubicBezier(0.97, 0.03, 0.36, 0.45)}`}
            leave={`${animate(1000, 0)} ${cubicBezier(0.97, 0.03, 0.36, 0.45)}`}
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leaveTo="opacity-0"
            leaveFrom="opacity-100"
          >
            <h1 className="text-cerulaen dark:text-off-white font-work font-extrabold text-5xl md:text-7xl z-20 tracking-tighter text-left">
              Better design for{' '}
              <a
                href="https://www.pumautilitymonitoring.ca/"
                className="transition-all hover:underline"
              >
                PUMA
              </a>{' '}
              data scientists (and more)
            </h1>
          </Transition>
          <div className="relative transition transform bg-cerulaen dark:bg-highlight mb-16 overflow-x-hidden">
            <Parallax x={[10, -2]}>
              <p className="py-4 bg-cerulaen dark:bg-highlight dark:text-shadow text-off-white text-2xl font-black uppercase flex flex-nowrap w-max transition-all hover:py-8">
                Leading designer and systems engineer at PUMA, responsible for
                user experience research, graphic and interface design
              </p>
            </Parallax>
          </div>
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
            <Parallax x={[-2, 2]}>
              <h2 className="text-3xl md:text-5xl justify-start text-left block text-cerulaen dark:text-off-white font-bold">
                My Contributions
              </h2>
            </Parallax>
            <Parallax x={[2, -2]}>
              <ul className="list-inside list-disc space-y-2 text-shadow dark:text-off-white text-lg py-4">
                <li>
                  Conducted structured design walkthroughs with internal
                  environmental data scientists to diagnose task-specific
                  challenges.
                </li>
                <li>
                  Developed heuristic signal detection theory evaluation to
                  determine artifact stress.
                </li>
                <li>
                  Designed a complete component design system and worked closely
                  with PUMA&apos;`s marketing team to curate a new W3C AAA
                  accessible color palette.
                </li>
                <li>
                  built a front-end component library to be used by PUMA to
                  increase UI consistency of user-facing code, improve
                  scalability, and improve accessibility throughout the product.
                  The design system reduced front-end infrastructure by over
                  30,000 lines of code.
                </li>
                <li>
                  Orchestrated migration from SVN to git and GitHub for the PUMA
                  engineering team, and{' '}
                  <a
                    href={`/${ENGINEERING_PAPER_SOURCE_CONTROL_NAME}`}
                    className="underline hover:text-cerulaen outline-none focus:text-cerulaen"
                  >
                    wrote an engineering paper about it
                  </a>
                  .
                </li>
              </ul>
            </Parallax>
            <Parallax x={[-2, 2]}>
              <h2 className="text-3xl md:text-5xl justify-start text-left block text-cerulaen dark:text-off-white font-bold">
                Design System ™️
              </h2>
            </Parallax>
            <Parallax x={[2, -2]}>
              <div className="space-y-4 py-4">
                <p className="text-shadow dark:text-off-white text-lg">
                  The PUMA design system was custom-made to address issues
                  specific to the display of energy information. Design
                  decisions were motivated by feedback gathered during card
                  sorting and design walkthroughs with data scientists at PUMA,
                  who are the primary application users.
                </p>
              </div>
            </Parallax>
          </div>
        </Transition>
        <Transition
          show={visibility}
          enter={`${animate(1000, 500)} ${cubicBezier(0.97, 0.03, 0.36, 0.45)}`}
          leave={`${animate(1000, 0)} ${cubicBezier(0.97, 0.03, 0.36, 0.45)}`}
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leaveTo="opacity-0"
          leaveFrom="opacity-100"
        >
          <Parallax x={[20, -10]}>
            <div className="flex flex-row justify-center p-2 md:p-12">
              <div>
                <Image
                  placeholder="blur"
                  blurDataURL="/puma-colors.png"
                  src="/puma-colors.png"
                  alt="woman teaching in front of art board"
                  {...scale}
                />
              </div>
              <div>
                <Image
                  placeholder="blur"
                  blurDataURL="/puma-checkboxes.png"
                  src="/puma-checkboxes.png"
                  alt="woman teaching in front of art board"
                  {...scale}
                />
              </div>
              <div>
                <Image
                  placeholder="blur"
                  blurDataURL="/puma-tooltip.png"
                  src="/puma-tooltip.png"
                  alt="woman teaching in front of art board"
                  {...scale}
                />
              </div>
            </div>
          </Parallax>
          <Parallax x={[-10, 10]}>
            <div className="flex flex-row justify-center p-2 md:p-12">
              <div>
                <Image
                  placeholder="blur"
                  blurDataURL="/puma-badge.png"
                  src="/puma-badge.png"
                  alt="woman teaching in front of art board"
                  {...scale}
                />
              </div>
              <div>
                <Image
                  placeholder="blur"
                  blurDataURL="/puma-dropdown.png"
                  src="/puma-dropdown.png"
                  alt="woman teaching in front of art board"
                  {...scale}
                />
              </div>
              <div>
                <Image
                  placeholder="blur"
                  blurDataURL="/puma-tooltip.png"
                  src="/puma-tooltip.png"
                  alt="woman teaching in front of art board"
                  {...scale}
                />
              </div>
            </div>
          </Parallax>
        </Transition>
        <div className="grid justify-items-center py-6 items-center">
          <ScrollButton handler={handleScrollButtonClick} name="Hootsuite" />
        </div>
      </div>
    </>
  )
}

export default Puma

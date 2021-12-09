import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Transition } from '@headlessui/react'
import { Parallax } from 'react-scroll-parallax'

import useTransition from '../hooks/transition'
import { animate, cubicBezier } from '../global/helpers/animation'
import Flow from '../components/Flow/Flow'
import ScrollButton from '../components/ScrollButton/ScrollButton'

const scale = { width: 600 / 1.5, height: 337.5 / 1.5 }

const FloatCard: NextPage = (): JSX.Element => {
  const { visibility, handlePageTransition } = useTransition({ timeout: 250 })
  function handleScrollButtonClick() {
    handlePageTransition('/puma')
  }
  return (
    <>
      <Head>
        <title>Sammy - Float 💳</title>
      </Head>
      <div>
        <div id="float-card-landing">
          <Transition
            className="px-40 pb-48 pt-6 md:pb-64"
            show={visibility}
            appear
            enter={`${animate(1000, 0)} ${cubicBezier(0.97, 0.03, 0.36, 0.45)}`}
            leave={`${animate(250, 0)} ${cubicBezier(0.97, 0.03, 0.36, 0.45)}`}
            enterFrom="opacity-0"
            enterTo="opaciy-100"
            leaveTo="opacity-0"
            leaveFrom="opacity-100"
          >
            <h1 className="text-cerulaen dark:text-off-white font-work font-extrabold text-7xl absolute z-20 tracking-tighter text-left pr-28">
              Orchestrating the dream-to-design-to-build pipeline for Float Inc.
            </h1>
          </Transition>
          <Parallax x={['500px', '-100px']}>
            <div className="flex flex-row justify-center p-12">
              <div>
                <Image
                  src="/float-look.png"
                  alt="woman teaching in front of art board"
                  {...scale}
                />
              </div>
              <div>
                <Image
                  src="/float-upload.png"
                  alt="woman teaching in front of art board"
                  {...scale}
                />
              </div>
              <div>
                <Image
                  src="/float-card.png"
                  alt="woman teaching in front of art board"
                  {...scale}
                />
              </div>
            </div>
          </Parallax>
        </div>
        <Transition
          className="px-40 relative opacity-0"
          appear
          show={visibility}
          enter={`${animate(1000, 0)} ${cubicBezier(0.97, 0.03, 0.36, 0.45)}`}
          leave={`${animate(250, 0)} ${cubicBezier(0.97, 0.03, 0.36, 0.45)}`}
          enterFrom="opacity-0"
          enterTo="opaciy-100"
          leaveTo="opacity-0"
          leaveFrom="opacity-100"
        >
          <div>
            <h2 className="text-5xl justify-start text-left h-14 block text-cerulaen dark:text-off-white font-bold">
              Product at Float
            </h2>
            <ul className="list-inside list-disc space-y-2 text-shadow dark:text-off-white text-lg py-4">
              <li>
                I designed and implemented comprehensive design process
                introducing a cradle-to-the-grave product lifecycle.
              </li>
              <li>
                Designed and developed application interface for Journal. Worked
                closely with stakeholders to capture user needs and develop a
                prduct experience matching the mental model of users in a timely
                manner.
              </li>
              <li>
                Created custom illustrations and assets to enhase product feel
                and help build empathy with users and their product main points.
              </li>
            </ul>

            <h2 className="text-5xl justify-start text-left h-14 block text-cerulaen dark:text-off-white font-bold">
              My Role
            </h2>
            <div className="space-y-4 py-4">
              <p className="text-shadow dark:text-off-white text-lg">
                As a product designer at Float, I have had the rare opportunity
                to contribute to all aspects of the product lifecycle from
                concept ideation and user-experience research, through wireframe
                and mockup design, development, and finally user-feedback and
                iteration. As a developer and web designer, I fit well into the
                multi-faceted role that Float required, with the ability to
                deliver on both software and design. I worked on both Journal’s
                Front-end and backend, and provided graphic illustrations for
                product and marketing purposes.
              </p>
              <p className="text-shadow dark:text-off-white text-lg">
                During my time at Float I designed and developed numerous
                features delivering a never-before-seen corporate expense
                managment experience. I designed (and developed) Float’s
                application navigation infrastructure and interface, accounting
                for quick scalability, sub-pages, and multi-user roles. I have
                also had a hand in designing Float’s, virtual credit card
                experience, branding, transaction management experience, and
                settings flow. I also championed accessible design practices,
                and work to enforce a coherent and consistent design process,
                optimizing product delivery by implementing a structured Figma
                design workflow and quality assurance process.
              </p>
            </div>
          </div>
        </Transition>
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
          <div className="grid justify-items-center py-16">
            <Flow
              src="/credit-card-render.png"
              height="408px"
              width="544px"
              alt="sammy"
            />
          </div>
        </Transition>
        <div className="grid justify-items-center py-6 items-center">
          <ScrollButton handler={handleScrollButtonClick} name="Puma" />
        </div>
      </div>
    </>
  )
}

export default FloatCard

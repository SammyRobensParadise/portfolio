import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Transition } from '@headlessui/react'
import { Parallax } from 'react-scroll-parallax'
import Image from 'next/image'

import useTransition from '../hooks/transition'
import { animate, cubicBezier } from '../global/helpers/animation'
import ScrollButton from '../components/ScrollButton/ScrollButton'
import useResizeParalax from '../hooks/resize'

const IntensifEye: NextPage = (): JSX.Element => {
  const { visibility, handlePageTransition } = useTransition({ timeout: 0 })
  useResizeParalax()
  function handleScrollButtonClick() {
    handlePageTransition('/arduino-scream')
  }
  const ratio = 720 / 960
  const width = window.innerWidth < 960 + 20 ? window.innerWidth - 100 : 960
  const scale = { width, height: width * ratio }
  return (
    <>
      <Head>
        <title>Sammy - Intensif-Eye 👀</title>
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
              <a href="https://github.com/SammyRobensParadise/dubhacks-19">
                Intensif-Eye; Google Vision AI
              </a>
            </h1>
          </Transition>
          <div className="relative transition transform bg-cerulaen dark:bg-highlight  mb-16">
            <Parallax x={[20, -2]}>
              <p className="py-4 px-4 bg-cerulaen dark:bg-highlight dark:text-shadow text-off-white text-2xl font-black uppercase flex flex-nowrap w-max transition-all hover:py-8">
                A story about a hackathon project aiming for a more accessible
                world
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
                What it is…{' '}
              </h2>
            </Parallax>
            <Parallax x={[2, -2]}>
              <div className="space-y-4 py-4">
                <p className="text-shadow dark:text-off-white text-lg">
                  Intensif-eye is a fully functioning mobile application that I,
                  and 3 other engineers developed and designed as part of
                  Dubhacks, a Hackathon at the University of Washington in
                  October 2019. We placed second for use of Google Cloud AI, and
                  3rd place overall out of hundreds of teams. The accompanied
                  designs were envisioned (by me) to product-ionize the
                  application.
                </p>
              </div>
            </Parallax>
            <Parallax x={[-2, 4]}>
              <h2 className="text-3xl md:text-5xljustify-start text-left block text-cerulaen dark:text-off-white font-bold">
                The Solution
              </h2>
            </Parallax>
            <Parallax x={[2, -2]}>
              <div className="space-y-4 py-4">
                <p className="text-shadow dark:text-off-white text-lg">
                  Intensif-eye allows users to take images of text or
                  handwriting and using Google&apos;s vision AI API, extracts
                  the text from the image that can be rendered to a screen. My
                  team and I saw the incredible potential to use this powerful
                  technology to allow people who may be visually impaired in
                  some way to access information quickly without the use of
                  glasses or other technology. We did this by extracting text
                  from images and presenting it to users in high contrast, and
                  accessible fashion.
                </p>
              </div>
            </Parallax>
            <Parallax x={[-2, 6]}>
              <h2 className="text-3xl md:text-5xl justify-start text-left block text-cerulaen dark:text-off-white font-bold">
                The Problem Space
              </h2>
            </Parallax>
            <Parallax x={[2, -2]}>
              <div className="space-y-4 py-4">
                <p className="text-shadow dark:text-off-white text-lg">
                  The American Foundation for the Blind estimates that over 26.9
                  million American adults experience some sort of vision loss,
                  and about 41% of those people either don&apos;t have vision
                  correction tools or don&apos;t have the correct prescription.
                  The good news? over 81% of those people have smartphones! This
                  means that a digital solution to address fixed point vision
                  issues is statistically very accessible for many individuals,
                  and presents a very high ROI. To ensure an adequate solution,
                  we measured the average time it took to retrieve reading
                  glasses and decided to constrain ourselves to 30 seconds from
                  the point of the unreadable text is identified to the point
                  where the user can read the rendered text (we exceeded our
                  targets).
                </p>
              </div>
            </Parallax>
            <Parallax x={[-2, 10]}>
              <h2 className="text-3xl md:text-5xl justify-start text-left block text-cerulaen dark:text-off-white font-bold">
                The Design Process
              </h2>
            </Parallax>
            <Parallax x={[2, -2]}>
              <div className="space-y-4 py-4">
                <p className="text-shadow dark:text-off-white text-lg">
                  One of our team members was legally blind and was not only our
                  source of immense inspiration for the project but also an
                  amazing test user, we were able to iterate and change our
                  preliminary designs on the fly to ensure we were factoring in
                  issues like color blindness and contrast. For this particular
                  project, I took on the role of a developer and UX designer.
                  Where I became responsible for optimizing the user flow of the
                  application from launch to text identification, as well as
                  developing the app in React Native. My featured extended
                  design is intended to expand the feature set of the
                  application, ready for a dev team to tackle while retaining
                  the original optimized flow. The app features easily
                  accessible font-size and contrast settings and retains a
                  simple color scheme of 5.94:1 contrast, exceeding W3C&apos;s
                  AAA standard of 4.5:1.
                </p>
              </div>
            </Parallax>
            <Parallax x={[-2, 12]}>
              <h2 className="text-3xl md:text-5xl justify-start text-left block text-cerulaen dark:text-off-white font-bold">
                Reflecting
              </h2>
            </Parallax>
            <Parallax x={[2, -2]}>
              <div className="space-y-4 py-4">
                <p className="text-shadow dark:text-off-white text-lg">
                  Intensif-eye (and my teammate) raised my awareness about the
                  importance of accessible design. It is something that we learn
                  about in design all the time, but it changed my perspective to
                  see the joy and freedom that my teammate had when using the
                  app, even in its primitive state. My raised awareness and —
                  now passion, for accessible design, prompted me to take a
                  leading role at Hootsuite leading an effort to bring better
                  accessible design and development practices to the product and
                  technology team, in addition to my traditional development
                  work.
                </p>
              </div>
            </Parallax>
          </div>
          <Parallax x={[20, -10]} y={[20, -10]}>
            <div className="flex flex-row justify-center">
              <div>
                <Image
                  placeholder="blur"
                  blurDataURL="/intensif-eye-render.png"
                  src="/intensif-eye-render.png"
                  alt="intensif-eye application"
                  {...scale}
                />
              </div>
            </div>
          </Parallax>
          <Parallax x={[-10, 20]} y={[20, -20]}>
            <div className="flex flex-row justify-center">
              <div>
                <Image
                  placeholder="blur"
                  blurDataURL="/intensif-eye-render-single.png"
                  src="/intensif-eye-render-single.png"
                  alt="intensif-eye application"
                  {...scale}
                />
              </div>
            </div>
          </Parallax>
          <div className="space-y-4 py-4">
            <ul className="list-inside list-disc space-y-2 text-shadow dark:text-off-white text-lg py-4 break-words">
              <li>
                Github:{' '}
                <a
                  href="https://github.com/SammyRobensParadise/dubhacks-19"
                  className="underline"
                >
                  github.com/SammyRobensParadise/dubhacks-19
                </a>
              </li>
              <li>
                DevPost:{' '}
                <a
                  href="https://devpost.com/software/intensif-eye"
                  className="underline"
                >
                  devpost.com/software/intensif-eye
                </a>
              </li>
            </ul>
          </div>
        </Transition>
        <div className="grid justify-items-center py-6 items-center">
          <ScrollButton
            handler={handleScrollButtonClick}
            name="Arduino Scream"
          />
        </div>
      </div>
    </>
  )
}

export default IntensifEye

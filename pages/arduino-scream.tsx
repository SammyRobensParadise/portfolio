import React, { useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Transition } from '@headlessui/react'
import { Parallax } from 'react-scroll-parallax'
import Image from 'next/image'

import useTransition from '../hooks/transition'
import { animate, cubicBezier } from '../global/helpers/animation'
import ScrollButton from '../components/ScrollButton/ScrollButton'
import useResizeParalax from '../hooks/resize'
import Arduino from '../global/assets/arduino.svg'

const ArduinoScream: NextPage = (): JSX.Element => {
  const { visibility, handlePageTransition, paint } = useTransition({
    timeout: 0
  })

  useResizeParalax()

  function handleScrollButtonClick() {
    handlePageTransition('/')
  }

  const ratio = 600 / 800
  const width = window.innerWidth < 800 + 20 ? window.innerWidth - 100 : 800
  const scale = { width, height: width * ratio }

  useEffect(() => {
    paint()
  }, [paint])

  return (
    <>
      <Head>
        <title>Sammy - Arduino Scream 😱</title>
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
              <a href="https://github.com/SammyRobensParadise/arduino-screaming">
                Arduino-Screaming
              </a>
            </h1>
          </Transition>
          <div className="relative transition transform bg-cerulaen dark:bg-highlight mb-16">
            <Parallax x={[20, -2]}>
              <p className="py-4 bg-cerulaen dark:bg-highlight dark:text-shadow text-off-white text-2xl font-black uppercase flex flex-nowrap w-max transition-all hover:py-8">
                A hardware project to (yes) open a safe by screaming at it!
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
            <Parallax x={[0, -30]} y={[0, -20]}>
              <div className="flex flex-row justify-center">
                <div>
                  <Image
                    placeholder="blur"
                    blurDataURL="/arduino-screaming-cover.png"
                    src="/arduino-screaming-cover.png"
                    alt="arduino screaming safe"
                    {...scale}
                  />
                </div>
              </div>
            </Parallax>
            <Parallax x={[0, 30]} y={[-20, 0]}>
              <div className="flex flex-row justify-center">
                <div>
                  <Image
                    placeholder="blur"
                    blurDataURL="/arduino-screaming-top.png"
                    src="/arduino-screaming-top.png"
                    alt="arduino screaming safe top"
                    {...scale}
                  />
                </div>
              </div>
            </Parallax>
            <Parallax x={[-2, 2]}>
              <h2 className="text-3xl md:text-5xl justify-start text-left block text-cerulaen dark:text-off-white font-bold">
                Opening a Safe With Your Voice!
              </h2>
            </Parallax>
            <Parallax x={[2, -2]}>
              <div className="space-y-4 py-4">
                <p className="text-shadow dark:text-off-white text-lg">
                  The Arduino screaming safe is, yes, safe that will only open
                  if you scream the correct combination. Arduino Screaming is a
                  final project for SYDE 192. To open the safe you must “scream”
                  at the safe at the correct times (in seconds) corresponding to
                  the combination that you set. if the screaming times are
                  correct, the safe will open! The safe uses an Arduino Uno, a
                  liquid-crystal display, a sound sensor, a number of different
                  buttons, potentiometers, and a step-motor to control the
                  safe&apos;s open and closed states. The original prototype was
                  constructed to fit inside a press-fit custom laser cut box.
                </p>
              </div>
            </Parallax>
            <Parallax x={[-2, 4]}>
              <h2 className="text-3xl md:text-5xl justify-start text-left block text-cerulaen dark:text-off-white font-bold">
                How Arduino Screaming Works
              </h2>
            </Parallax>
            <Parallax x={[2, -2]}>
              <div className="space-y-4 py-4">
                <p className="text-shadow dark:text-off-white text-lg">
                  The safe contains an Arduino board that is programmed to
                  detect a signal sent from the sound sensor whenever a sound
                  above a specific threshold is detected by the speaker. when a
                  sound is detected a software interrupt{' '}
                  <code>void sound()</code> is triggered. In the interrupt the
                  code checks if the current time corresponds to the internal
                  timer scaled to 30 seconds using the{' '}
                  <code>ISR(TIMER2_OVF_vect)</code> interrupt. If the time
                  matches, it will update the unlocked state. if all states are
                  true then the safe will unlock by activating a servo motor.
                  For more details about how the code works,{' '}
                  <a
                    href="https://github.com/SammyRobensParadise/arduino-screaming"
                    className="underline"
                  >
                    check it out on GitHub!
                  </a>
                </p>
              </div>
            </Parallax>
          </div>
          <div className="space-y-4 py-4">
            <ul className="list-inside list-disc space-y-2 text-shadow dark:text-off-white text-lg py-4 break-words">
              <li>
                Github:{' '}
                <a
                  href="https://github.com/SammyRobensParadise/arduino-screaming"
                  className="underline"
                >
                  github.com/SammyRobensParadise/arduino-screaming
                </a>
              </li>
              <li>
                Flickr:{' '}
                <a href="https://flic.kr/s/aHsmGEX777" className="underline">
                  Flickr Album of photos
                </a>
              </li>
            </ul>
          </div>
          <div className="text-shadow dark:text-highlight">
            <Arduino />
          </div>
        </Transition>
        <div className="grid justify-items-center py-6 items-center">
          <ScrollButton handler={handleScrollButtonClick} name="Home" />
        </div>
      </div>
    </>
  )
}

export default ArduinoScream

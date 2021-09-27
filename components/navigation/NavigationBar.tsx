import React, { ReactElement } from 'react'
import Link from 'next/link'
import { Transition } from '@headlessui/react'

import Puzzle from '../../global/assets/puzzle.svg'
import Icon from '../../global/assets/Icon.svg'
import { RESUME_FILE_NAME } from '../../global/constants/constants'
import { animate, cubicBezier } from '../../global/helpers/animation'

const NavigationBar = (): ReactElement => (
  <div className="text-cerulaen dark:text-off-white grid grid-cols-3 gap-16 p-6 text-lg font-work font-normal">
    <Transition
      className="flex flex-row"
      show
      appear
      enter={`${animate(1000)} ${cubicBezier(0.97, 0.03, 0.36, 0.45)}`}
      enterFrom="opacity-0"
      enterTo="opaciy-100"
    >
      <Link href="/" passHref>
        <Icon />
      </Link>
    </Transition>
    <Transition
      className="text-center flex flex-row space-x-4 justify-center hover:underline cursor-pointer pt-2"
      show
      appear
      enter={`${animate(1000, 250)} ${cubicBezier(0.97, 0.03, 0.36, 0.45)}`}
      enterFrom="opacity-0"
      enterTo="opaciy-100"
    >
      <Link href="/" passHref>
        <>
          <Puzzle />
          <p>Sammy Robens-Paradise</p>
        </>
      </Link>
    </Transition>
    <div className="flex flex-row justify-end space-x-4 pt-2">
      <Link href={RESUME_FILE_NAME} passHref>
        <p className="hover:underline transition-all cursor-pointer">Résume</p>
      </Link>
      <Link href="/projects" passHref>
        <p className="hover:underline cursor-pointer">Projects</p>
      </Link>
      <Link href="/work" passHref>
        <p className="hover:underline cursor-pointer">Work</p>
      </Link>
      <Link href="/about" passHref>
        <p className="hover:underline cursor-pointer">About</p>
      </Link>
    </div>
  </div>
)

export default NavigationBar

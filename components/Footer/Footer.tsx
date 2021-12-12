import React, { ReactElement } from 'react'
import Link from 'next/link'
import { Transition } from '@headlessui/react'

import { animate, cubicBezier } from '../../global/helpers/animation'
import constants from '../../global/constants/constants'
import Chat from '../../global/assets/chat.svg'

const Footer = (): ReactElement => (
  <Transition
    className="text-off-white bg-cerulaen dark:bg-shadow dark:border-t-2 dark:border-off-white  p-6 text-lg font-work font-normal"
    show
    appear
    enter={`${animate(1000)} ${cubicBezier(0.97, 0.03, 0.36, 0.45)}`}
    enterFrom="opacity-0"
    enterTo="opaciy-100"
  >
    <Transition.Child
      className="justify-center text-center flex flex-row space-x-8 p-4"
      enter={`${animate(1000, 1000)} ${cubicBezier(0.97, 0.03, 0.36, 0.45)}`}
      enterFrom="opacity-0"
      enterTo="opaciy-100"
    >
      <div className="font-extralight hover:underline hover:cursor-pointer">
        <a href={constants?.urls?.LINKEDIN_URL}>linkedin.com/sammy</a>
      </div>
      <div className="font-bold flex flex-row ">
        <button
          type="button"
          className="font-bold flex flex-row space-x-4 text-xl hover:underline transition-all cursor-pointer"
        >
          <div>GET IN TOUCH</div>
          <Chat />
        </button>
      </div>
      <div className="font-extralight hover:underline hover:cursor-pointer">
        <a
          href="mailto:srobensparadise@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          srobensparadise@gmail.com
        </a>
      </div>
    </Transition.Child>
    <Transition.Child
      className="grid grid-cols-3 col p-4 text-lg font-extralight"
      enter={`${animate(500, 1000)} ${cubicBezier(0.97, 0.03, 0.36, 0.45)}`}
      enterFrom="opacity-0"
      enterTo="opaciy-100"
    >
      <div className="flex flex-row">
        <Link href="/policy" passHref>
          <p className="hover:underline transition-all cursor-pointer">
            Policy
          </p>
        </Link>
      </div>
      <div className="flex flex-row justify-center">
        <p>
          {`© ${new Date().getFullYear().toString()} Designed & Developed by
          Sammy R-Paradise `}
        </p>
      </div>
      <div className="flex flex-row justify-end">
        <a
          className="hover:underline transition-all cursor-pointer"
          href={constants.urls.GITHUB_REPO_URL}
        >
          Source Code
        </a>
      </div>
    </Transition.Child>
  </Transition>
)

export default Footer

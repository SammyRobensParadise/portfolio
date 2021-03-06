import React, { ReactElement, useState } from 'react'
import Link from 'next/link'
import { Transition } from '@headlessui/react'

import { animate, cubicBezier } from '../../global/helpers/animation'
import constants from '../../global/constants/constants'
import Chat from '../../global/assets/chat.svg'
import EmailModal from '../Email/EmailModal'

const Footer = (): ReactElement => {
  const [showModal, setShowModal] = useState<boolean>(false)

  return (
    <>
      <EmailModal show={showModal} setShow={setShowModal} />
      <Transition
        className="text-off-white bg-cerulaen dark:bg-shadow dark:border-t-2 dark:border-off-white  p-6 text-lg font-work font-normal"
        show
        appear
        enter={`${animate(1000)} ${cubicBezier(0.97, 0.03, 0.36, 0.45)}`}
        enterFrom="opacity-0"
        enterTo="opacity-100"
      >
        <Transition.Child
          className="justify-center text-center flex flex-col items-center md:flex-row space-x-8 p-4"
          enter={`${animate(1000, 1000)} ${cubicBezier(
            0.97,
            0.03,
            0.36,
            0.45
          )}`}
          enterFrom="opacity-0"
          enterTo="opacity-100"
        >
          <div className="font-extralight hover:underline ">
            <a href={constants?.urls?.LINKEDIN_URL}>linkedin.com/sammy</a>
          </div>
          <div className="font-bold flex flex-row ">
            <button
              type="button"
              className="font-bold flex flex-row space-x-4 text-xl hover:underline transition-all"
              onClick={() => setShowModal(true)}
            >
              <div className="uppercase">Hire Me</div>
              <Chat />
            </button>
          </div>
          <div className="font-extralight hover:underline">
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
          className="grid grid-cols-1 text-center sm:grid-cols-3 col p-4 text-lg font-extralight"
          enter={`${animate(500, 1000)} ${cubicBezier(0.97, 0.03, 0.36, 0.45)}`}
          enterFrom="opacity-0"
          enterTo="opacity-100"
        >
          <div className="flex flex-row justify-center sm:justify-start">
            <Link href="/policy" passHref>
              <a className="hover:underline transition-all ">Policy</a>
            </Link>
          </div>
          <div className="flex flex-col justify-center text-center">
            <p>
              {`?? ${new Date().getFullYear().toString()} Designed & Developed by
          Sammy Robens-Paradise ????`}
            </p>
            <div className=" text-sm">
              <p>
                Looking for my previous website? It is available{' '}
                <a
                  href="https://website-2020-host.web.app/"
                  className="underline"
                >
                  here.
                </a>
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-center sm:justify-end">
            <a
              className="hover:underline transition-all "
              href={constants.urls.GITHUB_REPO_URL}
            >
              Website Source Code
            </a>
          </div>
        </Transition.Child>
      </Transition>
    </>
  )
}

export default Footer

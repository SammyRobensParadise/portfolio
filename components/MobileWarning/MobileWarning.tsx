import React, { useState, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'

import constants, { RESUME_FILE_NAME } from '../../global/constants/constants'

import { mobileCheck } from './MobileCheckUtil'

export default function MobileWarning(): JSX.Element {
  const [show, setShow] = useState<boolean>(mobileCheck())

  return (
    <Transition appear show={show} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 self-center"
        open={show}
        onClose={setShow}
      >
        <div className="min-h-screen px-4 ">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="transition transform fixed inset-0 bg-off-white dark:bg-shadow opacity" />
          </Transition.Child>
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
            className="relative bg-off-white dark:bg-shadow rounded mx-auto inline-block shadow-lg"
          >
            <Dialog.Description
              className="p-12 dark:text-off-white text-cerulaen space-y-4"
              as="div"
            >
              <div className="grid justify-items-center items-center">
                <Image
                  src="/Cones.png"
                  alt="caution cones"
                  height="200"
                  width="300"
                />
              </div>
              <p>
                My portfolio is best viewed on a computer 😬. Some stuff may be
                a little messy! Full support for mobile is coming soon!
              </p>
              <p>
                P.S, checkout my{' '}
                <a
                  href={constants.urls.GITHUB_URL}
                  className="underline outline-none"
                >
                  github.
                </a>{' '}
                and my{' '}
                <a
                  href={`/${RESUME_FILE_NAME}`}
                  className="underline outline-none"
                >
                  Résume
                </a>
                .
              </p>
              <button
                onClick={() => {
                  setShow(false)
                }}
                type="button"
                className=" p-2 rounded bg-cerulaen outline-none text-off-white"
              >
                Got it!
              </button>
            </Dialog.Description>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}

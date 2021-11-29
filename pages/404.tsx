import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Transition } from '@headlessui/react'

import FourOFour from '../global/assets/FourOFour.svg'
import { animate, cubicBezier } from '../global/helpers/animation'

const NotFound: NextPage = (): JSX.Element => (
  <>
    <Head>
      <title>Not Found - 404</title>
    </Head>
    <div>
      <div className="w-screen bg-off-white dark:bg-shadow relative space-y-6 pb-12">
        <div className="max-w-screen-sm my-0 mx-auto">
          <FourOFour />
        </div>
        <Transition
          className="grid justify-items-center py-8 relative"
          show
          appear
          enter={`${animate(1000, 0)} ${cubicBezier(0.97, 0.03, 0.36, 0.45)}`}
          leave={`${animate(1000, 0)} ${cubicBezier(0.97, 0.03, 0.36, 0.45)}`}
          enterFrom="opacity-0"
          enterTo="opaciy-100"
          leaveTo="opacity-0"
          leaveFrom="opacity-100"
        >
          <h1 className="text-cerulaen dark:text-off-white font-work font-extrabold text-7xl w-2/3 absolute z-20 tracking-tighter text-center">
            Page Not Found
          </h1>
        </Transition>
        <Transition
          className="grid justify-items-center py-8 relative"
          show
          appear
          enter={`${animate(1000, 0)} ${cubicBezier(0.97, 0.03, 0.36, 0.45)}`}
          leave={`${animate(1000, 0)} ${cubicBezier(0.97, 0.03, 0.36, 0.45)}`}
          enterFrom="opacity-0"
          enterTo="opaciy-75"
          leaveTo="opacity-0"
          leaveFrom="opacity-75"
        >
          <h1 className="text-cerulaen dark:text-off-white font-work font-extrabold text-7xl w-2/3 absolute z-20 tracking-tighter text-center opacity-75">
            Page Not Found
          </h1>
        </Transition>
        <Transition
          className="grid justify-items-center py-8 relative"
          show
          appear
          enter={`${animate(1000, 0)} ${cubicBezier(0.97, 0.03, 0.36, 0.45)}`}
          leave={`${animate(1000, 0)} ${cubicBezier(0.97, 0.03, 0.36, 0.45)}`}
          enterFrom="opacity-0"
          enterTo="opaciy-50"
          leaveTo="opacity-0"
          leaveFrom="opacity-50"
        >
          <h1 className="text-cerulaen dark:text-off-white font-work font-extrabold text-7xl w-2/3 absolute z-20 tracking-tighter text-center opacity-50">
            Page Not Found
          </h1>
        </Transition>
        <Transition
          className="grid justify-items-center py-8 relative"
          show
          appear
          enter={`${animate(1000, 0)} ${cubicBezier(0.97, 0.03, 0.36, 0.45)}`}
          leave={`${animate(1000, 0)} ${cubicBezier(0.97, 0.03, 0.36, 0.45)}`}
          enterFrom="opacity-0"
          enterTo="opaciy-25"
          leaveTo="opacity-0"
          leaveFrom="opacity-25"
        >
          <h1 className="text-cerulaen dark:text-off-white font-work font-extrabold text-7xl w-2/3 absolute z-20 tracking-tighter text-center opacity-25">
            Page Not Found
          </h1>
        </Transition>
      </div>
    </div>
  </>
)

export default NotFound

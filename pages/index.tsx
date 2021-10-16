import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Transition } from '@headlessui/react'

import BlobElement from '../components/Blob/Blob'
import { animate, cubicBezier } from '../global/helpers/animation'

const LANDING_MESSAGE =
  'I AM SAMMY ROBENS-PARADISE, DESIGNER AND FULL-STACK WEB DEVELOPER'
const styleOffsetOverride: {
  fontSize: string
  lineHeight: string
} = { fontSize: '4.51rem', lineHeight: '1' }

const LandingPage: NextPage = (): JSX.Element => (
  <>
    <Head>
      <title>Sammy</title>
    </Head>
    <div className="grid grid-cols-2 gap-4">
      <Transition
        className="p-24 pt-48"
        show
        appear
        enter={`${animate(500)} ${cubicBezier(0.97, 0.03, 0.36, 0.45)}`}
        enterFrom="opacity-0 w-2/3"
        enterTo="opaciy-100 w-2/3"
      >
        <h1
          className="text-off-white font-work font-extrabold w-2/3 absolute z-20"
          style={styleOffsetOverride}
        >
          {LANDING_MESSAGE}
        </h1>
        <h1 className="text-cerulaen font-work font-extrabold text-7xl w-2/3 absolute z-20">
          {LANDING_MESSAGE}
        </h1>
      </Transition>
      <div>
        <div className="flex">
          <BlobElement
            color="#2B2B2B"
            className="absolute"
            radius={250}
            height={500}
          />
          <BlobElement
            color="#3F46F3"
            className="absolute"
            radius={200}
            height={500}
          />
          <BlobElement
            color="#3FF3B2"
            className="absolute"
            radius={150}
            height={500}
          />
        </div>
      </div>
    </div>
  </>
)

export default LandingPage

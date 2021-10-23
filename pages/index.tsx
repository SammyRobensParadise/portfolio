import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Transition } from '@headlessui/react'
import { Parallax } from 'react-scroll-parallax'

import BlobElement from '../components/Blob/Blob'
import { animate, cubicBezier } from '../global/helpers/animation'
import Table from '../components/Table/Table'

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
    <div className="relative">
      <Parallax y={[-20, 20]}>
        <Transition
          className="grid grid-cols-2 gap-4 h-full relative"
          show
          appear
          enter={`${animate(1000)} ${cubicBezier(0.97, 0.03, 0.36, 0.45)}`}
          enterFrom="opacity-0"
          enterTo="opaciy-100"
        >
          <div className="p-24 pt-48">
            <h1
              className="text-off-white font-work font-extrabold w-2/3 absolute z-20 tracking-tighter"
              style={styleOffsetOverride}
            >
              {LANDING_MESSAGE}
            </h1>
            <h1 className="text-cerulaen font-work font-extrabold text-7xl w-2/3 absolute z-20 tracking-tighter">
              {LANDING_MESSAGE}
            </h1>
          </div>
          <div>
            <Parallax y={[-50, 50]}>
              <div className="flex">
                <BlobElement
                  color="#2B2B2B black"
                  className="absolute"
                  radius={250}
                  height={500}
                />
                <BlobElement
                  color="#3F46F3"
                  className="absolute blue"
                  radius={200}
                  height={500}
                />
                <BlobElement
                  color="#3FF3B2"
                  className="absolute green"
                  radius={150}
                  height={500}
                />
              </div>
            </Parallax>
          </div>
        </Transition>
      </Parallax>
    </div>
    <div className="relative pt-96 isolate p-24">
      <Table>
        <thead className="text-3xl justify-start">
          <tr>
            <th className="text-left w-2/12">Work</th>
          </tr>
        </thead>
        <tr className="border border-b" key="beacon">
          <td className="p-4 whitespace-nowrap w-36">
            <p>Beacon Biosignals</p>
          </td>
          <td>
            <div className="border-dashed border border-cerulaen h-0 w-full mt-2.5" />
          </td>
          <td className="p-4 text-right w-36">&apos;21 - Present</td>
        </tr>
        <tr className="border border-b" key="float">
          <td className="p-4 whitespace-nowrap w-36">
            <p>Float Card</p>
          </td>
          <td>
            <div className="border-dashed border border-cerulaen h-0 w-full mt-2.5 rounded" />
          </td>
          <td className="p-4 text-right w-36">&apos;20 - &apos;21</td>
        </tr>
      </Table>
    </div>
  </>
)

export default LandingPage

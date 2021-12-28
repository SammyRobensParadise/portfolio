import React, { useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Transition } from '@headlessui/react'
import TextLoop from 'react-text-loop'
import { CopyBlock, dracula } from 'react-code-blocks'
import { useForm } from 'react-hook-form'
import axios from 'axios'

import useTransition from '../hooks/transition'
import { animate, cubicBezier } from '../global/helpers/animation'
import ScrollButton from '../components/ScrollButton/ScrollButton'
import useResizeParalax from '../hooks/resize'

interface FormValues {
  name: string
  partition: string
}

const GithubStats: NextPage = (): JSX.Element => {
  const { visibility, handlePageTransition } = useTransition({ timeout: 0 })
  const [currentUsername, setCurrentUsername] = useState<string>(
    'SammyRobensParadise'
  )
  const [currentPartition, setCurrentPartition] = useState<string>('current')
  const [apiResponse, setApiResponse] = useState<string>('...')

  useResizeParalax()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>()
  function handleScrollButtonClick() {
    handlePageTransition('/')
  }

  const codeBlockText = `
  import { getGithubContributions } from 'github-contributions-counter'

  getGithubContributions({
        username: '${currentUsername}',
        config: { partition: '${currentPartition}' }
    }).then(r => console.log(r))
    `

  const onSubmit = (data: FormValues) => {
    axios.post('/api/github-stats', data).then((response) => {
      if (response.status === 200) {
        setApiResponse(JSON.stringify(response.data))
      }
    })
  }

  return (
    <>
      <Head>
        <title>Sammy - Github Stats</title>
      </Head>
      <div>
        <div id="float-card-landing">
          <Transition
            className="px-40 pb-28 pt-6"
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
              Github Stats
            </h1>
          </Transition>
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
          <div className="pb-8">
            <h2 className=" font-mono relative text-3xl justify-start text-left block text-cerulaen dark:text-off-white font-bold">
              <TextLoop interval={1000}>
                <span>npm install</span>
                <span>yarn add</span>
              </TextLoop>{' '}
              github-contributions-counter
            </h2>
          </div>
          <h2 className="text-3xl justify-start text-left block text-cerulaen dark:text-off-white font-bold">
            Example
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-8">
            <div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col space-y-8 pt-4"
              >
                <label htmlFor="name" className="space-x-2 flex flex-row">
                  <div>
                    <p className="text-cerulaen dark:text-off-white text-sm text-left p-2">
                      Github Username
                    </p>
                    {errors.name && (
                      <p
                        style={{ color: 'red' }}
                        className="text-xs text-left pl-2 h-0"
                      >
                        Required
                      </p>
                    )}
                  </div>
                  <input
                    {...register('name', { required: true })}
                    name="name"
                    type="text"
                    className="flex-1 rounded px-2 py-2 text-cerulaen dark:text-off-white text-sm text-left p-2 bg-off-white dark:bg-shadow border focus:outline-white"
                    value={currentUsername}
                    onChange={(event) => setCurrentUsername(event.target.value)}
                  />
                </label>

                <label htmlFor="partition" className="space-x-2 flex flex-row">
                  <div>
                    <p className="text-cerulaen dark:text-off-white text-sm text-left p-2 pr-16">
                      Partition
                    </p>
                  </div>
                  <select
                    {...register('partition', { required: true })}
                    name="partition"
                    className="appearance-none flex-1 rounded px-2 py-2 text-cerulaen dark:text-off-white text-sm text-left p-2 bg-off-white dark:bg-shadow border focus:outline-white"
                    onChange={(event) =>
                      setCurrentPartition(event.target.value)
                    }
                  >
                    <option>current</option>
                    <option>all</option>
                    <option>year</option>
                  </select>
                </label>
                <input
                  type="submit"
                  className=" p-2 rounded bg-cerulaen focus:outline-white text-off-white"
                  value="Get Stats"
                />
              </form>
            </div>
            <div>
              <CopyBlock
                language="javascript"
                text={codeBlockText}
                theme={dracula}
                wrapLines
                codeBlock
              />
            </div>
          </div>
          <div>
            <h3 className="text-lg justify-start text-left block text-cerulaen dark:text-off-white font-bold">
              Response
            </h3>
            <CopyBlock
              language="json"
              text={apiResponse}
              theme={dracula}
              wrapLines
              codeBlock
            />
          </div>
        </Transition>
        <div className="grid justify-items-center py-6 items-center">
          <ScrollButton handler={handleScrollButtonClick} name="Home" />
        </div>
      </div>
    </>
  )
}

export default GithubStats

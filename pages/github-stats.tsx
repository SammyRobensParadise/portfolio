/* eslint-disable react/jsx-no-bind */
import React, { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Transition } from '@headlessui/react'
import { CopyBlock, railscast } from 'react-code-blocks'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import Image from 'next/image'

import useTransition from '../hooks/transition'
import { animate, cubicBezier } from '../global/helpers/animation'
import ScrollButton from '../components/ScrollButton/ScrollButton'
import useResizeParalax from '../hooks/resize'
import Github from '../global/assets/github.svg'

interface FormValues {
  name: string
  partition: string
}

const GithubStats: NextPage = (): JSX.Element => {
  const { visibility, handlePageTransition, paint } = useTransition({
    timeout: 0
  })
  const [currentUsername, setCurrentUsername] = useState<string>(
    'SammyRobensParadise'
  )
  const [isWaiting, setIsWaiting] = useState<boolean>(false)
  const [apiResponse, setApiResponse] = useState<string>('...')

  useResizeParalax()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>()
  function handleScrollButtonClick() {
    handlePageTransition('/intensif-eye')
  }

  const codeBlockText = `
  import { getGithubContributions } from 'github-contributions-counter'

  getGithubContributions({
        username: '${currentUsername}',
        token: '••••••••••••••••••••'
    }).then(r => console.log(r))
    `

  const onSubmit = (data: FormValues) => {
    setIsWaiting(true)
    axios
      .post('/api/github-stats', data)
      .then((response) => {
        setIsWaiting(false)
        if (response.status) {
          setApiResponse(JSON.stringify(response.data, null, 4))
        }
      })
      .catch((error) => {
        setIsWaiting(false)

        setApiResponse(JSON.stringify(error, null, 4))
      })
  }

  useEffect(() => {
    paint()
  }, [paint])
  return (
    <>
      <Head>
        <title>Sammy - Github Stats</title>
      </Head>
      <div>
        <div id="float-card-landing">
          <Transition
            className="px-8 md:px-40 pb-28 pt-6"
            show={visibility}
            appear
            enter={`${animate(1000, 0)} ${cubicBezier(0.97, 0.03, 0.36, 0.45)}`}
            leave={`${animate(250, 0)} ${cubicBezier(0.97, 0.03, 0.36, 0.45)}`}
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leaveTo="opacity-0"
            leaveFrom="opacity-100"
          >
            <h1 className="text-cerulaen dark:text-off-white font-work font-extrabold text-5xl md:text-7xl z-20 tracking-tighter text-left pr-28">
              Github Stats
            </h1>
          </Transition>
        </div>

        <Transition
          className="px-8 md:px-40 relative opacity-0"
          appear
          show={visibility}
          enter={`${animate(1000, 0)} ${cubicBezier(0.97, 0.03, 0.36, 0.45)}`}
          leave={`${animate(250, 0)} ${cubicBezier(0.97, 0.03, 0.36, 0.45)}`}
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leaveTo="opacity-0"
          leaveFrom="opacity-100"
        >
          <div className="pb-8">
            <h2 className="font-mono relative text-xl md:text-3xl justify-start text-left block text-cerulaen dark:text-off-white font-bold">
              <span>npm install</span>
              github-contributions-counter
            </h2>
          </div>
          <h2 className="text-3xl justify-start text-left  text-cerulaen dark:text-off-white font-bold flex flex-row space-x-2">
            <span>Example</span>{' '}
            <span className="pt-1">
              <Image
                width={120}
                height={30}
                alt="npm-version-tag "
                src="https://camo.githubusercontent.com/cc9befdb424c66059c64f97720c72aa4a12a3261cce0d3e8c9a610f43d46459b/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f6769746875622d636f6e747269627574696f6e732d636f756e7465723f7374796c653d666f722d7468652d6261646765"
              />
            </span>
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
                <label htmlFor="token" className="space-x-2 flex flex-row">
                  <div>
                    <p className="text-cerulaen dark:text-off-white text-sm text-left p-2 pr-12">
                      Github PAT
                    </p>
                  </div>
                  <input
                    name="name"
                    type="password"
                    className="flex-1 rounded px-2 py-2 text-cerulaen dark:text-off-white text-sm text-left p-2 bg-off-white dark:bg-shadow border focus:outline-white cursor-not-allowed"
                    value="••••••••••••••••••••••••••••"
                    disabled
                  />
                </label>
                {isWaiting ? (
                  <div className="place-items-center flex flex-row justify-center space-x-4">
                    <p className="text-cerulaen dark:text-highlight">
                      Loading...
                    </p>
                    <div className="animate-spin w-6 h-6 text-cerulaen dark:text-highlight ">
                      <Github />
                    </div>
                  </div>
                ) : (
                  <input
                    type="submit"
                    className=" p-2 rounded bg-cerulaen focus:outline-white text-off-white"
                    value="Get Stats"
                  />
                )}
              </form>
            </div>
            <div className="shadow-inner font-mono">
              <CopyBlock
              /*      language="javascript"
                text={codeBlockText}
                theme={railscast}
                wrapLines
                codeBlock */
              />
            </div>
          </div>
          <div>
            <h3 className="text-lg justify-start text-left block text-cerulaen dark:text-off-white font-bold pb-8">
              Response
            </h3>
            <div className="max-h-64 overflow-y-scroll rounded shadow-inner font-mono">
              <CopyBlock
              /*  language="json"
                text={apiResponse}
                theme={railscast}
                wrapLines
                codeBlock */
              />
            </div>
          </div>
          <h2 className="text-3xl justify-start text-left block text-cerulaen dark:text-off-white font-bold pt-8">
            About
          </h2>
          <div className="space-y-4 py-4">
            <p className="text-shadow dark:text-off-white text-lg">
              <a
                href="https://www.npmjs.com/package/github-contributions-counter"
                className="underline"
              >
                Github-contributions-counter
              </a>{' '}
              is a javascript package for the browser and server that has a
              single function allowing users to easily get the GitHub
              contributions history for a user based on their username and
              GitHub PAT. It can be used on the server, or client-side. I
              created and open-sourced the package because I wanted a way to
              share my contribution history on my website, and I felt that the
              library could be useful for other developers who wanted to access
              the contribution history for various users.
            </p>
            <p className="text-shadow dark:text-off-white text-lg">
              Before GitHub&apos;s GraphQL V4 API, there was no API dedicated to
              user contributions. Originally this package scraped GitHub user
              profiles and retrieved data relating to GitHub Contributions.
              Since V4, this package serves as a REST API wrapper around the
              GraphQL API.
            </p>
            <ul className="list-inside list-disc space-y-2 text-shadow dark:text-off-white text-lg py-4 break-words">
              <li>
                Github:{' '}
                <a
                  href="https://github.com/SammyRobensParadise/github-contributions-counter"
                  className="underline"
                >
                  github.com/SammyRobensParadise/github-contributions-counter
                </a>
              </li>
              <li>
                Npm:{' '}
                <a
                  href="https://www.npmjs.com/package/github-contributions-counter"
                  className="underline"
                >
                  npmjs.com/package/github-contributions-counter
                </a>
              </li>
            </ul>
          </div>
        </Transition>
        <div className="grid justify-items-center py-6 items-center">
          <ScrollButton handler={handleScrollButtonClick} name="Intensif-eye" />
        </div>
      </div>
    </>
  )
}

export default GithubStats

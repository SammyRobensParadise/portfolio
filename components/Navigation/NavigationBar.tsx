import React, { ReactElement, useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Transition, Switch } from '@headlessui/react'

import Puzzle from '../../global/assets/puzzle.svg'
import Icon from '../../global/assets/Icon.svg'
import Sun from '../../global/assets/sun.svg'
import Moon from '../../global/assets/moon.svg'
import { RESUME_FILE_NAME } from '../../global/constants/constants'
import { animate, cubicBezier } from '../../global/helpers/animation'

const style =
  'transform translate transition-all hover:underline hover:skew-x-6 hover:skew-y-6 focus:skew-x-6 focus:skew-y-6 outline-none'

const NavigationBar = ({
  handleDarkTheme
}: {
  handleDarkTheme: React.Dispatch<React.SetStateAction<boolean>>
}): ReactElement => {
  const router = useRouter()
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const hasDarkMode = window.localStorage.getItem('dark_mode')
    switch (hasDarkMode) {
      case 'true': {
        setDarkMode(true)
        handleDarkTheme(true)
        break
      }
      case 'false': {
        setDarkMode(false)
        handleDarkTheme(false)
        break
      }
      default: {
        setDarkMode(false)
        handleDarkTheme(false)
        window.localStorage.setItem('dark_mode', 'false')
      }
    }
  }, [handleDarkTheme])

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark')
      document.documentElement.classList.remove('bg-off-white')
      handleDarkTheme(true)

      document.documentElement.classList.add('bg-shadow')
      window.localStorage.setItem('dark_mode', 'true')
    }
    if (!darkMode) {
      document.body.classList.remove('dark')
      document.documentElement.classList.remove('bg-shadow')
      document.documentElement.classList.add('bg-off-white')
      handleDarkTheme(false)

      window.localStorage.setItem('dark_mode', 'false')
    }
  }, [darkMode, handleDarkTheme])

  return (
    <div className="text-cerulaen dark:text-off-white grid grid-cols-2 xl:grid-cols-3 gap-16 p-6 text-lg font-work font-normal z-50 sticky top-0">
      <Transition
        show
        appear
        enter={`${animate(1000)} ${cubicBezier(0.97, 0.03, 0.36, 0.45)}`}
        enterFrom="opacity-0"
        enterTo="opaciy-100"
      >
        <button
          type="button"
          onClick={() => {
            router?.push('/')
          }}
        >
          <Icon />
        </button>
      </Transition>
      <Transition
        className="transition transform text-center hidden xl:flex flex-row space-x-4 justify-center hover:underline pt-2"
        show
        appear
        enter={`${animate(1000, 500)} ${cubicBezier(0.97, 0.03, 0.36, 0.45)}`}
        enterFrom="opacity-0"
        enterTo="opaciy-100"
      >
        <Link href="/" passHref>
          <a className="flex flex-row space-x-4">
            <Puzzle />
            <p>Sammy Robens-Paradise</p>
          </a>
        </Link>
      </Transition>
      <Transition
        className="flex flex-row justify-end space-x-4 pt-2 pr-2"
        show
        appear
        enter={`${animate(1000, 500)} ${cubicBezier(0.97, 0.03, 0.36, 0.45)}`}
        enterFrom="opacity-0"
        enterTo="opaciy-100"
      >
        <div className="flex space-x-4 pt-1 pr-4">
          <Sun />
          <Switch
            checked={darkMode}
            onChange={setDarkMode}
            className="bg-cerulaen relative inline-flex items-center h-6 rounded-full w-11"
          >
            <span className="sr-only">Enable Dark Mode</span>
            <span
              className={`${
                darkMode ? 'translate-x-6' : 'translate-x-1'
              } inline-block w-4 h-4 transform transition-all bg-off-white rounded-full`}
            />
          </Switch>
          <Moon />
        </div>
        <a href={`/${RESUME_FILE_NAME}`}>
          <p className={style}>Résume</p>
        </a>
        <Link
          href={{
            pathname: router.route,
            query: { type: 'projects', overlay: true }
          }}
          passHref
        >
          <a className={style}>Projects</a>
        </Link>
        <Link
          href={{
            pathname: router.route,
            query: { type: 'work', overlay: true }
          }}
          passHref
        >
          <a className={style}>Work</a>
        </Link>
        <Link href="/#about" passHref>
          <a className={style}>About</a>
        </Link>
      </Transition>
    </div>
  )
}

export default NavigationBar

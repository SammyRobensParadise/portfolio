import React, { ReactElement, useState, useEffect, useCallback } from 'react'
import { Transition } from '@headlessui/react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import original from 'react95/dist/themes/original'
import {
  styleReset,
  AppBar,
  Toolbar,
  Button,
  Bar,
  Window,
  WindowContent,
  WindowHeader,
  Tooltip,
  Counter,
  LoadingIndicator
} from 'react95'

import constants from '../../global/constants/constants'
import OldSchool from '../../providers/oldschool'

const GlobalStyles = createGlobalStyle`
  ${styleReset}
`

const initialSeconds = 30

const NavigationBar = (): ReactElement => (
  <AppBar className="font-mono bottom-0" style={{ top: 'auto' }}>
    <Toolbar>
      <Bar size={35} />
      <a href={constants.urls.RESUME_URL()}>
        <Button variant="menu">Resume</Button>
      </a>
      <a href={constants.urls.LINKEDIN_URL}>
        <Button variant="menu">Linkedin</Button>
      </a>
      <Bar size={35} />
    </Toolbar>
  </AppBar>
)

const WindowElement = ({
  forwardedEvent
}: {
  forwardedEvent?: () => void
}): ReactElement => {
  const [seconds, setSeconds] = useState<number>(initialSeconds)
  const [showLoading, setShowLoading] = useState<boolean>(false)

  const handleTransition = useCallback((): void => {
    setShowLoading(true)
    setTimeout(() => {
      if (forwardedEvent) {
        forwardedEvent()
      }
    }, 1000)
  }, [setShowLoading, forwardedEvent])

  const handleKeyPress = useCallback(
    (event: KeyboardEvent): void => {
      if (event.key === 'Enter') {
        handleTransition()
      }
    },
    [handleTransition]
  )

  useEffect(() => {
    const myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1)
      }
      if (seconds === 0) {
        handleTransition()
      }
    }, 1000)
    return () => {
      clearInterval(myInterval)
    }
  })

  useEffect(() => {
    window?.addEventListener('keydown', handleKeyPress)
    return () => {
      window?.removeEventListener('keydown', handleKeyPress)
    }
  })

  return (
    <Window className="font-mono w-64 flex items-center justify-between window">
      <WindowHeader className="window-header cursor-move">
        <span>s_robens_paradise.exe</span>
      </WindowHeader>
      <Toolbar>
        <Tooltip
          text="It looks like you've managed to return to 1995! Click 'Begin Viewing Portfolio' to zoom to present day."
          enterDelay={100}
          leaveDelay={500}
        >
          <Button variant="menu" size="sm">
            Help
          </Button>
        </Tooltip>
      </Toolbar>
      <WindowContent>
        <p className="pb-4">Press the Enter Key or Click the Button to Begin</p>
        {seconds === 0 || showLoading ? (
          <>
            <p className="text-center mb-2">Loading...</p>
            <LoadingIndicator isLoading />
          </>
        ) : (
          <>
            <Counter value={0} minLength={2} />
            <Counter value={0} minLength={2} />
            <Counter value={seconds} minLength={2} />
          </>
        )}

        <Button className="mt-4" onClick={handleTransition}>
          Begin Viewing Portfolio
        </Button>
      </WindowContent>
    </Window>
  )
}

/**
 *
 * @returns
 */
const OldSchoolRenderer = (): ReactElement => {
  const oldSchool = OldSchool.useOldSchool()

  const [transition, setTransition] = useState<boolean>(true)

  function handleSetTransition(): void {
    setTransition(false)
    if (oldSchool) {
      setTimeout(() => {
        oldSchool.hideReact95()
        oldSchool.showGlitch()
      }, 500)
    }
  }

  return (
    <div className="screen glitch pointer bg-gray-900">
      <Transition
        className="bg-gray-900"
        appear
        show={transition}
        leave="transform transition duration-250  cubic-bezier(.97,.03,.36,.45)"
        leaveFrom="scale-100 opacity-100 bg-teal"
        leaveTo="scale-0 opacity-25 bg-white"
      >
        <div className="h-screen bg-teal">
          <GlobalStyles />
          <ThemeProvider theme={original as unknown}>
            <NavigationBar />
            <div className="grid justify-items-center p-16  bg-teal">
              <div>
                <WindowElement forwardedEvent={handleSetTransition} />
              </div>
            </div>
          </ThemeProvider>
        </div>
      </Transition>
    </div>
  )
}

export default OldSchoolRenderer

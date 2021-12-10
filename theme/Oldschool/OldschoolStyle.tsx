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

import constants, { RESUME_FILE_NAME } from '../../global/constants/constants'
import OldSchool from '../../providers/oldschool'

const GlobalStyles = createGlobalStyle`
  ${styleReset}
`

const initialSeconds = 30

const NavigationBar = (): ReactElement => (
  <AppBar style={{ top: 'auto', bottom: '0', fontFamily: 'Ms Sans' }}>
    <Toolbar>
      <Bar size={35} />
      <a href={`${RESUME_FILE_NAME}`}>
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
    <Window
      className="window"
      style={{
        fontFamily: 'Ms Sans',
        width: '16rem',
        display: 'flex',
        alignItems: 'center',
        justifyContet: 'space-between'
      }}
    >
      <WindowHeader className="window-header" style={{ cursor: 'move' }}>
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
        <p style={{ paddingBottom: '1rem' }}>
          Press the Enter Key or Click the Button to Begin
        </p>
        {seconds === 0 || showLoading ? (
          <>
            <p style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
              Loading...
            </p>
            <LoadingIndicator isLoading />
          </>
        ) : (
          <>
            <Counter value={0} minLength={2} />
            <Counter value={0} minLength={2} />
            <Counter value={seconds} minLength={2} />
          </>
        )}

        <Button style={{ marginTop: '1rem' }} onClick={handleTransition}>
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
      }, 1000)
    }
  }

  return (
    <div className="glitch pointer bg-off-white dark:bg-shadow">
      <Transition
        className="dark:bg-shadow bg-off-white"
        appear
        show={transition}
        leave="transition-all ease-linear duration-1000"
        leaveFrom="opacity-100 bg-teal"
        leaveTo="opacity-0 bg-off-white"
      >
        <div
          className="h-screen bg-teal"
          style={{ backgroundColor: 'rgba(0, 128, 128, 1)' }}
        >
          <GlobalStyles />
          <ThemeProvider theme={original as unknown}>
            <NavigationBar />
            <div
              className="grid justify-items-center p-16  bg-teal"
              style={{ backgroundColor: 'rgba(0, 128, 128, 1)' }}
            >
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

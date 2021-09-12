import React, { ReactElement, useState, useEffect, useCallback } from 'react'
import styled, {
  createGlobalStyle,
  StyledComponent,
  ThemeProvider
} from 'styled-components'
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
  Counter
} from 'react95'

import constants from '../../global/constants/constants'

const GlobalStyles = createGlobalStyle`
  ${styleReset}
`

const initialSeconds = 30

const Wrapper: StyledComponent<'div', never> = styled.div`
  .window-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .window {
    width: 400px;
    min-height: 200px;
  }
`
const Page = styled.div`
  p::selection {
    background-color: blue;
    color: white;
  }
`

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

const WindowElement = (): ReactElement => {
  const [seconds, setSeconds] = useState(initialSeconds)

  useEffect(() => {
    const myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1)
      }
    }, 1000)
    return () => {
      clearInterval(myInterval)
    }
  })
  return (
    <Window className="font-mono w-64">
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
        <Counter value={0} minLength={2} />
        <Counter value={0} minLength={2} />
        <Counter value={seconds} minLength={2} />

        <Button className="mt-4">Begin Viewing Portfolio</Button>
      </WindowContent>
    </Window>
  )
}

/**
 *
 * @returns
 */
const OldSchoolRenderer = (): ReactElement => (
  <Page className="h-screen bg-teal">
    <GlobalStyles />
    <ThemeProvider theme={original as unknown}>
      <NavigationBar />
      <div className="grid justify-items-center p-16  bg-teal">
        <Wrapper>
          <WindowElement />
        </Wrapper>
      </div>
    </ThemeProvider>
  </Page>
)

export default OldSchoolRenderer

import React, { ReactElement } from 'react'
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
        <p>Press the Enter Key or Click the Button to Begin</p>
        <Button className="mt-8">Begin Viewing Portfolio</Button>
      </WindowContent>
    </Window>
  )
}

/**
 *
 * @returns
 */
const OldSchoolRenderer = (): ReactElement => {
  return (
    <Page className="h-screen bg-teal">
      <GlobalStyles />
      <ThemeProvider theme={original}>
        <NavigationBar />
        <div className="grid justify-items-center p-16  bg-teal">
          <Wrapper>
            <WindowElement />
          </Wrapper>
        </div>
      </ThemeProvider>
    </Page>
  )
}

export default OldSchoolRenderer

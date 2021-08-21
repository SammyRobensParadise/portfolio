import React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import {} from 'react95'
// pick a theme of your choice
import original from 'react95/dist/themes/original'
// original Windows95 font (optionally)
import {
  styleReset,
  AppBar,
  Toolbar,
  Button,
  Bar,
  Window,
  WindowContent,
  WindowHeader
} from 'react95'
import Draggable from 'react-draggable'

const GlobalStyles = createGlobalStyle`
  ${styleReset}
`
const Wrapper = styled.div`
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

const NavigationBar = () => (
  <AppBar className="font-mono bottom-0" style={{ top: 'auto' }}>
    <Toolbar>
      <Bar size={35} />
      <Button variant="menu">Resume</Button>
      <Button variant="menu">Linkedin</Button>
      <Bar size={35} />
    </Toolbar>
  </AppBar>
)

const WindowElement = () => (
  <Draggable defaultPosition={{ x: 60, y: 60 }}>
    <Window className="w-1/4 font-mono">
      <WindowHeader className="window-header cursor-move">
        <span>s_robens_paradise.exe</span>
      </WindowHeader>
      <Toolbar>
        <Button variant="menu" size="sm">
          Help
        </Button>
      </Toolbar>
      <WindowContent>
        <p>Click the Button to begin</p>
        <Button className="mt-8">Begin Viewing</Button>
      </WindowContent>
    </Window>
  </Draggable>
)

const OldSchoolRenderer = () => {
  return (
    <div className="h-screen bg-teal">
      <GlobalStyles />
      <ThemeProvider theme={original}>
        <NavigationBar />
        <Wrapper>
          <WindowElement />
        </Wrapper>
      </ThemeProvider>
    </div>
  )
}

export default OldSchoolRenderer

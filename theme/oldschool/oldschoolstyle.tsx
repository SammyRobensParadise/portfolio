import React, { useState, useEffect } from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import original from 'react95/dist/themes/original'
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

const WindowElement = () => {
  const [xPos, setXPos] = useState<number>(0)
  const [yPos, setYPos] = useState<number>(0)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const { innerWidth, innerHeight } = window
      const updatedXPos = innerWidth / 2 - 256
      const updatedYPos = innerHeight / 2 - 256
      setXPos(updatedXPos)
      setYPos(updatedYPos)
    }
  }, [])
  return (
    <Draggable
      position={{
        x: xPos,
        y: yPos
      }}
    >
      <Window className="font-mono w-64">
        <WindowHeader className="window-header cursor-move">
          <span>s_robens_paradise.exe</span>
        </WindowHeader>
        <Toolbar>
          <Button variant="menu" size="sm">
            Help
          </Button>
        </Toolbar>
        <WindowContent>
          <p>Press the Enter Key or Click the Button to Begin</p>
          <Button className="mt-8">Begin Viewing Portfolio</Button>
        </WindowContent>
      </Window>
    </Draggable>
  )
}

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

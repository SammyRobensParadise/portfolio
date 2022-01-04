import '../styles/globals.css'
import '../styles/tv.scss'
import '../styles/glitch.scss'
import '../styles/three.scss'

import type { AppProps } from 'next/app'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import React, { ComponentType, ReactElement, useState } from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'
import { Curtains } from 'react-curtains'
import { Provider } from 'jotai'

import OldSchool from '../providers/oldschool'
import OldSchoolRenderer from '../theme/Oldschool/OldschoolStyle'
import GlitchRenderer from '../theme/Glitch/GlitchStyle'
import NavigationBar from '../components/Navigation/NavigationBar'
import Footer from '../components/Footer/Footer'
import Sidebar from '../components/Sidebar/Sidebar'
import OverlayDialog from '../components/Dialog/OverlayDialog'
import MobileWarning from '../components/MobileWarning/MobileWarning'
import Overlay from '../components/Overlay/Overlay'

const AnimatedCursor: ComponentType<Record<string, number | string>> = dynamic(
  () => import('react-animated-cursor'),
  {
    ssr: false
  }
)

function Wrapper({ Component, pageProps }: AppProps): ReactElement | null {
  const oldSchool = OldSchool.useOldSchool()
  const [darkTheme, setIsDarkTheme] = useState<boolean>(false)

  if (oldSchool) {
    const { state } = oldSchool
    if (state?.react95Visible && state?.glitchVisible) {
      return (
        <div className="h-screen dark:bg-shadow bg-off-white">
          <Head>
            <title>💾</title>
          </Head>
          <OldSchoolRenderer />
        </div>
      )
    }
    if (!state?.react95Visible && state?.glitchVisible) {
      return (
        <div className="h-screen bg-off-white dark:bg-shadow">
          <Head>
            <title>🌩️</title>
          </Head>
          <GlitchRenderer />
        </div>
      )
    }

    return (
      <Provider>
        <OverlayDialog />
        <MobileWarning />
        <Overlay />
        <div className="bg-off-white dark:bg-shadow">
          <NavigationBar handleDarkTheme={setIsDarkTheme} />
          <Sidebar />
          <Curtains pixelRatio={Math.min(1.5, window.devicePixelRatio)}>
            <AnimatedCursor
              innerSize={12}
              outerSize={14}
              color={darkTheme ? '63, 243, 178' : '43,43,43'}
              outerAlpha={0.2}
              innerScale={0.7}
              outerScale={5}
              trailingSpeed={6}
            />
            <Component {...pageProps} />
          </Curtains>
          <Footer />
        </div>
      </Provider>
    )
  }
  return null
}

interface App extends AppProps {
  pageProps: Record<string, unknown>
}

function Portfolio({ Component, pageProps, router }: App): ReactElement {
  return (
    <OldSchool.Provider>
      <ParallaxProvider>
        <Wrapper Component={Component} pageProps={pageProps} router={router} />
      </ParallaxProvider>
    </OldSchool.Provider>
  )
}

export default Portfolio

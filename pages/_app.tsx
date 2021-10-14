import '../styles/globals.scss'
import '../styles/tv.scss'
import '../styles/glitch.scss'
import '../styles/three.scss'

import type { AppProps } from 'next/app'
import Head from 'next/head'
import React, { ReactElement } from 'react'
import { Curtains } from 'react-curtains'

import OldSchool from '../providers/oldschool'
import OldSchoolRenderer from '../theme/Oldschool/OldschoolStyle'
import GlitchRenderer from '../theme/Glitch/GlitchStyle'
import NavigationBar from '../components/Navigation/NavigationBar'
import Footer from '../components/Footer/Footer'

function Wrapper({ Component, pageProps }: AppProps): ReactElement | null {
  const oldSchool = OldSchool.useOldSchool()
  if (oldSchool) {
    const { state } = oldSchool
    if (state?.react95Visible && state?.glitchVisible) {
      return (
        <div className="h-screen bg-shadow">
          <Head>
            <title>💾</title>
          </Head>
          <OldSchoolRenderer />
        </div>
      )
    }
    if (!state?.react95Visible && state?.glitchVisible) {
      return (
        <div className="h-screen bg-off-white">
          <Head>
            <title>🌩️</title>
          </Head>
          <GlitchRenderer />
        </div>
      )
    }
    return (
      <div className=" bg-off-white dark:bg-shadow">
        <NavigationBar />
        <Curtains pixelRatio={Math.min(1.5, window.devicePixelRatio)}>
          <Component {...pageProps} />
        </Curtains>
        <Footer />
      </div>
    )
  }
  return null
}

function Portfolio({ Component, pageProps, router }: AppProps): ReactElement {
  return (
    <OldSchool.Provider>
      {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
      <Wrapper Component={Component} pageProps={pageProps} router={router} />
    </OldSchool.Provider>
  )
}

export default Portfolio

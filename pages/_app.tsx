import '../styles/globals.scss'
import '../styles/tv.scss'
import '../styles/glitch.scss'

import type { AppProps } from 'next/app'
import React, { ReactElement } from 'react'

import OldSchool from '../providers/oldschool'
import OldSchoolRenderer from '../theme/Oldschool/OldschoolStyle'
import GlitchRenderer from '../theme/Glitch/GlitchStyle'

function Wrapper({ Component, pageProps }: AppProps): ReactElement | null {
  const oldSchool = OldSchool.useOldSchool()
  if (oldSchool) {
    const { state } = oldSchool
    if (state?.react95Visible && state?.glitchVisible) {
      return <OldSchoolRenderer />
    }
    if (!state?.react95Visible && state?.glitchVisible) {
      return <GlitchRenderer />
    }

    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Component {...pageProps} />
  }
  return null
}

function Portfolio({ Component, pageProps, router }: AppProps): ReactElement {
  return (
    <OldSchool.Provider>
      <div className="h-screen bg-gray-900">
        {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
        <Wrapper Component={Component} pageProps={pageProps} router={router} />
      </div>
    </OldSchool.Provider>
  )
}

export default Portfolio

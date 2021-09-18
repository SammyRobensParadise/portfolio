import '../styles/globals.css'
import '../styles/tv.css'

import type { AppProps } from 'next/app'
import React, { ReactElement } from 'react'

import OldSchool from '../providers/oldschool'
import OldSchoolRenderer from '../theme/oldschool/oldschoolstyle'

function Wrapper({ Component, pageProps }: AppProps) {
  const oldSchool = OldSchool.useOldSchool()
  if (oldSchool?.state) {
    return <OldSchoolRenderer />
  }
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />
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

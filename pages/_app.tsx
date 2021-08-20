import '../styles/globals.css'
import type { AppProps } from 'next/app'
import OldSchool from '../providers/oldschool'
import React from 'react'
function Portfolio({ Component, pageProps, router }: AppProps) {
  return (
    <OldSchool.Provider>
      <Wrapper Component={Component} pageProps={pageProps} router={router} />
    </OldSchool.Provider>
  )
}

function Wrapper({ Component, pageProps }: AppProps) {
  const OS = OldSchool.useOldSchool()
  if (OS?.state) {
    return (
      <div>
        <button onClick={() => OS.hideOldSchool()}>click me</button>
      </div>
    )
  }
  return <Component {...pageProps} />
}

export default Portfolio

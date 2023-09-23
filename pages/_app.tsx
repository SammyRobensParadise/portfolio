import type { AppProps } from 'next/app'
import React, { ReactElement } from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'
import { Provider as State } from 'jotai'
import '../styles/globals.css'

function Wrapper({ Component, pageProps }: AppProps): ReactElement | null {
  return (
    <State>
      <Component {...pageProps} />
    </State>
  )
}

interface App extends AppProps {
  pageProps: Record<string, unknown>
}

function Portfolio({ Component, pageProps, router }: App): ReactElement {
  return (
    <ParallaxProvider>
      <Wrapper Component={Component} pageProps={pageProps} router={router} />
    </ParallaxProvider>
  )
}

export default Portfolio

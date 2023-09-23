import type { AppProps } from 'next/app'
import React, { ReactElement } from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'
import { Provider as State } from 'jotai'
import { Grommet, ThemeType } from 'grommet'
import '../styles/global.css'

import theme from '../styles/theme'

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
    <Grommet full theme={theme as unknown as ThemeType}>
      <ParallaxProvider>
        <Wrapper Component={Component} pageProps={pageProps} router={router} />
      </ParallaxProvider>
    </Grommet>
  )
}

export default Portfolio

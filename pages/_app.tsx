import type { AppProps } from 'next/app'
import React, { ReactElement } from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'
import { Provider as State } from 'jotai'
import '../styles/globals.css'
import AnimatedCursor from 'react-animated-cursor'

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
      <AnimatedCursor
        innerSize={60}
        outerSize={160}
        color="255, 255, 255"
        outerAlpha={1}
        innerScale={0.2}
        outerScale={2.5}
        outerStyle={{
          mixBlendMode: 'exclusion'
        }}
        innerStyle={{
          mixBlendMode: 'difference'
        }}
        trailingSpeed={12}
      />
      <Wrapper Component={Component} pageProps={pageProps} router={router} />
    </ParallaxProvider>
  )
}

export default Portfolio

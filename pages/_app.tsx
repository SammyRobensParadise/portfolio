import '../styles/globals.css'
import type { AppProps } from 'next/app'
import OldSchool from '../providers/oldschool'
function Portfolio({ Component, pageProps }: AppProps) {
  return (
    <OldSchool.Provider>
      <Component {...pageProps} />
    </OldSchool.Provider>
  )
}
export default Portfolio

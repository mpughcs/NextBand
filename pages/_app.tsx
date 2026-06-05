import type { AppProps } from 'next/app'
import Script from 'next/script'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import GlobalStyle from '../components/globalstyles'
import '../styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Navigation from '../components/Navigation'
config.autoAddCss = false

const theme: DefaultTheme = {
  colors: {
    primary: '#111',
    secondary: '#0070f3',
  },
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        src="https://kit.fontawesome.com/b52fd21c14.js"
        crossOrigin="anonymous"
        strategy="lazyOnload"
      />
      <ThemeProvider theme={theme}>
        <Navigation />
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

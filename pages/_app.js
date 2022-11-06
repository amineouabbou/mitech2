import '../styles/globals.css'
import NextNProgress from 'nextjs-progressbar'
import { GlobalProvider } from '../providers/globalProvider'
import { appWithTranslation } from 'next-i18next'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalProvider>
        <NextNProgress color="#ff6600" height={3} />
        <Component {...pageProps} />
      </GlobalProvider>
    </>
  )
}

export default appWithTranslation(MyApp)

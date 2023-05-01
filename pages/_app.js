import '../styles/globals.css'
import NextNProgress from 'nextjs-progressbar'
import { GlobalProvider } from '../providers/globalProvider'
import { appWithTranslation } from 'next-i18next'
import Layout from '../components/Ui/Layout'
import { getPageData } from '../utils'
import { GLOBAL_DATA } from '../queries'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalProvider>
        <NextNProgress color="#ff6600" height={3} />
        <Layout {...pageProps}>
          <Component {...pageProps} />
        </Layout>
      </GlobalProvider>
    </>
  )
}

export default appWithTranslation(MyApp)

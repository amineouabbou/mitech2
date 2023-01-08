import '../styles/globals.css'
import NextNProgress from 'nextjs-progressbar'
import { GlobalProvider } from '../providers/globalProvider'
import { appWithTranslation } from 'next-i18next'
import Layout from '../components/Ui/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalProvider>
        <NextNProgress color="#ff6600" height={3} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </GlobalProvider>
    </>
  )
}

export default appWithTranslation(MyApp)

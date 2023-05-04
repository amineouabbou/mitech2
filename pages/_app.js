import '../styles/globals.css'
import NextNProgress from 'nextjs-progressbar'
import { GlobalProvider } from '../providers/globalProvider'
import { appWithTranslation } from 'next-i18next'
import Layout from '../components/Ui/Layout'
import { GLOBAL_DATA } from '../queries'
import { getPageData } from '../utils'

function MyApp({ Component, pageProps, globalProps }) {
  return (
    <>
      <GlobalProvider>
        <NextNProgress color="#ff6600" height={3} />
        <Layout globalProps={globalProps}>
          <Component {...pageProps} globalProps={globalProps} />
        </Layout>
      </GlobalProvider>
    </>
  )
}

MyApp.getInitialProps = async (context) => {
  const { locale } = context.router
  const globalProps = await getPageData(GLOBAL_DATA, 563, locale)

  return { globalProps }
}

export default appWithTranslation(MyApp)

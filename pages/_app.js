import '../styles/globals.css'
import NextNProgress from 'nextjs-progressbar'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress color="#00B1B7" height={5} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

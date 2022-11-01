import Head from "next/head"
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/index.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Mindarc Frontend Assessment</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

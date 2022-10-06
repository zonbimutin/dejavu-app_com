import { GET_GLOBALS } from '../gql/Globals'
import client from '../apollo-client'
import Header from '@components/Globals/Header'
import Footer from '@components/Globals/Footer'
import 'slick-carousel/slick/slick.css'
import '../styles/globals.css'
import '../scss/style.scss'

function MyApp({ Component, pageProps, globals }) {
  const { header, footer } = globals
  return (
    <>
      <div className="bg-background h-full">
        <Header header={header} />
        <Component {...pageProps} />
        <Footer footer={footer} />
      </div>
    </>
  )
}

export default MyApp

MyApp.getInitialProps = async () => {
  try {
    const { data } = await client.query({
      query: GET_GLOBALS,
      fetchPolicy: 'no-cache',
    })

    const globals = data.global.data.attributes

    return {
      globals,
    }
  } catch (error) {
    return { notFound: true }
  }
}

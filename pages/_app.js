import Header from '@components/Globals/Header'
import Footer from '@components/Globals/Footer'
import 'slick-carousel/slick/slick.css'
import '../styles/globals.css'
import '../scss/style.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="bg-background h-full">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  )
}

export default MyApp

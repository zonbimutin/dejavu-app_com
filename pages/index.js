import Head from 'next/head'
import Hero from '@sections/Hero'
import Reinsurance from '@sections/Reinsurance'
import About from '@sections/About'
import Features from 'sections/Features'
import Screenshots from '@sections/Screenshots'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Deja vu</title>
        <meta name="description" content="Application deja vu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Reinsurance />
      <About />
      <Features />
      {/* <Screenshots /> */}
    </div>
  )
}

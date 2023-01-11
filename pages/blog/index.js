import Section from '@components/Basics/Section'
import HeroPage from '@components/HeroPage'
import BlogGrid from '@components/BlogGrid'
import Head from 'next/head'
export default () => {
  return (
    <div>
      <Head>
        <title>Deja vu - Blog</title>
        <meta name="description" content="Application deja vu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroPage title={'Blog'} />
      <Section>
        <BlogGrid />
      </Section>
    </div>
  )
}

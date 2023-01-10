import client from '../apollo-client'
import { GET_HOME } from '../gql/Pages'
import Head from 'next/head'
import Hero from '@sections/Hero'
import Sections from '@components/Basics/Sections/Sections'

export default function Home({ home }) {
  const { hero, seo, sections } = home

  return (
    <div>
      <Head>
        <title>Deja vu</title>
        <meta name="description" content="Application deja vu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {hero && <Hero hero={hero} />}
      {sections && <Sections sections={sections} />}
    </div>
  )
}

export async function getServerSideProps(context) {
  try {
    const { data } = await client.query({
      query: GET_HOME,
      fetchPolicy: 'no-cache',
    })

    return {
      props: {
        home: data.home.data.attributes,
      },
    }
  } catch (error) {
    return { notFound: true }
  }
}

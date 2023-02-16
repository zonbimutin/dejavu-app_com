import client from '../apollo-client'
import { GET_PAGE } from '../gql/Pages'
import Error404 from '@components/Globals/Error404/Error404'
import HeroPage from '@components/HeroPage'
import Markdown from '@components/Markdown'

import Head from 'next/head'

export default ({ data }) => {
  if (!data) return null

  const { title, dynamic, thumbnail, excerpt, publishedAt } = data

  return (
    <div>
      <Head>
        <title>{`Deja vu - ${title}`}</title>
        <meta name="description" content="Application deja vu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroPage
        title={title}
        image={thumbnail}
        excerpt={excerpt}
        publishedAt={publishedAt}
      />
      <div className="container px-4 mx-auto py-24 whitespace-pre-line text-white grid place-items-center">
        <div className="lg:max-w-[70%]">
          {dynamic[0]?.content && <Markdown text={dynamic[0].content} />}
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  try {
    const { data } = await client.query({
      query: GET_PAGE,
      variables: {
        slug: context.params.slug,
      },
      fetchPolicy: 'no-cache',
    })

    console.log(data)

    return {
      props: {
        data: data.findSlug.data.attributes,
      },
    }
  } catch (error) {
    return { notFound: true }
  }
}

import client from '../../apollo-client'
import { GET_BLOG_POST } from '../../gql/Blog'
import Error404 from '@components/Globals/Error404/Error404'
import HeroPage from '@components/HeroPage'
import Markdown from '@components/Markdown'

import Head from 'next/head'

export default ({ data }) => {
  if (!data) return <Error404 />

  const { title, content, thumbnail, excerpt, publishedAt } = data

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
          <Markdown text={content} />
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  try {
    const { data } = await client.query({
      query: GET_BLOG_POST,
      variables: {
        slug: context.params.slug,
      },
      fetchPolicy: 'no-cache',
    })

    return {
      props: {
        data: data.findSlug.data.attributes,
      },
    }
  } catch (error) {
    return { props: { data: false } }
  }
}

import client from '../apollo-client'
import { GET_PAGE } from '../gql/Pages'
import Error from 'next/error'
import Error404 from '@components/Globals/Error404/Error404'

const Page = ({ data }) => {
  if (!data) return <Error404 />

  return <div>Hello world</div>
}

export default Page

export async function getServerSideProps(context) {
  try {
    const { data } = await client.query({
      query: GET_PAGE,
      variables: {
        slug: context.params.slug,
      },
      fetchPolicy: 'no-cache',
    })

    return {
      props: {
        data: data.page.data.attributes,
      },
    }
  } catch (error) {
    return { props: { data: false } }
  }
}

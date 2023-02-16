import { useQuery } from '@apollo/client'
import { GET_BLOG_POSTS } from '../gql/Blog'

import BlogPost from '@components/BlogPost'

export default () => {
  const { data, loading, error } = useQuery(GET_BLOG_POSTS)
  if (loading) {
    return <h2>Loading...</h2>
  }

  if (error) {
    console.log(error)
    return null
  }

  const posts = data?.blogs?.data
  if (!posts) return null

  return (
    <div
      id="blog"
      className="grid  grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-8"
    >
      {posts.map((post, key) => {
        return <BlogPost key={key} {...post} />
      })}
    </div>
  )
}

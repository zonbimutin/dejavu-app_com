import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: `${process.env.CMS_PUBLIC_API_URI}/graphql`,
  cache: new InMemoryCache(),
})

export default client

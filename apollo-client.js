import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'

const httpLink = createHttpLink({
  uri: `https://dejavu-api-production.up.railway.app/graphql`,
})

const client = new ApolloClient({
  // uri: `${process.env.CMS_PUBLIC_API_URI}/graphql`,
  link: httpLink,
  cache: new InMemoryCache(),
})

export default client

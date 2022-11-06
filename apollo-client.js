import { ApolloClient, InMemoryCache } from '@apollo/client'
import config from './data/config'

const { GRAPHQL_URL } = config

const client = new ApolloClient({
  uri: GRAPHQL_URL,
  cache: new InMemoryCache(),
})

export default client

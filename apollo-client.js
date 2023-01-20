import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import config from './data/config'

const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
}

const { GRAPHQL_URL } = config

const client = new ApolloClient({
  link: createHttpLink({
    uri: GRAPHQL_URL,
  }),
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions,
})

export default client

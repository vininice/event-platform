import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4of01x426ab01xifbsl255i/master',
  cache: new InMemoryCache(),
})

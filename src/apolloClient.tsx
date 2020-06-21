import ApolloClient, { InMemoryCache } from 'apollo-boost';

const client: ApolloClient<any> = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  credentials: 'include',
  cache: new InMemoryCache(),
});

export default client;

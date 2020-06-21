import { gql } from 'apollo-boost';
import apolloClient from '../apolloClient';

const REFRESH_TOKEN = gql`
{
  refreshToken{
    refreshToken
  }
}
`;

export default async () => {
  const result = await apolloClient.query({
    query: REFRESH_TOKEN,
    errorPolicy: 'all',
  });
  if (result.data.refreshToken) {
    return true;
  }
  return false;
};

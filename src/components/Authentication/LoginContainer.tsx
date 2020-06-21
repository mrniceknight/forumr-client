import React from 'react';
import 'react-router-dom';
import { gql } from 'apollo-boost';
import Login from './Login';
import client from '../../apolloClient';
import createState from '../../utils/createState';

export default function LoginContainer() {
  const username = createState();
  const password = createState();
  const AUTHENTICATE = gql`{
  authenticate(email:"${username.value}",password:"${password.value}"){
    id
    email
    token
  }
}`;
  const authenticate = async () => {
    // TODO: authenticate from graphql
    const result = await client.query({
      query: AUTHENTICATE,
      errorPolicy: 'all',
    });
    if (!result.data.authenticate) {
      console.log(result.data);
      console.log(result.errors);
      // TODO: OUTPUT INVALID LOGIN CREDENTIALS
    }
  };
  return (
    <Login
      username={username}
      password={password}
      authenticate={authenticate}
    />
  );
}

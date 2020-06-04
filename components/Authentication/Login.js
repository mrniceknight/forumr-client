import React, { useState } from 'react';
import { Container, TextField, Button } from '@material-ui/core';
import { gql } from 'apollo-boost';
import client from '../../apolloClient';

export default function (props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const authenticate = async () => {
    // TODO: authenticate from graphql
    const result = await client.mutate({
      mutation: gql`
      mutation{
      addUser(email : "${username}",password: "${password}"){
        id
        email
        password
      }
      }`,
    });
    console.log(result);
  };

  return (
    <Container>
      <TextField placeholder="username" value={username} onChange={(e) => { setUsername(e.target.value); }} />
      <TextField placeholder="password" type="password" value={password} onChange={(e) => { setPassword(e.target.value); }} />
      <Button color="primary" onClick={authenticate}>Login</Button>
    </Container>
  );
}

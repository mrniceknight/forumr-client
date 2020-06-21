import React from 'react';
import {
  TextField, Button, Grid,
} from '@material-ui/core';
import StateObject from '../../interfaces/StateObject';

interface Props {
  username: StateObject,
  password: StateObject,
  authenticate: () => void
}
const Login: React.FC<Props> = ({ username, password, authenticate }) => (
  <Grid container justify="center">
    <Grid item xs={12}>
      <TextField placeholder="username" value={username.value} onChange={(e) => { username.set(e.target.value); }} />
    </Grid>
    <Grid item xs={12}>
      <TextField placeholder="password" type="password" value={password.value} onChange={(e) => { password.set(e.target.value); }} />
    </Grid>
    <Button color="primary" onClick={authenticate}>Login</Button>
    <pre>
      {JSON.stringify(username)}
      {JSON.stringify(password)}
    </pre>
  </Grid>
);
export default Login;

import React from 'react';
import {
  Grid,
} from '@material-ui/core';

export default function Header() {
  return (
    <Grid container>
      <Grid item xs={3}>
        <img src="../../assets/logo/logo.svg" alt="Forumr logo" />
      </Grid>
    </Grid>
  );
}

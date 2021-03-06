import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Authentication/LoginContainer';
import Home from './Home/Home';
import createState from '../utils/createState';

export default function App() {
  const isAuth = createState(false);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

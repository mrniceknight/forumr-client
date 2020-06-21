import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Authentication/LoginContainer';
import Home from './Home/Home';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </BrowserRouter>
  );
}
export default App

import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Character from './pages/Character';
import Main from './pages/Main';
import NotFound from './pages/NotFound';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/character/:characterId" component={Character} />

        <Route path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Character from './pages/Character';
import Main from './pages/Main';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/character/:characterId" component={Character} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;

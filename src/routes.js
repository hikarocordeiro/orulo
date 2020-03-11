import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Favorite from './pages/Favorite';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/favorite" component={Favorite} />
    </Switch>
  );
}

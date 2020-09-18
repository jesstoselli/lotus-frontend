import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from '../pages/Landing';
import Products from '../pages/Products';
import Schedule from '../pages/Schedule';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <>
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/servicos" component={Products} />
      <Route path="/horarios" component={Schedule} />
      <Route path="/cadastro" component={SignUp} />
      <Route path="/login" component={SignIn} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  </>
);

export default Routes;

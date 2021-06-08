import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Detail from './pages/Detail';

export default function App() {
  return (
    <BrowserRouter >
      <Switch >
        <Route exact path='/' component={Dashboard} />
        < Route exact path='/datail/:id' component={Detail} />
        {/* < Route component={NotFound} /> */}
      </Switch>
    </BrowserRouter>
  );
}
import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

// imports local
import Logon from './pages/Logon'
import Register from './pages/Register'
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Logon} />
        <Route path='/register' component={Register} />
        <Route path='/profiles' component={Profile} />
        <Route path='/incident/new' component={NewIncident} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;
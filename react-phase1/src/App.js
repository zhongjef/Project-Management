import React from 'react';
import logo from './logo.svg';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';

import Login from './login/Login';
// import Signup from './Signup';
import User from './user/User';

class App extends React.Component {
  render () {
    return (
      <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route exact path='/login' component={Login}/>
        </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;

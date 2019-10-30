import React from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';

import Login from './Login';
import Signup from './Signup';
import Home from './Home';
// import Signup from './Signup';

class App extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/home" component={Home} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

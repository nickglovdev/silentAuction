import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute} from 'react-router';

import Home from './components/home';
import Login from './components/login';
import Register from './components/register';
import App from './components/app'

ReactDOM.render((
  <Router>
    <Route path="/" component={Home}>
      <Route path="login" component={Login}/>
      <Route path="register" component={Register}/>
    </Route>
    <Route path='/dashboard' component={App}>
    </Route>
  </Router>
), document.getElementById('app'));

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute} from 'react-router';

import App from './components/app';
import Login from './components/login';
import Register from './components/register';

ReactDOM.render((
  <Router>
    <Route path="/" component={App}>
      <Route path="login" component={Login}/>
      <Route path="register" component={Register}/>
    </Route>
  </Router>
), document.getElementById('app'));

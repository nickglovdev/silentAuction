import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute} from 'react-router';
import User from './models/users';

import Sidebar from './components/public/sidebar';
import Home from './components/public/home';
import Login from './components/public/login';
import Register from './components/public/register';
import FAQ from './components/public/faq'
import Dashboard from './components/moderator/dashboard';
import CreateAuction from './components/moderator/createAuction';
import ItemView from './components/moderator/dashboardItemView';
import CreateItem from './components/moderator/createitem';
import EditItem from './components/moderator/edititem';
import EditAuction from './components/moderator/editauction';
import DashboardView from './components/moderator/dashboardView';
import ProfileEdit from './components/moderator/profileEdit';

//This will check and see if the user is logged in.
//This was causing the problem in our registration page.
const requireAuth = (nextState, replaceState) => {
  if (!User.isLoggedIn()){
    replaceState({ nextPathname: nextState.location.pathname }, '/login')
  }
};

ReactDOM.render((
  <Router>
    <Route path="/" component={Sidebar}>
      <IndexRoute component={Home}/>
      <Route path="login" component={Login}/>
      <Route path="register" component={Register}/>
      <Route path="faq" component={FAQ}/>
    </Route>
    <Route path='/dashboard' component={Dashboard} onEnter={requireAuth}>
      <IndexRoute component={DashboardView}/>
      <Route path='/profileEdit' component={ProfileEdit}/>
      <Route path='/auctions/create' component={CreateAuction}/>
      <Route path='/auctions/:id' component={ItemView}/>
      <Route path='/auctions/:id/edit' component={EditAuction}/>
      <Route path='/auctions/:id/items' component={CreateItem}/>
      <Route path='/auctions/:id/items/:itemId' component={EditItem}/>
      <Route path='/auctions/:id/items/:itemId/edit' component={EditItem}/>
    </Route>
  </Router>
), document.getElementById('app'));

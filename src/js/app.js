import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute} from 'react-router';
import User from './models/users';

import Sidebar from './components/public/sidebar';
import Home from './components/public/home';
import Login from './components/public/login';
import Register from './components/public/register';
import FAQ from './components/public/faq'
import Answers from './components/public/faq'

import WelcomeScreen from './components/moderator/welcomeScreen';
import App from './components/moderator/app';
import AuctionCreate from './components/moderator/auctionCreate';
import AuctionEdit from './components/moderator/auctionEdit';
import AuctionItemAdd from './components/moderator/auctionItemAdd';
import AuctionItemEdit from './components/moderator/auctionItemEdit'
import AuctionItemsView from './components/moderator/auctionItemsView';
import ProfileEdit from './components/moderator/profileEdit';
import IndividualItemView from './components/moderator/individualItemView'
import PublicViewItems from './components/moderator/publicViewItems'
import publicViewIndividualItems from './components/moderator/publicViewIndividualItems'

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
      <Route path="faq" component={Answers}/>
    </Route>
    <Route path='/dashboard' component={App} onEnter={requireAuth}>
      <IndexRoute component={WelcomeScreen}/>
      <Route path='/profileEdit' component={ProfileEdit}/>
      <Route path='/auctions/create' component={AuctionCreate}/>
      <Route path='/auctions/:id/edit' component={AuctionEdit}/>
      <Route path='/auctions/:id/items' component={AuctionItemAdd}/>
      <Route path='/auctions/:id/items/:itemId' component={IndividualItemView}/>
      <Route path='/auctions/:id/items/:itemId/edit' component={AuctionItemEdit}/>
      <Route path='/auctions/:id' component={AuctionItemsView}/>
    </Route>
    <Route path='/public/auctions/:id' component={PublicViewItems}></Route>
    <Route path='/public/auctions/:id/items/:itemId' component={publicViewIndividualItems}></Route>
  </Router>
), document.getElementById('app'));

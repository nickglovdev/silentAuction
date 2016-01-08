import React from 'react';
import jQuery from 'jquery';
import { Link } from 'react-router';
import _isEqual from 'lodash/lang/isequal';
import ToggleDisplay from 'react-toggle-display';

import setup from '../../setup';
import User from '../../models/users';
import ListAuctions from './listAuctions';
import WelcomeScreen from './welcomeScreen'


class App extends React.Component {
  constructor(props) {
    super(props);

    setup(User.access_token);

    this.state = {
      Loaded: false,
      auctions: [],
      user: {
        id: '',
        email: ''
      },
      isAuthorizedOne: true,
      isAuthorizedTwo: false
    }

    this.onLogout = this.onLogout.bind(this),
    this.toggleOne = this.toggleOne.bind(this),
    this.toggleTwo = this.toggleTwo.bind(this)
  }

  toggleOne(event){
    event.preventDefault()
    this.setState({
      isAuthorizedOne: false,
      isAuthorizedTwo: true
    });
  }

  toggleTwo(event){
    event.preventDefault()
    this.setState({
      isAuthorizedOne: true,
      isAuthorizedTwo: false
    });
  }

  componentWillReceiveProps(nextProps) {
    if (_isEqual(this.props.location, nextProps.location)) {
      return;
    }

    this.fetchAuctions();
  }

  // Go to our User model and run the function getProfile that lets us
  // make an ajax request to get the users info.
  componentDidMount() {
    User.getProfile();
    this.fetchAuctions();
    // Make unsubscribe equal to a function that lets us pass it down to
    // unmount the subscription after update.
    this.unsubscribe = User.subscribe(() => {
      this.forceUpdate();
    });
  }

  // Stopping the memory leak.
  componentWillUnmount() {
    this.unsubscribe();
  }

  fetchAuctions() {
    jQuery.ajax('http://silent-auctioner.herokuapp.com/auctions')
    .then( (json) => {
      this.setState({
        Loaded: true,
        auctions: json
      })
    });
  }

  //Create a function that calls the users current state and logs out
  // their session and removes their token.
  onLogout() {
    User.logout();
    this.props.history.pushState(null,'#');
  }

  render() {
    return (
      <div className="dashboard">
        <header className="head">
          <button className="logOut"
            onClick={this.onLogout}>Logout
          </button>
          <h1><Link to="/dashboard">iBid</Link></h1>
          <section className="toolBar">
            <nav className="options">
              <ul className="navBG">
                <li><Link className="tools" to="/profileEdit">{User.email}</Link></li>
                <li><Link className="tools" to="/auctions/create">Create Auction</Link></li>
              </ul>
            </nav>
          </section>
        </header>

        <ToggleDisplay show={this.state.isAuthorizedOne}>
          <aside className="appAside">
            <h2>Auctions</h2>
            <ListAuctions auctions={this.state.auctions } />
            <div className='arrow' onClick={this.toggleOne}></div>
          </aside>
        </ToggleDisplay>

        <ToggleDisplay show={this.state.isAuthorizedTwo}>
          <aside className="noAside">
            <div className='arrowDown' onClick={this.toggleTwo}><span>Expand</span></div>
          </aside>
          <div className='divSpace'></div>
        </ToggleDisplay>
        <div className="pageWrap">
          <main>
            {this.props.children}
          </main>
        </div>
      </div>
    )
  }
}

export default App;

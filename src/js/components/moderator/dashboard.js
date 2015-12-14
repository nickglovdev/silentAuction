import React from 'react';
import { Link } from 'react-router';

import setup from '../../setup'
import User from '../../models/users'
import ListAuctions from './listAuctions'

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.onLogout = this.onLogout.bind(this);
  }

  //Create a function that calls the users current state and logs out
  // their session and removes their token.
  onLogout() {
    User.logout();
    // fix this vv !! //
    window.location.href= '#'
  }
  render() {
    return (
      <div className="dashboard">
        <header>
          <h1>Aucion Silencio
            <nav className="options">
              <Link to="/createauction">Create</Link>
              <Link to="/dashboard">Current</Link>
              <Link to="#">Past</Link>
            </nav>
          </h1>
        </header>
        <aside>
          <nav className="auctionsList">
            <ul>
              <li>{this.props.title}</li>
            </ul>
          </nav>
          <footer>
            <button className="navOptions"
                    onClick={this.onLogout}>Logout</button>
          </footer>
        </aside>
        <div className="pageWrap">
          <main>
            {this.props.children}
          </main>
        </div>
      </div>
    )
  }
}

export default Dashboard;

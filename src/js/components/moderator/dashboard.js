import React from 'react';
import { Link } from 'react-router';

import setup from '../../setup'
import User from '../../models/users'
import ListAuctions from '../../models/listAuctions'
import DashboardView from './dashboardView'

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.onLogout = this.onLogout.bind(this);
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
          <h1>Aucion Silencio</h1>
            <nav className="options">
              <Link to="/createauction">Create</Link>
              <Link to="/dashboard">Current</Link>
              <Link to="#">Past</Link>
            </nav>
        </header>
        <aside>
          <ul>
            <li>
              <Link to=''>
                <ListAuctions><li></li></ListAuctions>
              </Link>
            </li>
          </ul>
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

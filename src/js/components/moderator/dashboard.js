import React from 'react';
import { Link } from 'react-router';

import setup from '../../setup'

import User from '../../models/users'

class Dashboard extends React.Component {
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
          <nav>
            <Link to="#">Auction</Link>
            <Link to="#">Auction2</Link>
          </nav>
          <footer>
            <button className="navOptions"
                    onClick={this.logout}>Logout</button>
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

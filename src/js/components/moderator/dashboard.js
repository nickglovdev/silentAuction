import React from 'react';
import { Link } from 'react-router';

class Dashboard extends React.Component {
  render() {
    return (
      <div>
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

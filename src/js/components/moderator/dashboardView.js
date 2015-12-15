import React from 'react';
import { Link } from 'react-router';

import ProfileEdit from './profileEdit';

class DashboardView extends React.Component {
  render () {
    return (
      <div className="dashboardView">
        <header className="welcome">
          <h1>Welcome to your dashboard!</h1>
          <ul>
            <li>
              <Link to="/profileEdit">Edit Profile</Link>
            </li>
          </ul>
        </header>
      </div>
    )
  }
}

export default DashboardView;

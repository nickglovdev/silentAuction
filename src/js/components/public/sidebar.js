import React from 'react';
import { Link } from 'react-router';

import Home from './public/home';

class Sidebar extends React.Component {
  render () {
    return(
      <div className="homePage">
        <aside>
          <nav>
            <Link to="register">Register</Link>
            <Link to="login">Login</Link>
            <Link to="#">Home</Link>
          </nav>
        </aside>
        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default Sidebar;

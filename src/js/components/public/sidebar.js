import React from 'react';
import { Link } from 'react-router';

import Home from './home';
import FAQ from './faq';

class Sidebar extends React.Component {
  render () {
    return(
      <div className="sidebar">
        <aside>
          <nav>
            <ul className="homeOptions">
              <li><span className="mega-octicon octicon-home"></span><Link className="navOptions" to="#">Home</Link></li>
              <li><span className="mega-octicon octicon-repo-push"></span><Link className="navOptions" to="register">Register</Link></li>
              <li><span className="mega-octicon octicon-sign-in"></span><Link className="navOptions" to="login">Login</Link></li>
              <li><span className="mega-octicon octicon-question"></span><Link className="navOptions" to="faq">FAQ</Link></li>
            </ul>
          </nav>
        </aside>
        <main className="public">
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default Sidebar;

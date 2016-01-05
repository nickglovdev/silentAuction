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
              <li><Link className="navOptions" to="#"><span className="mega-octicon octicon-home"></span>Home</Link></li>
              <li><Link id="iconFix" className="navOptions" to="register"><span className="mega-octicon octicon-repo-push"></span>Register</Link></li>
              <li><Link className="navOptions" to="login"><span className="mega-octicon octicon-sign-in"></span>Login</Link></li>
              <li><Link className="navOptions" to="faq"><span className="mega-octicon octicon-question"></span>FAQ</Link></li>
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

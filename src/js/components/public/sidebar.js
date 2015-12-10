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
            <span class="octicon octicon-home"></span><Link className="navOptions" to="register">Register</Link>
            <Link className="navOptions" to="login">Login</Link>
            <Link className="navOptions" to="faq">FAQ</Link>
            <Link className="navOptions" to="#">Home</Link>
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

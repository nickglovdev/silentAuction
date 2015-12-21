import React from 'react';
import { Link } from 'react-router';

import Home from './home';
import FAQ from './faq';

class Sidebar extends React.Component {
  render () {
    return(
      <div>
        <aside>
          <nav>
            <Link to="register">Register</Link>
            <Link to="login">Login</Link>
            <Link to="faq">FAQ</Link>
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

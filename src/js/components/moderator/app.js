import React from 'react';
import { Link } from 'react-router';

import setup from '../../setup'
import User from '../../models/users'
import ListAuctions from '../../models/listAuctions'

class App extends React.Component {
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
        </header>
        <section className="toolBar">
          <nav className="options">
            <ul className="navBG">
              <li><Link className="tools" to="/profileEdit">*Profile*</Link></li>
              <li><Link className="tools" to='/auctions/create'>Create Auction</Link></li>
            </ul>
          </nav>
        </section>
        <aside>
          <ListAuctions></ListAuctions>
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

export default App;
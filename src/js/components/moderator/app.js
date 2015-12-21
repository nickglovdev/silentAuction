import React from 'react';
import jQuery from 'jquery';
import { Link } from 'react-router';

import setup from '../../setup'
import User from '../../models/users'
import ListAuctions from '../../models/listAuctions'

class App extends React.Component {
  constructor(props) {
    super(props);

    setup(User.access_token);
    this.state = {
      Loaded: false,
      user: {
        id: '',
        email: ''
      }
    }
    this.onLogout = this.onLogout.bind(this);
  }

  // Go to our User model and run the function getProfile that lets us
  // make an ajax request to get the users info.
  componentDidMount() {
    User.getProfile();

    // Make unsubscribe equal to a function that lets us pass it down to
    // unmount the subscription after update.
    this.unsubscribe = User.subscribe(() => {
      this.forceUpdate();
    });
  }

  // Stopping the memory leak.
  componentWillUnmount() {
    this.unsubscribe();
  }

  //Create a function that calls the users current state and logs out
  // their session and removes their token.
  onLogout() {
    User.logout();
    this.props.history.pushState(null,'#');
  }

  render() {
    return ( <div className="dashboard">
        <header className="head">
          <h1>Aucion Silencio</h1>
        </header>
        <section className="toolBar">
          <nav className="options">
            <ul className="navBG">
              <li><Link className="tools" to="/profileEdit">{User.email}</Link></li>
              <li><Link className="tools" to="/auctions/create">Create Auction</Link></li>
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

import React, { PropTypes } from 'react'
import { Link } from 'react-router';

import Login from './login';
import Register from './register';

class Home extends React.Component {
  render () {
    return(
      <div className="homePage">
        <div className="homeScroll">
          <section className="siteDescription">
            <h2>iBid</h2>
            <p>The better silent auctioner. Place bids via text message,
              get notifications when you are outbid and when the auction is over.
               Moderators can view everything with real-time updates.
            </p>
          </section>
        </div>
      </div>
    )
  }
}

export default Home;

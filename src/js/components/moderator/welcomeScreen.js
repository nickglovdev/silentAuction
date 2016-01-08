import React from 'react';
import { Link } from 'react-router';

class WelcomeScreen extends React.Component {
  render () {
    return(
      <div className="welcomeScreen">
        <h1>Welcome!</h1>
        <p>Please select <Link className="tools" to="/auctions/create">Create Auction</Link> to begin.</p>
      </div>
    )
  }
}

export default WelcomeScreen;

import React from 'react';
import jQuery from 'jquery';
import {Link} from 'react-router';

import setup from '../setup'
import User from './users'

class ListAuctions extends React.Component {
  constructor(props){
    super(props);
    // fix this vv //
    setup(User.access_token);
    this.state = {
      Loaded: false,
      auction: []
    }
  }

  componentDidMount() {
    jQuery.ajax('http://silent-auctioner.herokuapp.com/auctions')
          .then( (json) => {
            this.setState({
              Loaded: true,
              auction: json
            })
          });
  }


  render () {
    return( //returns a map of all the auctions for the current user
      <nav className="auctionList">
        {this.state.auction.map(auction => {
          let link = "/auctions/" + auction.id;
          return <div key={auction.id}
                        auction={auction}>
                        <Link to={link}>{auction.title}</Link>
                </div>
        })}
      </nav>

    )
  }
}

export default ListAuctions;
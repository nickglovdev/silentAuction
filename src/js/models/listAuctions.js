import React from 'react';
import jQuery from 'jquery';

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
    console.log(this.state.auction)
    return( //returns a map of all the auctions for the current user
      <nav className="auctionList">
        {this.state.auction.map(auction => {
          return <div key={auction.id}
                        auction={auction}>
                        {auction.title}
                </div>
        })}
      </nav>

    )
  }
}

export default ListAuctions;

import React from 'react';
import jQuery from 'jquery';
import {Link} from 'react-router';


class ListAuctions extends React.Component {
  render () {
    let auctions = this.props.auctions.map(auction => {
        let link = "/auctions/" + auction.id;
        return <div key={auction.id}
                  auction={auction}>
                  <Link to={link}>{auction.title}</Link>
              </div>
      })
    return( //returns a map of all the auctions for the current user
      <nav className="auctionList">
        {auctions.sort().reverse()}
      </nav>
    )
  }
}

export default ListAuctions;

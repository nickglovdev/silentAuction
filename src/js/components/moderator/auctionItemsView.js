import React, { PropTypes } from 'react'
import { Link } from 'react-router';

import setup from '../../setup'
import User from '../../models/users'

import ListItems from '../../models/ListItems'
import AuctionEdit from './auctionEdit'

class AuctionsItemView extends React.Component {
  constructor(props) {
    super(props)
    setup(User.access_token)
    this.state = {
      loaded: false,
      item: []
    }
  }

  render () {
    let id = this.props.params.id; //grabs our id from params
    // the ${id} below is getting it's information from this

    return(
      <section className="dashboardItem">
        <header className="itemViewHeader">
          <Link to={`/auctions/${id}/edit`}>Edit Auction</Link>
          <h3>Guest View Url</h3>
          <input type="text" value="Test"/>
          <button>Copy URL</button>
        </header>
        <Link to={`/auctions/${id}/items`}>Add Items</Link>
        <Link to={`/auctions/${id}/items/${id}/edit`}>Edit Items</Link>
        <ListItems id={this.props.params.id}></ListItems>
        {/* id in this is setting the params for listitems */}
      </section>
    )
  }
}

export default AuctionsItemView;

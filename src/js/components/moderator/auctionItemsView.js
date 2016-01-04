import React, { PropTypes } from 'react'
import { Link } from 'react-router';
import $ from 'jQuery';
import ClipboardButton from 'react-clipboard.js';

import setup from '../../setup'
import User from '../../models/users'
import ListItems from './listItems'
import AuctionEdit from './auctionEdit'
import PublicView from './publicView'

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


          <Link to={`/publicView`}>*Public View*</Link>

          <input id='publicURL' type="text" value={`http://localhost:8000/#/public/auctions/${id}/items`} readOnly/>
          <ClipboardButton data-clipboard-text={`http://localhost:8000/#/public/auctions/${id}/items`}>
            copy to clipboard
          </ClipboardButton>

        </header>
        <Link to={`/auctions/${id}/items`}>Add Items</Link>
        <ListItems id={this.props.params.id}></ListItems>
        {/* id in this is setting the params for listitems */}
      </section>
    )
  }
}

export default AuctionsItemView;

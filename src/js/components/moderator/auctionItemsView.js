import React, { PropTypes } from 'react'
import { Link } from 'react-router';
import jQuery from 'jQuery';
import ClipboardButton from 'react-clipboard.js';

import setup from '../../setup'
import User from '../../models/users'
import ListItems from './listItems'
import AuctionEdit from './auctionEdit'
import PublicView from './publicView'

class AuctionsItemView extends React.Component {
  constructor(props) {
    super(props)
    setup(User.access_token);
    this.state = {
      loaded: false,
      item: []
    }
    this.handleAuctionDelete = this.handleAuctionDelete.bind(this)
    this.handleAuctionOpen = this.handleAuctionOpen.bind(this)
    this.handleAuctionClose = this.handleAuctionClose.bind(this)
  }

  handleAuctionDelete(event){
    event.preventDefault();
    let id = this.props.params.id;

    let self = this;
    let options = {
      method:'DELETE',
      headers: {
        'Authorization': 'Bearer ' + User.access_token
      }
    }

    jQuery.ajax('http://silent-auctioner.herokuapp.com/auctions/' + id, options)
    .then(function(response){
      console.log(response)
      self.props.history.pushState(null,'/dashboard');
    });
  };


  handleAuctionOpen(event) {
    event.preventDefault()
    let auction = {
      state: 'open'
    }
    console.log(auction)

    let id = this.props.params.id;

    let self = this;
    let options = {
      method:'PATCH',
      data: {
        auction: auction
      },
      headers: {
        'Authorization': 'Bearer ' + User.access_token
      }
    }

    jQuery.ajax('http://silent-auctioner.herokuapp.com/auctions/' + id + '/change_state', options)
    .then(function(response){
      console.log(response)
      self.props.history.pushState(null,'/dashboard');
    });
  };

  handleAuctionClose(event) {
    event.preventDefault()
    let auction = {
      title: this.refs.title,
      company: this.refs.company,
      location: this.refs.location,
      time: this.refs.time,
      date: this.refs.date,
      contact: this.refs.contact
    }
    console.log(auction)

    let id = this.props.params.id;

    let self = this;
    let options = {
      method:'POST',
      data: {
        auction: auction
      },
      headers: {
        'Authorization': 'Bearer ' + User.access_token
      }
    }

    jQuery.ajax('http://silent-auctioner.herokuapp.com/auctions/' + id + '/close_auction', options)
    .then(function(response){
      console.log(response)
      self.props.history.pushState(null,'/dashboard');
    });
  };

  render () {
    let id = this.props.params.id; //grabs our id from params
    // the ${id} below is getting it's information from this
    return(
      <section className="dashboardItem">
        <header className="itemViewHeader">

          <Link to={`/auctions/${id}/edit`}>Edit Auction</Link>

          <h3>Auction View</h3>

          <div className="statusOpen">
            <button className="auctionStatusOpen" onClick={this.handleAuctionOpen}>Open</button>
            <button className="auctionStatusClose" onClick={this.handleAuctionClose}>Close</button>
            <button className="auctionStatusDelete" onClick={this.handleAuctionDelete}>Delete</button>
          </div>

          <Link to={`/publicView`}>Public View</Link>
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

import React, { PropTypes } from 'react'
import { Link } from 'react-router';
import jQuery from 'jQuery';
import ClipboardButton from 'react-clipboard.js';
import ToggleDisplay from 'react-toggle-display';

import setup from '../../setup'
import User from '../../models/users'
import ListItems from './listItems'
import AuctionEdit from './auctionEdit'
import publicListItems from './publicListItem'

class AuctionsItemView extends React.Component {
  constructor(props) {
    super(props)
    setup(User.access_token);
    this.state = {
      loaded: false,
      item: [],
      isAuthorizedOne: false,
      isAuthorizedTwo: true
    }
    this.statusOpen = this.statusOpen.bind(this)
    this.statusClosed = this.statusClosed.bind(this)
    this.handleAuctionDelete = this.handleAuctionDelete.bind(this)
    this.handleAuctionOpen = this.handleAuctionOpen.bind(this)
    this.handleAuctionClose = this.handleAuctionClose.bind(this)
  }
  statusOpen(){
    this.setState({
      isAuthorizedOne: true,
      isAuthorizedTwo: false
    })
  }
  statusClosed(){
    this.setState({
      isAuthorizedOne: false,
      isAuthorizedTwo: true
    })
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
      alert('This Auction is now open.')
      console.log(response)
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
      alert('This Auction is now closed.')
      self.props.history.pushState(null,'/dashboard');
    });
  };

  render () {
    let id = this.props.params.id; //grabs our id from params
    // the ${id} below is getting it's information from this
    return(
      <section className="dashboardItem">
        <header className="itemViewHeader">

          <div className="clipboard">
            <ClipboardButton data-clipboard-text={`http://localhost:8000/#/public/auctions/${id}`}>
              Copy Public URL
            </ClipboardButton>
            <input id='publicURL' type="text" value={`http://localhost:8000/#/public/auctions/${id}`} readOnly/>
          </div>

          <h3>Manage Auction</h3>

          <button className="viewbtns"><Link to={`/auctions/${id}/edit`}>Edit Auction</Link></button>
          <button className="viewbtns"><Link to={`/public/auctions/${id}`}>Public View</Link></button>

          <div className="statusOpen">
            <button className="auctionStatusOpen" onClick={this.handleAuctionOpen} onClick={this.statusOpen}>Start</button>
            <button className="auctionStatusClose" onClick={this.handleAuctionClose} onClick={this.statusClosed}>End</button>
            <button className="auctionStatusDelete" onClick={this.handleAuctionDelete}>Delete</button>
          </div>
          <section className="currentStatus">
            <h4>Current Auction Status</h4>
              <ToggleDisplay show={this.state.isAuthorizedOne}>
                <p className='auctionStarted'>Started</p>
              </ToggleDisplay>
              <ToggleDisplay show={this.state.isAuthorizedTwo}>
                <p className='auctionEnded'>Ended</p>
              </ToggleDisplay>
          </section>
        </header>
        <span className="addItems"><Link to={`/auctions/${id}/items`}>Add Items</Link></span>
        <ListItems id={this.props.params.id}></ListItems>
        {/* id in this is setting the params for listitems */}
      </section>
    )
  }
}

export default AuctionsItemView;

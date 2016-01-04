import React from 'react'
import jQuery from 'jquery';

import setup from '../../setup'
import User from '../../models/users'

class AuctionEdit extends React.Component {
  constructor(props) {
    super(props);
    setup(User.access_token);
    this.handleAuction = this.handleAuction.bind(this)
  }

  handleAuction(event){
    event.preventDefault()
    let auction = {
        title: this.refs.title.value,
      company: this.refs.company.value,
     location: this.refs.location.value,
         time: this.refs.time.value,
         date: this.refs.date.value,
      contact: this.refs.contact.value
    }
    console.log(auction)

    if(auction.title && auction.company && auction.location
      && auction.time && auction.date && auction.contact){
      console.log(auction.title);
    } else{
      console.log('Problemo')
    }

    let id = this.props.params.id;

    let self = this;
    let options = {
      method:'PATCH',
      data: {
          auction: auction
      }
    }

    jQuery.ajax('http://silent-auctioner.herokuapp.com/auctions/' + id, options)
      .then(function(response){
        console.log(response)
        self.props.history.pushState(null,'/dashboard');
      });
  };

  render () {
    return(
      <div className="auctionEdit">
        <h1>Edit Auction</h1>
        <section className="auctionFormLeft">
          <h3>Auction Name</h3>
            <input type='text' ref='title' placeholder='(MaxChar:16)' maxLength="16"></input>
          <h3>Company/Organization Name</h3>
            <input type='text' ref='company' placeholder='(MaxChar:16)' maxLength="16"></input>
          <h3>Event Location</h3>
            <input type='text' ref="location" placeholder='(MaxChar:16)' maxLength="16"></input>
        </section>
        <section className="auctionFormRight">
          <h3>Date of Event</h3>
            <input ref='time' type='date'></input>
          <h3>Time of Event</h3>
            <input ref='date' type='time'></input>
          <h3>Phone Number</h3>
            <input type='text' ref="contact" placeholder='ex (615) 555-5555' maxLength="14"></input>
          <button className="auctionCreateBtn" onClick={this.handleAuction}>Save</button>
        </section>
      </div>
    )
  }

}

export default AuctionEdit;

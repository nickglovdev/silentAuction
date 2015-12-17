import React from 'react'

import setup from '../../setup'
import User from '../../models/users'

class AuctionEdit extends React.Component {
  render () {
    return(
      <div className="auctionEdit">
        <h1>Edit Auction</h1>
        <section className="auctionFormLeft">
          <h3>Auction Name</h3>
            <input type='text' ref='title' placeholder='Auction Title'></input>
          <h3>Company/Organization Name</h3>
            <input type='text' ref='company' placeholder='Company/Organization Name'></input>
          <h3>Event Location</h3>
            <input type='text' ref="location" placeholder='Location'></input>
        </section>
        <section className="auctionFormRight">
          <h3>Date of Event</h3>
            <input ref='time' type='date'></input>
          <h3>Time of Event</h3>
            <input ref='date' type='time'></input>
          <h3>Phone Number</h3>
            <input type='text' ref="contact" placeholder='Phone Number'></input>
          <button className="auctionCreateBtn" onClick={this.handleAuction}>Save</button>
        </section>
      </div>
    )
  }
}

export default AuctionEdit;

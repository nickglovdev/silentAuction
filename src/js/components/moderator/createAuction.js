import React, { PropTypes } from 'react'

class CreateAuction extends React.Component {
  render () {
    return(
      <div className="auctionCreate">
        <h1>Create Auction</h1>
        <section className="auctionFormLeft">
          <h3>Auction Name</h3>
            <input type='text' placeholder='Auction Title'></input>
          <h3>Company/Organization Name</h3>
            <input type='text' placeholder='Auction Title'></input>
          <h3>Event Location</h3>
            <input type='text' placeholder='Auction Title'></input>
        </section>
        <section className="auctionFormRight">
          <h3>Date of Event</h3>
            <input type='date'></input>
          <h3>Time of Event</h3>
            <input type='time'></input>
          <button className="auctionCreateBtn">Submit</button>
        </section>
      </div>
    )
  }
}

export default CreateAuction;

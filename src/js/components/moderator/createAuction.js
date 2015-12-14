import React, { PropTypes } from 'react'
import $ from 'jquery';

class CreateAuction extends React.Component {
  constructor(props) {
    super(props);

    this.handleAuction = this.handleAuction.bind(this)
  }

  handleAuction(event){
    event.preventDefault()
    //Setting all of my data to an object called auction
    let auction = {
      title: this.refs.title.value,
      company: this.refs.company.value,
      location: this.refs.location.value,
      time: this.refs.time.value,
      date: this.refs.date.value,
      contact: this.refs.contact.value
    }
    console.log(auction)

  if(auction.title && auction.company && auction.locaton && auction.time && auction.date && auction.contact){
    console.log('success');
    //Call the SaveAuction function and passit the auction object
    this.saveAuction(auction);
  } else{
    console.log('Problemo')
    this.saveAuction(auction);
  }
}

saveAuction(auction){
  let options = {
    method:'POST',
    data: {
        auction: auction
    }
  };
  //Passing our data to the servers
  $.ajax('http://silent-auctioner.herokuapp.com/auctions', options)
    .then(function(response){
      console.log(response)
      window.location.href= '#/dashboard'
    });
}
  render () {
    return(
      <div className="auctionCreate">
        <h1>Create Auction</h1>
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
          <button className="auctionCreateBtn" onClick={this.handleAuction}>Submit</button>
        </section>
      </div>
    )
  }
}

export default CreateAuction;

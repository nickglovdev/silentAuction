import React, { PropTypes } from 'react'
import $ from 'jquery';

class CreateAuction extends React.Component {
  constructor(props) {
    super(props);

    this.handleAuction = this.handleAuction.bind(this)
  }

  handleAuction(event){
    event.preventDefault()

    let title = this.refs.title;
    let company = this.refs.company;
    let location = this.refs.location;
    let time = this.refs.time;
    let date = this.refs.date;
    let contact = this.refs.contact;


  if(title && company && location && time && date && contact){
    console.log('success')
  } else{
    console.log('Problemo')
  }
}

saveAuction(auction){
  let options = {
    method:'POST',
    data: {
      title: title,
      company: company,
      location: location,
      time: time,
      date: date,
      contact:contact
    }
  };
  //Passing our data to the servers
  $.ajax('http://silen-auctioner.herokuapp.com/auctions', options)
    .then(function(response){
      this.props.handleAdd(response);
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

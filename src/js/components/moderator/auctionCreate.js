import React from 'react'
import $ from 'jquery';

import setup from '../../setup'
import User from '../../models/users'

class AuctionCreate extends React.Component {
  constructor(props) {
    super(props);

    setup(User.access_token);
    this.handleAuction = this.handleAuction.bind(this)
  }

  //Our Event handler
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

    //Checking to make sure all the fields are filled
    if(auction.title && auction.company && auction.location
      && auction.time && auction.date && auction.contact){
      console.log(auction.title);
      //Call the SaveAuction function and pasit the auction object
      this.saveAuction(auction);
    } else{
      console.log('Problemo')
    }
  };

  saveAuction(auction){
    let self = this;
    let options = {
      method:'POST',
      data: {
          //The first auction is how it looks like in the API and the second
          // one is call the auction from this.saveAuction(auction).
          // the auction in saveAuction function come from handleAuction.
          auction: auction
      }
    }
    //Passing our data to the servers
    $.ajax('http://silent-auctioner.herokuapp.com/auctions', options)
      .then(function(response){
        console.log(response)
        self.props.history.pushState(null,'/dashboard');
      });
  }
    render () {
      return(
        <div className="homePage">
          <div className="auctionCreate">
            <h1>Create Auction</h1>
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
              <button className="auctionCreateBtn" onClick={this.handleAuction}>Submit</button>
            </section>
          </div>
        </div>
      )
    }
  }

export default AuctionCreate;

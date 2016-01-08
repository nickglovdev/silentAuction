import React, { PropTypes } from 'react'
import { Link } from 'react-router';
import $ from 'jQuery';
import ClipboardButton from 'react-clipboard.js';

import setup from '../../setup'
import User from '../../models/users'

class publicViewIndividualItems extends React.Component {
  constructor(props) {
    super(props)
    setup(User.access_token)
    this.state = {
      loaded: false,
      item: {bids: []}
    }
    this.fetchItems = this.fetchItems.bind(this);
  }

  fetchItems(auctionId, itemId) {
    $.ajax('http://silent-auctioner.herokuapp.com/auctions/'+ auctionId + '/items/' + itemId) //used this.props.id to get the id. the this.props.params.id is on dashboarditemview
     .then( (response) => {
        this.setState({
         loaded: true,
         item: response
        })
     });
  }


  //Grabbing our auction id and item id from our params. Then we are passing them into fetchItems as options.
  componentDidMount(hello) {
    this.fetchItems(this.props.params.id, this.props.params.itemId);
    this.interval = setInterval( () => {
      this.fetchItems(this.props.params.id, this.props.params.itemId)
    }, 5000);
    }

  componentWillUnmount(){
    clearInterval(this.interval);
  }

  render() {
    let id = this.props.params.id;
    let itemId =this.props.params.itemId
    let bids = this.state.item.bids.map(bid => {
      return <div key={bid.id} bid={bid}>
            ${bid.amount}
           </div>
    });
    let guests = this.state.item.bids.map(bid => {
      return <div key={bid.id} bid={bid}>
            #{bid.guest_id}
           </div>
    });
    return(
      <div className="individualItemWrap2">
        <section className='individualItemView2'>
          <h1>{this.state.item.name}</h1>
          <img  src={this.state.item.image_url}/>

          <div className="itemDescriptionWrap">
            <article className="itemDescription"><h4>Description</h4>{this.state.item.description}</article>
            <article className="itemDescription2"><h4>Starting Bid</h4>${this.state.item.starting_bid}</article>
          </div>
        </section>
      </div>
    )

  }
}

export default publicViewIndividualItems;

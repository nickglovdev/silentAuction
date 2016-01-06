import React, { PropTypes } from 'react'
import { Link } from 'react-router';
import $ from 'jQuery';
import ClipboardButton from 'react-clipboard.js';

import setup from '../../setup'
import User from '../../models/users'
import publicListItems from './publicListItem'

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
            {bid.amount}
           </div>
    });
    return(
      <section className='individualItemView'>
        <h1>{this.state.item.name}</h1>
        <img  src={this.state.item.image_url}/>
        {this.state.item.description}
        {this.state.item.starting_bid}
        {bids.sort().reverse()}
      </section>
    )

  }
}

export default publicViewIndividualItems;

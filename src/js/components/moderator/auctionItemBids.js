import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';

import setup from './../../setup'
import User from './../../models/users'


class AuctionItemBids extends React.Component {
  constructor(props) {
    super(props)
    setup(User.access_token)
    this.state = {
      loaded: false,
      bids: {}
    }
    this.fetchItems = this.fetchItems.bind(this);
  }

  fetchItems(auctionId, itemId) {
    $.ajax('http://silent-auctioner.herokuapp.com/auctions/'+ auctionId + '/items/' + itemId + '/bids') //used this.props.id to get the id. the this.props.params.id is on dashboarditemview
     .then( (response) => {
        this.setState({
         loaded: true,
         bids: response
        })
     });
  }

  componentWillReceiveProps(nextProps){
    this.fetchItems(nextProps.params.id, nextProps.params.itemId);
  }

  //Grabbing our auction id and item id from our params. Then we are passing them into fetchItems as options.
  componentDidMount(hello) {
    this.fetchItems(this.props.params.id, this.props.params.itemId);
  }

  render() {
    console.log(this.props.id)
    return(
      <section className='individualItemView'>
        {this.state.bids.map(bids =>{
          return <div key={bids.id} bids={bids}>
                      {bids.amount}
                </div>
        })}

      </section>
    )
  }
}

export default AuctionItemBids;

import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';

import setup from './../../setup'
import User from './../../models/users'
import AuctionItemBids from './auctionitemBids'


class IndividualItemView extends React.Component {
  constructor(props) {
    super(props)
    setup(User.access_token)
    this.state = {
      loaded: false,
      item: {}
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

  componentWillReceiveProps(nextProps){
    this.fetchItems(nextProps.params.id, nextProps.params.itemId);
  }

  //Grabbing our auction id and item id from our params. Then we are passing them into fetchItems as options.
  componentDidMount(hello) {
    this.fetchItems(this.props.params.id, this.props.params.itemId);
  }

  render() {
    return(
      <section className='individualItemView'>
        <h1>{this.state.item.name}</h1>
        <img  src={this.state.item.image_url}/>
        {this.state.item.description}

        <AuctionItemBids id={this.props.params.id}></AuctionItemBids>
      </section>
    )
  }
}

export default IndividualItemView;

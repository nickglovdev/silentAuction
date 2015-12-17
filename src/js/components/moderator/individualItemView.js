import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';

import setup from './../../setup'
import User from './../../models/users'


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

  componentDidMount(hello) {
    this.fetchItems(this.props.params.id, this.props.params.itemId);
  }

  render() {
    return(
      <section className='individualItemView'>
        <h1>{this.state.item.name}</h1>
        <img  src={this.state.item.image_url}/>
        {this.state.item.description}
        {this.state.item.starting_bid}
      </section>
    )
  }
}

export default IndividualItemView;

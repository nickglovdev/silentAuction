import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router'

import setup from './../../setup'
import User from './../../models/users'

class IndividualItemView extends React.Component {
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

  componentWillReceiveProps(nextProps){
    this.fetchItems(nextProps.id, nextProps.itemId);
  }


  //Grabbing our auction id and item id from our params. Then we are passing them into fetchItems as options.
  componentDidMount(hello) {
    this.fetchItems(this.props.params.id, this.props.params.itemId);
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
      <Link to={`/auctions/${id}/items/${itemId}/edit`}>Edit Items</Link>
        <h1>{this.state.item.name}</h1>
        <Link to='#'>Edit Item</Link>
        <img  src={this.state.item.image_url}/>
        {this.state.item.description}
        {this.state.item.starting_bid}
        {bids.sort().reverse()}

      </section>
    )
  }
}

export default IndividualItemView;

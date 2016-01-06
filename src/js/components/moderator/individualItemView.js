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
    this.handleItemDelete = this.handleItemDelete.bind(this)
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

  handleItemDelete(event){
    event.preventDefault();
    let id = this.props.params.itemId;

    let self = this;
    let options = {
      method:'DELETE',
      headers: {
        'Authorization': 'Bearer ' + User.access_token
      }
    }

    $.ajax('http://silent-auctioner.herokuapp.com/items/' + id, options)
    .then(function(response){
      console.log(response)
      self.props.history.pushState(null,'/dashboard');
    });
  };

  render() {
    let id = this.props.params.id;
    let itemId =this.props.params.itemId
    let bids = this.state.item.bids.map(bid => {
      return <div key={bid.id} bid={bid}>
            {bid.amount}
           </div>
    });
    return( <div className="individualItemWrap">
      <section className='individualItemView'>
        <h1>{this.state.item.name}</h1>
        <Link to={`/auctions/${id}/items/${itemId}/edit`}>Edit Item</Link>
        <button className="auctionItemDelete" onClick={this.handleItemDelete}>Delete</button>
        <img  src={this.state.item.image_url}/>
        {this.state.item.description}
        {this.state.item.starting_bid}
        {bids.sort().reverse()}

      </section>
    </div>
    )
  }
}

export default IndividualItemView;

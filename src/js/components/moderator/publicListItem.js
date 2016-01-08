import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';
import moment from 'moment';

import setup from './../../setup'
import User from './../../models/users'

class PublicListItems extends React.Component {
  constructor(props) {
    super(props)
    setup(User.access_token)
    this.state = {
      loaded: false,
      item: []
    }
    this.fetchItems = this.fetchItems.bind(this);
  }

  fetchItems(nextId) {
    nextId = nextId || this.props.id
    $.ajax('http://silent-auctioner.herokuapp.com/auctions/'+ nextId + '/items') //used this.props.id to get the id. the this.props.params.id is on dashboarditemview
     .then( (response) => {
        this.setState({
         loaded: true,
         item: response,
         itemBids: response
        })
     });
  }

  componentWillReceiveProps(nextProps){
    this.fetchItems(nextProps.id);
  }

  componentDidMount(hello) {
    this.fetchItems(this.props.id);
    this.interval = setInterval( () => {
      this.fetchItems(this.fetchItems(this.props.id))
    }, 5000);
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }

  render() {
    //For individual auction information
    let items = this.state.item.map(item => {
      console.log(item)
      return <div className='listItem' key= {item.id} item={item}>
        <div className="companyWrap">
          <ul>
            <li><h4>Title:{item.auction.title}</h4></li>
            <li><h4>Host: {item.auction.company}</h4></li>
            <li><h4>Phone Number: {item.auction.contact}</h4></li>
          </ul>
          <div className="companyWrap2">
            <ul>
              <li><h4>Date: {moment(item.auction.time, 'YYYY-MM-DD').format('MMM-D-YYYY')}</h4></li>
              <li><h4>Time: {moment(item.auction.date, 'HH:mm' ).format('h:mm a')}</h4></li>
              <li><h4>Location: {item.auction.location}</h4></li>
            </ul>
          </div>
        </div>

              <Link to={`/public/auctions/${this.props.id}/items/${item.id}`}>
                <h2>{item.name}</h2>
                <img  src={item.image_url}/>
              </Link>
              <h3>Description</h3>
              <div className='itemsDescriptions'>{item.description}</div>
              <h3>Starting Bid</h3><p>${item.starting_bid}</p>
              <h3>Current Highest Bid</h3><p>${item.current_bid}</p>
            </div>
    });
    return (
      <section className='itemList'>
        {items}
      </section>
    )
  }
}

export default PublicListItems;

import React from 'react';
import $ from 'jquery';
import {link} from 'react-router'

import setup from '../setup'
import User from './users'


class ListItems extends React.Component {
  constructor(props) {
    super(props)
    setup(User.access_token)
    this.state = {
      loaded: false,
      item: []
    }
    this.fetchItems = this.fetchItems.bind(this);
  }

  fetchItems() {
    $.ajax('http://silent-auctioner.herokuapp.com/auctions/'+ this.props.id + '/items') //used this.props.id to get the id. the this.props.params.id is on dashboarditemview
     .then( (response) => {
        this.setState({
         loaded: true,
         item: response
        })
     });
  }

  componentWillReceiveProps(){
    this.fetchItems();
  }

  componentDidMount(hello) {
    this.fetchItems();
  }

  render() {
    return(
      <section className='itemList'>
        {this.state.item.map(item => {
          return <div key= {item.id} item={item}>
                    <a href="#">ROUTE THIS TO ITEM -- NEEDS EDIT{item.name}</a>
                    {item.description}
                    {item.starting_bid}
                  <img  src={item.image_url}/>
                </div>
        })}
      </section>
    )
  }
}

export default ListItems;

import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';

import setup from './../../setup'
import User from './../../models/users'

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

  fetchItems(nextId) {
    nextId = nextId || this.props.id
    $.ajax('http://silent-auctioner.herokuapp.com/auctions/'+ nextId + '/items') //used this.props.id to get the id. the this.props.params.id is on dashboarditemview
     .then( (response) => {
        this.setState({
         loaded: true,
         item: response
        })
     });
  }

  componentWillReceiveProps(nextProps){
    this.fetchItems(nextProps.id); // Having it check for the
  }

  componentDidMount(hello) {
    this.fetchItems(this.props.id);
  }

  render() {
    let items = this.state.item.map(item => {
      return <div key= {item.id} item={item}>
              <Link to={`/auctions/${this.props.id}/items/${item.id}`}>
                <img  src={item.image_url}/>
                {item.name}
              </Link>
              {item.description}
              {item.starting_bid}
            </div>
      });

    return(
      <section className='itemList'>
        {items}
      </section>
    )
  }
}

export default ListItems;

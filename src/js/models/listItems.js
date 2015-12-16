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

    }

    componentDidMount(hello) {
       $.ajax('http://520a8a75.ngrok.io/auctions/'+ this.props.id + '/items')
       // used this.props.id to get the id. the this.props.params.id is
       // on dashboarditemview
        .then( (response) => {
           this.setState({
            loaded: true,
            item: response
           })
         });
    }

    render() {
      return(
        <section className='itemList'>
          {this.state.item.map(item => {
            return <div key= {item.id} item={item}>
                      {item.name}
                      {item.description}
                      {item.starting_bid}
                  </div>
          })}
        </section>
      )
    }
}

export default ListItems;

import React from 'react'
import $ from 'jquery'
import filepicker from 'filepicker-js'

import setup from '../../setup'
import User from '../../models/users'

class CreateItem extends React.Component {
  constructor(props) {
    super(props)

    setup(User.access_token);
    this.handleItem = this.handleItem.bind(this)
  }


  componentDidMount() {
    this.refs.filepicker.addEventListener('change', filepickerdata => {
      console.log(filepickerdata.fpfile.url);
    })
  }
  componentWillUnmount() {
    this.refs.filepicker.removeEventListener('change', filepickerdata => {
      console.log(filepickerdata.fpfile.url);
    })
  }

  handleItem(event){
    event.preventDefault()

    let item = {
      name: this.refs.name.value,
      description: this.refs.description.value,
      starting_bid: this.refs.bid.value
    }
    console.log(filepickerdata.fpfile.url)

    if(item.name && item.description && item.starting_bid){
      this.saveItem(item)
      console.log('Successo')
    } else {
      console.log('Problemo')
    }
  }

  saveItem(item){
    let id = this.props.params.id; //Assigning the id from params to id
    let options = {
      method: 'POST',
      data: {
        item: item
      }
    }

    $.ajax(`http://silent-auctioner.herokuapp.com/auctions/${id}/items`, options)
      .then((response) => {
        console.log(response)
        this.props.history.pushState(null,'/dashboard');
      });
  }

  render () {
    return (
      <section className="auctionCreateItem">
        <h1>Add Items </h1>

        <section className="itemForm">

          <h3>Item Name:</h3>
          <input type='text' placeholder="Item Name" ref="name"/>

          <h3>Description:</h3>
          <input type='text' placeholder='Item Description' ref="description"/>

          <h3>Starting Price</h3>
          <input type='text' placeholder='Starting Price' ref="bid"/>

        <h3>Add Photo</h3>
          <input type="filepicker"
                 ref="filepicker"
                 data-fp-apikey="AUvdBf1ynT0STNVd104jSz"/>
        </section>


        <button onClick={this.handleItem}>Submit</button>
      </section>
    )
  }
}

export default CreateItem;

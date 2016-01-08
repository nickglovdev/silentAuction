import React from 'react'
import $ from 'jquery'
import filepicker from 'filepicker-js'

import setup from '../../setup'
import User from '../../models/users'

class AuctionItemAdd extends React.Component {
  constructor(props) {
    super(props)
    this.state={} // Setting state to be an empty object so we can pass in a url
    setup(User.access_token);
    this.handleItem = this.handleItem.bind(this)
    this.handleImageUpload = this.handleImageUpload.bind(this)
  }

  componentDidMount() {
    filepicker.constructWidget(this.refs.filepicker)
    if (this.refs.filepicker.style['display'] !== 'none') {
      filepicker.constructWidget(this.refs.filepicker);
    }
    this.refs.filepicker.addEventListener('change', this.handleImageUpload);
  }

  componentWillUnmount() {
    this.refs.filepicker.removeEventListener('change', this.handleImageUpload);
  }

  handleImageUpload(filepickerdata) {
    this.setState({image_url: filepickerdata.fpfile.url })
  }

  handleItem(event) {
    event.preventDefault();

    let item = {
      name: this.refs.name.value,
      description: this.refs.description.value,
      starting_bid: this.refs.bid.value,
      image_url: this.state.image_url
    }

    if(item.name && item.description && item.starting_bid && item.image_url){
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
        alert('item added.')
      });
  }

  render () {
    return (
      <section className="auctionCreateItem">
        <h1>Add Item</h1>
          <section className="itemForm">
            <h3>Item Name:</h3>
              <input type='text' placeholder="Item Name" ref="name"/>
            <h3>Description:</h3>
              <input className="itemDescription3" type='text' placeholder='Item Description' ref="description" maxLength="800"/>
            <h3>Starting Price</h3>
              <input type='number' placeholder='Starting Price' ref="bid"/>
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

export default AuctionItemAdd;

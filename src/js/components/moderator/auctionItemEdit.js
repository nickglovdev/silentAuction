import React from 'react'
import jQuery from 'jquery'

import setup from '../../setup'
import User from '../../models/users'

class AuctionItemEdit extends React.Component {
  constructor(props) {
    super(props)
    this.state={} // Setting state to be an empty object so we can pass in a url
    setup(User.access_token);
    this.updateItem = this.updateItem.bind(this)
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

  updateItem(event) {
    event.preventDefault();
    let item = {
      name: this.refs.name.value,
      description: this.refs.description.value,
      starting_bid: this.refs.bid.value,
      image_url: this.state.image_url
    }

    if(item.name && item.description && item.starting_bid && item.image_url){
      console.log(item.name);
    } else {
      alert('there was an error updating this item.')
    }

    let id = this.props.params.itemId;

    let self = this;
    let options = {
      method: 'PATCH',
      data: {
        item: item
      }
    }


    jQuery.ajax('http://silent-auctioner.herokuapp.com/items/' + id, options)
      .then(function(response) {
        console.log(response)
        self.props.history.pushState(null,'/dashboard');
        alert('item added.')
      });
  }


  render () {
    //Inside the inputs for this section should be the last infomration
    //That the user put into it.
    return (
      <section className="auctionCreateItem">
        <h1>Edit Item</h1>
          <section className="itemForm">
            <h3>Item Name:</h3>
              <input type='text' placeholder="Item Name" ref="name"/>
            <h3>Description:</h3>
              <input type='text' placeholder='Item Description' ref="description"/>
            <h3>Starting Price</h3>
              <input type='number' placeholder='Starting Price' ref="bid"/>
            <h3>Add Photo</h3>
            <input type="filepicker"
                   ref="filepicker"
                   data-fp-apikey="AUvdBf1ynT0STNVd104jSz"/>
          </section>
        <button onClick={this.updateItem}>Submit</button>
      </section>
    )
  }
}

export default AuctionItemEdit;

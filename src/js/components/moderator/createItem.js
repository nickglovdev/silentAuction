import React, { PropTypes } from 'react'

class CreateItem extends React.Component {
  render () {
    return (
      <section>
        <h1>Add Items</h1>

        <section className="itemForm">
          <img src='http://placecage.com/c/200/200'/>

          <h3>Item Name:</h3>
          <input type='text' placeholder="Item Name"  />

          <h3>Description:</h3>
          <input type='text' placeholder='Item Description' />

          <h3>Starting Price</h3>
          <input type='text' placeholder='Starting Price' />
        </section>

        <button>Submit</button>
      </section>
    )
  }
}

export default CreateItem;

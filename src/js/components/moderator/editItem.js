import React, { PropTypes } from 'react'

class EditItem extends React.Component {
  render () {
    //Inside the inputs for this section should be the last infomration
    //That the user put into it.
    return(
      <section>

        <h1>Edit Items</h1>

        <section className="itemForm">
          <img src='http://placecage.com/c/200/200'/>

          <h3>Item Name:</h3>
          <input type='text' placeholder="Item Name"  />

          <h3>Description:</h3>
          <input type='text' placeholder='Item Description' />

          <h3>Starting Price</h3>
          <input type='text' placeholder='Starting Price' />
          <button>Submit Changes</button>
        </section>

      </section>
    )
  }
}

export default EditItem;

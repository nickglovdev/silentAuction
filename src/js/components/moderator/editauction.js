import React, { PropTypes } from 'react'

class EditAuction extends React.Component {
  render () {
    //When a moderator goes to this page. All the fills will have the older
    //Information already in the input areas
    return(
      <div>
        <h1>Create Auction</h1><br />

        <h3>Auction Name</h3><br />
        <input type='text' placeholder='Auction Title'></input>

        <h3>Company/Organization Name</h3>
        <input type='text' placeholder='Auction Title'></input>

        <h3>Event Location</h3>
        <input type='text' placeholder='Auction Title'></input>

        <h3>Date of Event</h3>
        <input type='date'></input>

        <h3>Time of Event</h3>
        <input type='time'></input><br />

        <button>Submit Changes</button>
      </div>
    )
  }
}

export default EditAuction;

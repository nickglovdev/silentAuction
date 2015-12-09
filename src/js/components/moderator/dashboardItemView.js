import React, { PropTypes } from 'react'
import { Link } from 'react-router';

class ItemView extends React.Component {
  render () {
    return(
      <section>
        <header>
          <Link to="#"> <button>Edit Auction</button> </Link>
          <h3>Guest View Url</h3>
          <input type="text" value="Test" readonly/>
          <button>Copy URL</button>
        </header>
      </section>
    )
  }
}

export default ItemView;

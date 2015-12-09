import React, { PropTypes } from 'react'
import { Link } from 'react-router';

class ItemView extends React.Component {
  render () {
    return(
      <section className="dashboardItem">
        <header className="itemViewHeader">
          <Link to="#"> <button>Edit Auction</button> </Link>
          <h3>Guest View Url</h3>
          <input type="text" value="Test" readonly/>
          <button>Copy URL</button>
        </header>

        <Link to="/createitem">Add Items</Link>
        <button>Edit Items</button>

        <section className="itemListView">
          <h3>Item Title One</h3>
          <img src='http://placecage.com/c/200/300' />
          <h3>Current Highest Bid:<span>Put bid number here</span></h3>
        </section>
        <section className="itemListView">
          <h3>Item Title Two</h3>
          <img src='http://placecage.com/c/200/300' />
          <h3>Current Highest Bid:<span>Put bid number here</span></h3>
        </section>
        <section className="itemListView">
          <h3>Item Title Three</h3>
          <img src='http://placecage.com/c/200/300' />
          <h3>Current Highest Bid:<span>Put bid number here</span></h3>
        </section>
      </section>
    )
  }
}

export default ItemView;

import React, { PropTypes } from 'react'
import { Link } from 'react-router';
import jQuery from 'jQuery';
import ClipboardButton from 'react-clipboard.js';

import setup from '../../setup'
import User from '../../models/users'
import ListItems from './listItems'



class PublicViewItems extends React.Component {
  constructor(props) {
    super(props)
    setup(User.access_token);
    this.state = {
      loaded: false,
      item: []
    }
  }


  render () {
    let id = this.props.params.id; //grabs our id from params
    // the ${id} below is getting it's information from this
    return(
      <section className="dashboardItem">
        <header className="itemViewHeader">

          <h3>Auction View</h3>

        </header>
        <ListItems id={this.props.params.id}></ListItems>
        {/* id in this is setting the params for listitems */}
      </section>
    )
  }
}

export default PublicViewItems;

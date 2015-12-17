import React, { PropTypes } from 'react'
import {Link} from 'react-router';

import ListItems from '../../models/listItems'

class SingleItemView extends React.Component {
  render () {
    return (
      <div>
        {item.name}
        {item.description}
        {item.starting_bid}
      </div>
    )
  }
}

export default SingleItemView;

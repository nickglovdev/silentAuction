import React from 'react';
import jQuery from 'jquery';

class ListAuctions extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      Loaded: false,
      auction: []
    }
  }

  componentDidMount() {
    jQuery.ajax('http://silent-auctioner.herokuapp.com/auctions')
          .then(response => {

            this.setState({
              Loaded: true,
              auction: response.data
            })
            console.log(this.state.auction)
          });
  }


  render () {
    console.log("tweet list rendered")
    console.log(this.state.auction)
    let auction = this.state.auction.map(auction => {
      return <Auction key={auction.title}
                    auction={auction}/>
    })
    return(
      <div className="auctionList">
        {auction}
      </div>

    )
  }
}

export default ListAuctions;

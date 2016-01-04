import React from 'react'

class FAQ extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
     yolo: "section"
   }

   this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.open) {
      this.setState({
        open: false,
        yolo: "section"
      })
    } else {
      this.setState({
        open: true,
        yolo: "section open"
      })
    }
  }

  render () {
    return(
      <div className={this.state.yolo}>
        <button>toggle</button>
        <div className="sectionhead"
               onClick={this.handleClick}>
                       {this.props.title}
        </div>
        <div className="articlewrap">
          <div className="article">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

export default FAQ;

class Answers extends React.Component {
  render () {
    return (
      <section className="faqWrap">
        <div className="mainStuff">
          <div className="title">Frequently Asked Questions</div>
          <FAQ title="What is iBid?">
            iBid is a silent auction platform in which the moderator can
            allow the guests to place bids via text message. The main objective
            is to create auctions, add items, open the auction, and sell the items
            to the guests all from the control of your fingertips.
          </FAQ>
          <FAQ title="How Do I Use iBid?">
            Moderators can create an account and login to see their auctions
            and items. They will open the auction to begin the bidding of
            the items. Guests will place their bids via text message and those bids
            will be visible in a live feed for each specific item. Moderators can
            navigate auctions and items from the dashboard.
          </FAQ>
          <FAQ title="Why Should I Use iBid?">
            iBid was built to enhance the experience of a silent auction for the Guests
            and to increase control for the moderator. It's purpose is to serve as
            a way to organize the selling of your items in a simple way.
          </FAQ>
        </div>
      </section>
    )
  }
}

export default Answers;

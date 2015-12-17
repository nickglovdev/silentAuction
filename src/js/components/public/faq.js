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
      <div className="mainStuff">
        <div className="title">FAQ</div>
        <FAQ title="FAQ Title One">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Amet nemo harum voluptas aliquid rem possimus nostrum
          excepturi!
        </FAQ>
        <FAQ title="FAQ Title Two">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Amet nemo harum voluptas aliquid rem possimus nostrum
          excepturi!
        </FAQ>
      </div>
    )
  }
}

export default Answers;

import React, { PropTypes } from 'react'

class FAQ extends React.Component {
  render () {
    return(
      <div className="faq">
        <button>+</button><span>What is my life?</span>
        <button>+</button><span>Who is my life?</span>
        <button>+</button><span>Where is my life?</span>
        <button>+</button><span>When is my life?</span>
        <button>+</button><span>Why is my life?</span>
      </div>
    )
  }
}

export default FAQ;

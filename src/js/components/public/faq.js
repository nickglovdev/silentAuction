import React, { PropTypes } from 'react'

class FAQ extends React.Component {
  render () {
    return(
      <div className="faq">
        <ul className="faqList">
          <li><button>+</button><span>What is my life?</span></li>
          <li><button>+</button><span>Who is my life?</span></li>
          <li><button>+</button><span>Where is my life?</span></li>
          <li><button>+</button><span>When is my life?</span></li>
          <li><button>+</button><span>Why is my life?</span></li>
        </ul>
      </div>
    )
  }
}

export default FAQ;

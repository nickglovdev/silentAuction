import React from 'react';

class Login extends React.Component {
  render () {
    return(
      <div className="login">
        <span>E-Mail:</span>
          <input className="username" placeholder="E-Mail..."></input>
        <span>Password:</span>
          <input type="password" className="username" placeholder="Password..."></input>
        <button value="Submit">Submit</button>
      </div>
    )
  }
}

export default Login;

import React from 'react';
import { Link } from 'react-router';

class Login extends React.Component {
  render () {
    return(
      <div className="homePage">
        <div className="login">
          <h3>Login</h3>
          <span>E-Mail:</span>
            <input className="username" placeholder="E-Mail..."></input>
          <span>Password:</span>
            <input type="password" className="username" placeholder="Password..."></input>
          <button value="Submit">Submit</button>
          <br />
          <Link to="/dashboard">Testing Dashboard by pass</Link>
        </div>
      </div>
    )
  }
}

export default Login;

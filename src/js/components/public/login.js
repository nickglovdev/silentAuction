import React from 'react';
import { Link } from 'react-router';

import User from '../../models/users'

class Login extends React.Component{

  constructor(props){
    super(props);

    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin(e){
    let email = this.refs.email.value;
    let password = this.refs.password.value;

    if (email && password) {
      User.login({
        username: email,
        password: password
      }, (error, data) => {
        if (!error) {
          console.log('success')
        } else {
          alert('error in login');
        }
      });
    } else {
      alert('Password or user name is wrong');
    }
  }

  render () {
    return(
      <div>
        <div className="login">
          <h3>Login</h3>
          <span>E-Mail:</span>
            <input ref="email" type="text" className="username" placeholder="E-Mail..."></input>
          <span>Password:</span>
            <input ref="password" type="password" className="username" placeholder="Password..."></input>
          <button value="Submit" onClick={this.handleLogin}>Submit</button>
          <br />
          <Link to="/dashboard">Testing Dashboard by pass</Link>
        </div>
      </div>
    )
  }
}

export default Login;

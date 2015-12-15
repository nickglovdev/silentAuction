import React from 'react';
import { Link } from 'react-router';

import setup from '../../setup'
import User from '../../models/users'

class Login extends React.Component{
  constructor(props){
    super(props);

    /*this.handleKeyPress = this.handleKeyPress.bind(this);*/
    this.handleLogin = this.handleLogin.bind(this);
  }

/*  handleKeyPress(e){
    if (e.keyCode == 13) {
      this.handleLogin();
    }
  }*/

  handleLogin(e){
    let email = this.refs.email.value;
    let password = this.refs.password.value;

    if (email && password) {
      User.login({
        username: email,
        password: password
      }, (error, data) => {
        if (!error) { //This will only run if we successfully login
          //This should allow us to hold onto our token after signing in
          setup(User.access_token);
          console.log('success')
          this.props.history.pushState(null,'/dashboard');
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
      <div className="homePage">
        <div className="login">
          <h3>Login</h3>
          <span className="inputLabel">E-Mail:</span>
            <input ref="email" type="text" className="username" placeholder="E-Mail..."></input>
          <span className="inputLabel">Password:</span>
            <input ref="password" type="password" className="username" placeholder="Password..."></input>
          <button value="Submit" onClick={this.handleLogin}>Submit</button>
          <br />
        </div>
      </div>
    )
  }
}

export default Login;

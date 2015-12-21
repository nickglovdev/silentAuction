import React from 'react'

import setup from '../../setup'
import User from '../../models/users'


class Register extends React.Component {
  constructor(props){
    super(props);

    this.registerUser = this.registerUser.bind(this);
  }

  // Create a function that will run upon clicking 'Join' button.
  // The function will prevent the browers from navigation,
  // take the values entered in the form (given they are filled out correctly),
  // and submits the values to the 'register' function that has been imported
  // from the 'User' model.
  registerUser(e) {
    e.preventDefault()

    let email = this.refs.email.value;
    let confirmEmail = this.refs.confirmEmail.value;
    let password = this.refs.password.value;
    let confirmPassword = this.refs.confirmPassword.value;

    if (email && email === confirmEmail && password &&  password === confirmPassword) {
    console.log(email, confirmEmail, password, confirmPassword)
      User.register({
        email: email,
     password: password
      }, (error, data) => {
        console.log(data);
        if (!error) {
          User.login({ //Do this to bypass the code on app.js. This will allows us to login in on registration
            username: email,
            password: password
          }, (error, data) => { //Get the Token
            setup(data.access_token);
            console.log('success')
            this.props.history.pushState(null,'/dashboard');
          })
        } else {
          alert('error in login');
        }
      });
    }
  }

  render () {
    return(
      <div className="homePage">
        <div className="register">
          <h3>Register</h3>
          <span className="inputLabel">E-Mail:</span>
            <input ref="email" placeholder="E-Mail..."></input>
          <span className="inputLabel">Confirm E-Mail:</span>
            <input ref="confirmEmail"  placeholder="E-Mail..."></input>
          <span className="inputLabel">Password:</span>
            <input ref="password"  type="password" placeholder="Password..."></input>
          <span className="inputLabel">Confirm Password</span>
            <input ref="confirmPassword"  type="password" placeholder="Password..."></input>
          <button value="Join" onClick={this.registerUser}>Join</button>
        </div>
      </div>
    )
  }
}

export default Register;

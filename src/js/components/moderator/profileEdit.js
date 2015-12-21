import React from 'react'

import setup from '../../setup'

import User from '../../models/users'

class ProfileEdit extends React.Component {
  constructor(props){
    super(props);

    this.updateUser = this.updateUser.bind(this);
  }

  updateUser(e) {
    e.preventDefault();
    let email = this.refs.email.value;
    let confirmEmail = this.refs.confirmEmail.value;
    let password = this.refs.password.value;
    let confirmPassword = this.refs.confirmPassword.value;

    if (email && email === confirmEmail && password &&  password === confirmPassword) {
    console.log(email, confirmEmail, password, confirmPassword)
      User.editProfile({
        email: email,
     password: password
      }, (error, data) => {
        console.log(data);
        if (!error) {
          User.editProfile({
            username: email,
            password: password
          }, (error, data) => {
            console.log('success')
            this.props.history.pushState(null,'/dashboard');
          })
        } else {
          alert('error in update');
        }
      });
    }
  }

  render () {
    return (
      <div className="homePage">
        <div className="editProfile">
          <h3>Edit Profile</h3>
          <span className="inputLabel">E-Mail:</span>
            <input ref="email" placeholder="E-Mail..."></input>
          <span className="inputLabel">Confirm E-Mail:</span>
            <input ref="confirmEmail"  placeholder="E-Mail..."></input>
          <span className="inputLabel">Password:</span>
            <input ref="password"  type="password" placeholder="Password..."></input>
          <span className="inputLabel">Confirm Password</span>
            <input ref="confirmPassword"  type="password" placeholder="Password..."></input>
          <button value="Save" onClick={this.updateUser}>Save</button>
        </div>
      </div>
    )
  }
}

export default ProfileEdit;

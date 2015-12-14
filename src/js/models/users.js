import React from 'react';
import jQuery from 'jquery';

class User{
  constructor() {
    this.access_token = null;
    this.refresh_token = null;
    this.token_expires = null;
    this.token_create = null;
    this.listeners = [];

    // deconstructing token information to localStorage that updates the browser
    // on where the user has navagated. This way you can stay logged in correctly.
    if (localStorage.getItem('access_token')) {
      let {
        access_token,
        refresh_token,
        token_expires,
        token_created
      } = JSON.parse(localStorage.getItem('access_token'));
      this.access_token = access_token;
      this.refresh_token = refresh_token;
      this.token_expires = expires_in;
      this.token_created = created_at;
    }
  }

  // this function can be refrence in other components to make sure that
  // user action is only of those who are logged in.
  isLoggedIn() {
    return this.access_token !==null;
  }

  // Create a function that takes the values given to us from the 'Register',
  // component and make an AJAX request. The AJAX request should specify the
  // POST method so that is known we are asking for a token in response.
  register(data, done){
    let url = 'https://silent-auctioner.herokuapp.com/users'
    let options = {
      url: url,
      method: 'POST',
      data: {
        user: data
      }
    };

    //Shows use if we were able to log in
    jQuery.ajax(options).then(response =>{
      done(null,response);
    }).fail(error => {
      done(error);
    });
  };

  //This section is where we are trying to authenicate our token so that we
  //Can log in
  login(data, done) {
    let url = 'http://silent-auctioner.herokuapp.com/oauth/token';
    data.grant_type = 'password';

    let options = {
      url: url,
      method: 'POST',
      data: data
    };

    jQuery.ajax(options).then(response =>{
      let {access_token, refresh_token, expires_in, created_at} = response;
      console.log(response)
      this.access_token = access_token;
      this.refresh_token = refresh_token;
      this.token_expires = expires_in;
      this.token_created = created_at;

      localStorage.setItem('access_token', JSON.stringify({
        access_token,
        refresh_token,
        expires_in,
        created_at
      }));

      //Shows use if we were able to log in and runs through our errors if there are any.
      done(null,response);
    }).fail(error => {
      done(error);
    });
  };

  // Getting rid of the tracking information provided to the localStorage and
  // removing access_token so that the user is no longer recognized.
  logout(data, done) {
    this.access_token = null;
    this.refresh_token = null;
    this.token_expires = null;
    this.token_created = null;

    localStorage.removeItem('access_token');
  };
}

export default new User();

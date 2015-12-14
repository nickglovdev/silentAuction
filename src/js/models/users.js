import React from 'react';
import  jQuery from 'jquery';

class User{
  constructor() {
    this.access_token = null;
    this.refresh_token = null;
    this.token_expires = null;
    this.token_create = null;
    this.listeners = [];

    if(localStorage.getItem('access_token')) {
      let {
        access_token,
        refresh_token,
        token_expires,
        token_create
      } = JSON.parse(localStorage.getItem('access_token'));
      this.access_token = access_token;
      this.refresh_token = refresh_token;
      this.token_expires = token_expires;
      this.token_create = token_create;
    }
  }

  isLoggedIn() {
    return this.access_token !== null;
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


    //Shows use if we where able to log in
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

      localStorage.setItem('user_auth', JSON.stringify({
        access_token: access_token,
        refresh_token: refresh_token,
        expires_in: expires_in,
        created_at: created_at
      }));
      //Shows use if we where able to log in and runs through our errors if there are any.
      done(null,response);
    }).fail(error => {
      done(error);
    });
  };

  logout() {
    this.access_token = null;
    this.refresh_token = null;
    this.token_expires = null;
    this.token_created = null;
    localStorage.removeItem('user_auth');
  }
}

export default new User();

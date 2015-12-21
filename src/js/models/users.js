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

  // Create a function that lets us listen for changes and subscribe to them.
  // Pass in callback so that we can apply to other areas of our application.
  subscribe(callback) {
    this.listeners.push(callback);

    // unsubscribe function, so that we can turn off what is being listened.
    return () => {
      return this.listeners.filter(listener => listener != callback);
    }
  }

  dispatch() {
    this.listeners.forEach((callback) => callback());
    // Keep rerendering so that all changes are captured.
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
    jQuery.ajax(options).then(response => {
      if (done) {
        done(null, response);
      }
      this.dispatch();
    }).fail(error => {
      if (done) {
        done(error);
      }
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
        access_token: access_token,
        refresh_token: refresh_token,
        expires_in: expires_in,
        created_at: created_at
      }));
      //Shows use if we where able to log in and runs through our errors if there are any.
      if (done) {
        done(null,response);
      }

      this.dispatch();
    }).fail(error => {
      if (done) {
        done(error);
      }
    });
  };

  logout() {
    this.access_token = null;
    this.refresh_token = null;
    this.token_expires = null;
    this.token_created = null;
    localStorage.removeItem('access_token');
    this.dispatch();
  }

  updateAttributes(json) {
    this.email = json.email;
    this.id = json.id;
  }

  getProfile(done) {
    jQuery.ajax('http://silent-auctioner.herokuapp.com/users')
      .then( (json) => {
        this.updateAttributes(json);

        if (done) {
          done(null, json);
        }

        this.dispatch();
      }).fail(error => {
        if (done) {
          done(error)
        }
      });
  }

  editProfile(data, done) {
    let url = 'http://silent-auctioner.herokuapp.com/users'
    let options = {
      url: url,
      method: 'PATCH',
      data: {
        user: data
      }
    };

    jQuery.ajax(options).then(response => {
      this.updateAttributes(response);

      if (done) {
        done(null, response);
      }

      this.dispatch();
    }).fail(error => {
      done(error);
    });
  };
}

export default new User();

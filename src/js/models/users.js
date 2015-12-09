import React from 'react';
import  Jquery from 'jquery';

class User{
  // Create a function that takes the values given to us from the 'Register',
  // component and make an AJAX request. The AJAX request should specify the
  // POST method so that is known we are asking for a token in response.
  register(data){
    let url = 'https://silent-auctioner.herokuapp.com/users'
    let options = {
      url: url,
      method: 'POST',
      data: {
        user: data
      }
    };

    Jquery.ajax(options).then(response =>{
      console.log(response)
    })
  };
}

export default new User();

import jQuery from 'jquery'

function setup(token) {
  return jQuery.ajaxSetup({
    headers: {
      'Authorization': 'Bearer ' + token
    }
  });
}

export default setup;

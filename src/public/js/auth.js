'use strict';

var idToken;

function onSignIn(googleUser) {
  idToken = googleUser.getAuthResponse().id_token;

  verifyUser(idToken).then(res => {
    console.log(res);
    if (res === true) {
      // TODO: route to main page
    } else {
      // TODO: route to error page
    }
  });

  // google profile info
  let profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}

function signOut() {
  let auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
  });
}

// verify user on server; register if necessary
function verifyUser(idToken) {
  return new Promise((resolve, reject) => {

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/auth/verify', true);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

    xhr.onload = function() {
      let loginResult = xhr.responseText;
      resolve(loginResult);
    };

    xhr.send(JSON.stringify({ idToken: idToken }));

  });
}


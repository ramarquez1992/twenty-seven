'use strict';

var auth2;

gapi.load('auth2', function(){
  auth2 = gapi.auth2.init({
    client_id: '994277392420-atrlgsj5tjrin5a0mug33dg8jk0hb2ah.apps.googleusercontent.com'
  });

  auth2.attachClickHandler('signin-button', {}, signIn);
});

function signIn(googleUser) {
  let idToken = googleUser.getAuthResponse().id_token;

  verifyUser(idToken).then(res => {
    console.log(res);
    if (res == 'true') {
      localStorage.setItem('idToken', idToken);

      // TODO: route to main page
      document.location = '/profile';
    } else {
      document.location = '/error';
    }
  });

  // google profile info
  // TODO: store basic info in localstorage
  let profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}

function signOut() {
  auth2.signOut().then(function () {
    localStorage.removeItem('idToken');
    document.location = '/';
  });
}

// verify user on server; register if necessary
function verifyUser(idToken) {
  return new Promise((resolve, reject) => {

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/auth/verify', true);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

    xhr.onload = function() {
      resolve(xhr.responseText);
    };

    xhr.send(JSON.stringify({ idToken: idToken }));

  });
}

function getIdToken() {
  return localStorage.getItem('idToken');
}

function requireAuth() {
  if (getIdToken() === null) {
    document.location = '/';
  }
}


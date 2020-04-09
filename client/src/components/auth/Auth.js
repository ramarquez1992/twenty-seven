import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectLoggedIn, login, logout } from './authSlice';
import {GoogleLogin, GoogleLogout } from "react-google-login";

export function Auth() {
  const loggedIn = useSelector(selectLoggedIn);
  const dispatch = useDispatch();

  return (
      <div>
        {loggedIn ?
          <GoogleLogout
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              buttonText="Logout"
              onLogoutSuccess={res => dispatch(logout()) }
          />
          :
          <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              buttonText="Login"
              onSuccess={res => dispatch(login({token: res.tokenObj, profile: res.profileObj}))}
              cookiePolicy={'single_host_origin'}
              isSignedIn={true}
          />
      }
    </div>
  );
}

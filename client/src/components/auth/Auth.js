import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentUser, login, logout } from './authSlice';
import { GoogleLogin, GoogleLogout } from "react-google-login";
import moment from "moment";

const loginFailure = (res) => {
  console.log('Login failed.');
};

export function Auth() {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  return (
    <div>
      {currentUser ?
          <div>
            <GoogleLogout
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                buttonText="Logout"
                onLogoutSuccess={res => dispatch(logout()) }
            />
          </div>
          :
          <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              buttonText="Login"
              onSuccess={res => dispatch(login({
                sessionToken: res.tokenObj.access_token,
                expiresAt: moment(res.tokenObj.expires_at).format(),
                profile: res.profileObj
              }))}
              onFailure={loginFailure}
              cookiePolicy={'single_host_origin'}
              isSignedIn={false}
          />
      }
    </div>
  );
}

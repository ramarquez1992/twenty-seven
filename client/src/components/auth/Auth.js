import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {login, logout, selectCurrentUser, selectLoggedIn} from './authSlice';
import {GoogleLogin, GoogleLogout} from "react-google-login";
import Button from "semantic-ui-react/dist/commonjs/elements/Button";
import Image from "semantic-ui-react/dist/commonjs/elements/Image";

export function Auth() {
  const loggedIn = useSelector(selectLoggedIn);
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  return (
      <div>
        {loggedIn ?
            <GoogleLogout
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                render={renderProps =>
                    <Button circular icon basic onClick={renderProps.onClick} disabled={renderProps.disabled}>
                      <Image centered src={currentUser.picture} avatar />
                    </Button>
                }
                onLogoutSuccess={res => dispatch(logout())}
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

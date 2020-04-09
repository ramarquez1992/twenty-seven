import React from 'react';
import {selectCurrentUser} from '../auth/authSlice';
import {useSelector} from "react-redux";

export function Home() {
  const currentUser = useSelector(selectCurrentUser);

  return (
      <div>
        <p>user: {JSON.stringify(currentUser)}</p>
        <img src={process.env.PUBLIC_URL + 'logo192.png'} className="App-logo" alt="logo"/>
      </div>
  );
}

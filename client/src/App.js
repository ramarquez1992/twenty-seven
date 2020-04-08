import React from 'react';
import { useSelector } from 'react-redux';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom'
import { Auth } from './components/auth/Auth';
import { selectCurrentUser } from './components/auth/authSlice';

function App() {
  const currentUser = useSelector(selectCurrentUser);

  return (
    <div className="App">
      <Auth />
      {currentUser ?
          <header className="App-header">
            <p>user: {currentUser.profile.name}</p>
            <img src={process.env.PUBLIC_URL + 'logo192.png'} className="App-logo" alt="logo" />
            <Button component={Link} to="counter" variant="contained" color="primary">counter</Button>
            <Button component={Link} to="/" variant="contained" color="primary">home</Button>
          </header>
          :
          <p>Please login</p>
      }
    </div>
  );
}

export default App;

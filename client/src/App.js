import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={process.env.PUBLIC_URL + 'logo192.png'} className="App-logo" alt="logo" />
        <Button component={Link} to="counter" variant="contained" color="primary">Hello World</Button>
      </header>
    </div>
  );
}

export default App;

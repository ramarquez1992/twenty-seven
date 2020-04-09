import React from 'react';
import { Auth } from '../auth/Auth';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Nav } from "../nav/Nav";

function Header() {
  return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">
              twenty-seven
            </Typography>
            <Auth />
          </Toolbar>
        </AppBar>
        <Nav/>
      </div>
  );
}

export default Header;

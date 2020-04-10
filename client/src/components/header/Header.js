import React from 'react';
import {Auth} from '../auth/Auth';
import {Nav} from "../nav/Nav";

function Header() {
  return (
      <div>
        {/*<AppBar position="static">*/}
        {/*  <Toolbar>*/}
        {/*    <IconButton edge="start" color="inherit" aria-label="menu">*/}
        {/*      <AcUnitIcon />*/}
        {/*    </IconButton>*/}
        {/*    <Typography variant="h4">*/}
        {/*      twenty-seven*/}
        {/*    </Typography>*/}
        {/*    <Auth/>*/}
        {/*  </Toolbar>*/}
        {/*</AppBar>*/}
        <Nav/>
        <Auth/>
      </div>
  );
}

export default Header;

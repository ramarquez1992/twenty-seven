import React from 'react';
import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";

export function Nav() {
  return (
    <div>
      <Button component={Link} to="/" variant="contained" color="primary">home</Button>
      <Button component={Link} to="counter" variant="contained" color="primary">counter</Button>
    </div>
  );
}

import React from 'react';
import {Link} from "react-router-dom";
import Button from "semantic-ui-react/dist/commonjs/elements/Button";

export function Nav() {
  return (
      <div>
        <Button icon="like" />
        <Button as={Link} to="/">Home</Button>
        <Button as={Link} to="/counter">Counter</Button>
        {/*<Button component={Link} to="/" variant="contained" color="primary">home</Button>*/}
        {/*<Button component={Link} to="counter" variant="contained" color="primary">counter</Button>*/}
      </div>
  );
}

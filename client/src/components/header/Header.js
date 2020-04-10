import React from 'react';
import {Auth} from '../auth/Auth';
import List from "semantic-ui-react/dist/commonjs/elements/List";
import {Link} from "react-router-dom";
import Container from "semantic-ui-react/dist/commonjs/elements/Container";
import {Divider} from "semantic-ui-react";
import Icon from "semantic-ui-react/dist/commonjs/elements/Icon";
import Button from "semantic-ui-react/dist/commonjs/elements/Button";

function Header() {
  return (
      <Container style={{marginTop: "1em", marginBottom: "5em"}}>
        <div>
          <List floated='right' horizontal>
            <List.Item><Auth/></List.Item>
          </List>

          <List horizontal>
            <List.Item as={Link} to="/"><Button icon><Icon name="home"/></Button></List.Item>
            <List.Item as={Link} to="/counter"><Button>Counter</Button></List.Item>
          </List>
        </div>

        <Divider horizontal>
          <Icon name='yen sign'/>
          twenty-seven
        </Divider>
      </Container>
  );
}

export default Header;

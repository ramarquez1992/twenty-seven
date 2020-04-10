import React from 'react';
import {Auth} from "../auth/Auth";
import {Divider} from "semantic-ui-react";
import Icon from "semantic-ui-react/dist/commonjs/elements/Icon";
import Container from "semantic-ui-react/dist/commonjs/elements/Container";
import Header from "semantic-ui-react/dist/commonjs/elements/Header";

export function Landing() {
  return (
      <Container text style={{marginTop:"5em", marginBottom:"3em"}}>
        <Divider horizontal>
          <Icon name='yen sign'/>
          twenty-seven
        </Divider>

        <div style={{marginTop:"5em", marginBottom:"3em"}}>
          <Header as='h2'>Header</Header>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
            ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
            ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
            quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
            arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
            Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
            dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
            Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
            Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
            viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
            Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
          </p>
        </div>

        <Auth/>
      </Container>
  );
}

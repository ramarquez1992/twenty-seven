import React from 'react';
import {selectCurrentUser} from '../auth/authSlice';
import {useSelector} from "react-redux";
import Card from "semantic-ui-react/dist/commonjs/views/Card";
import Image from "semantic-ui-react/dist/commonjs/elements/Image";
import Icon from "semantic-ui-react/dist/commonjs/elements/Icon";

const sampleCard = (user) => {
  return (
      <Card>
        <Image src={process.env.PUBLIC_URL + 'img/logo512.png'} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{user.name}</Card.Header>
          <Card.Meta>
            <span className='date'>{user.email}</span>
          </Card.Meta>
          <Card.Description>
            Matthew is a musician living in Nashville.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <span>
            <Icon name='user' />
            22 Fiends
          </span>
        </Card.Content>
      </Card>
  );
};

export function Home() {
  const currentUser = useSelector(selectCurrentUser);

  return (
      <div>
        <Card.Group centered>
          {sampleCard(currentUser)}
          {sampleCard(currentUser)}
          {sampleCard(currentUser)}
        </Card.Group>
      </div>
  );
}

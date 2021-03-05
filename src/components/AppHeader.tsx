import * as React from 'react';

import { Header, Left, Body, Title, Subtitle, Thumbnail, Right, H1 } from 'native-base';

interface Props {
}

export default class AppHeader extends React.Component<Props> {
  render() {
    return (
      <Header>
        <Left>
          <Thumbnail
            small
            source={require('../assets/images/logo.png')}
          />
        </Left>
        <Body>
          <Title>SARVA</Title>
          <Subtitle>gpx builder</Subtitle>
        </Body>
        <Right />
      </Header>
    );
  }
}

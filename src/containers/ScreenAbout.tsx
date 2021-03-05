import * as React from 'react';

import { Container, Content, Text, Thumbnail, H1, View } from 'native-base';
import {
  StyleSheet,
} from 'react-native';

interface Props {
}

export default class ScreenAbout extends React.Component<Props> {
  render() {
    return (
      <Container>
        <Content>
          <View style={styles.thumbnailWrapper}>
            <Thumbnail
              large
              source={require('../assets/images/logo.png')}
            />
          </View>
          <H1 style={styles.header}>SARVA gpx builder</H1>
          <Text style={styles.text}>Програма для шкидкої генерації gpx файлів</Text>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  thumbnailWrapper: {
    paddingTop: 100,
    alignSelf: 'center'
  },
  header: {
    textAlign: 'center'
  },
  text: {
    textAlign: 'center'
  },
});

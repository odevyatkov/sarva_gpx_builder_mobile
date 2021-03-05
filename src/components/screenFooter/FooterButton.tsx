import * as React from 'react';

import ScreenName from '../../modules/screen/enums/ScreenName';

import { Button, Icon, Text } from 'native-base';

const icons: Record<ScreenName, string> = {
  [ScreenName.BuildByCenter]: 'md-disc-outline',
  [ScreenName.BuildByBBox]: 'scan-sharp',
  [ScreenName.About]: 'md-help-circle',
};
const texts: Record<ScreenName, string> = {
  [ScreenName.BuildByCenter]: 'by center',
  [ScreenName.BuildByBBox]: 'by bbox',
  [ScreenName.About]: 'about',
};

interface Props {
  isActive: boolean;
  screenName: ScreenName;
  activeScreenNameSet: (screenName: ScreenName) => void;
}

export default class FooterButton extends React.Component<Props> {
  handlePress = (): void => {
    if (!this.props.isActive) {
      this.props.activeScreenNameSet(this.props.screenName);
    }
  }

  render() {
    return (
      <Button
        vertical
        active={this.props.isActive}
        onPress={this.handlePress}
      >
        <Icon name={icons[this.props.screenName]} />
        <Text>{texts[this.props.screenName]}</Text>
      </Button>
    );
  }
}

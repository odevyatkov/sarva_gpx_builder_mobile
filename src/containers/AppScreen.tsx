import * as React from 'react';
import { connect } from 'react-redux';

import ApplicationState from '../redux/interfaces/ApplicationState';

import ScreenName from '../modules/screen/enums/ScreenName';

import { activeScreen$ } from '../modules/screen/redux/selectors';

import { Container, Content, Header, Text } from 'native-base';
import ScreenCreateByBBox from './ScreenCreateByBBox';
import ScreenCreateByCenter from './ScreenCreateByCenter';
import ScreenAbout from './ScreenAbout';

interface StateProps {
  activeScreenName: ScreenName;
}
interface DispatchProps {
}
interface OwnProps {}
interface Props extends StateProps, DispatchProps, OwnProps {
}

class AppScreen extends React.Component<Props> {
  renderDefault() {
    return (
      <Container>
        <Header />
        <Content>
          <Text>Сторінка не існує</Text>
        </Content>
      </Container>
    );
  }

  render() {
    switch (this.props.activeScreenName) {
      case ScreenName.BuildByCenter:
        return (
          <ScreenCreateByCenter />
        );

      case ScreenName.BuildByBBox:
        return (
          <ScreenCreateByBBox />
        );

      case ScreenName.About:
        return (
          <ScreenAbout />
        );

      default:
        return this.renderDefault();
    }
  }
}

function mapStateToProps(state: ApplicationState): StateProps {
  return {
    activeScreenName: activeScreen$(state),
  };
}

function mergeProps(stateProps: StateProps, _dispatchProps: DispatchProps, props: OwnProps): Props {
  return {
    ...stateProps,
    ...props,
  };
}

export default connect<StateProps, DispatchProps, OwnProps, Props>(
  mapStateToProps,
  null,
  mergeProps
)(AppScreen);

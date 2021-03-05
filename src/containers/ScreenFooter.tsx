import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ApplicationState from '../redux/interfaces/ApplicationState';

import ScreenName from '../modules/screen/enums/ScreenName';

import { activeScreen$ } from '../modules/screen/redux/selectors';
import { activeScreenSet } from '../modules/screen/redux/creators';

import { Footer, FooterTab } from 'native-base';
import FooterButton from '../components/screenFooter/FooterButton';

interface StateProps {
  activeScreenName: ScreenName;
}
interface DispatchProps {
  activeScreenNameSet: (screenName: ScreenName) => void;
}
interface OwnProps {}
interface Props extends StateProps, DispatchProps, OwnProps {
}

class ScreenFooter extends React.Component<Props> {
  render() {
    const {
      activeScreenName,
    } = this.props;

    return (
      <Footer>
        <FooterTab>
          <FooterButton
            isActive={activeScreenName === ScreenName.BuildByCenter}
            screenName={ScreenName.BuildByCenter}
            activeScreenNameSet={this.props.activeScreenNameSet}
          />
          <FooterButton
            isActive={activeScreenName === ScreenName.BuildByBBox}
            screenName={ScreenName.BuildByBBox}
            activeScreenNameSet={this.props.activeScreenNameSet}
          />
          <FooterButton
            isActive={activeScreenName === ScreenName.About}
            screenName={ScreenName.About}
            activeScreenNameSet={this.props.activeScreenNameSet}
          />
        </FooterTab>
      </Footer>
    );
  }
}

function mapStateToProps(state: ApplicationState): StateProps {
  return {
    activeScreenName: activeScreen$(state),
  };
}

function mapDispatchToProps(dispatch): DispatchProps {
  return bindActionCreators({
    activeScreenNameSet: activeScreenSet,
  }, dispatch);
}

function mergeProps(stateProps: StateProps, dispatchProps: DispatchProps, props: OwnProps): Props {
  return {
    ...stateProps,
    ...dispatchProps,
    ...props,
  };
}

export default connect<StateProps, DispatchProps, OwnProps, Props>(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(ScreenFooter);

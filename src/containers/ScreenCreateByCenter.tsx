import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ApplicationState from '../redux/interfaces/ApplicationState';

import {
  center$,
  centerError$,
  radius$,
  radiusError$,
} from '../modules/generatorForm/redux/selectors';
import { fieldChange } from '../modules/generatorForm/redux/creators';

import { Container, Content, Form } from 'native-base';
import FormCommonPart from './FormCommonPart';
import FieldItem from '../components/generatorForm/FieldItem';
import FieldName from '../modules/generatorForm/redux/types/FieldName';
import AppHeader from '../components/AppHeader';

interface StateProps {
  center: string;
  centerError: string;
  radius: string;
  radiusError: string;
}
interface DispatchProps {
  fieldChange: (fieldName: FieldName, value: string) => void;
}
interface OwnProps {}
interface Props extends StateProps, DispatchProps, OwnProps {
}

class ScreenCreateByCenter extends React.Component<Props> {
  render() {
    return (
      <Container>
        <AppHeader />
        <Content>
          <Form>
            <FieldItem
              label='Координати центра'
              fieldName='center'
              value={this.props.center}
              error={this.props.centerError}
              fieldChange={this.props.fieldChange}
              autoCompleteType='off'
              keyboardType='number-pad'
              // icon='ios-locate-outline'
            />
            <FieldItem
              label='Радіус (км)'
              fieldName='radius'
              value={this.props.radius}
              error={this.props.radiusError}
              fieldChange={this.props.fieldChange}
              autoCompleteType='off'
              keyboardType='number-pad'
              // icon='radius'
            />
            <FormCommonPart />
          </Form>
        </Content>
      </Container>
    );
  }
}

function mapStateToProps(state: ApplicationState): StateProps {
  return {
    center: center$(state),
    centerError: centerError$(state),
    radius: radius$(state),
    radiusError: radiusError$(state),
  };
}

function mapDispatchToProps(dispatch): DispatchProps {
  return bindActionCreators({
    fieldChange,
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
)(ScreenCreateByCenter);

import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ApplicationState from '../redux/interfaces/ApplicationState';

import {
  fromPoint$,
  fromPointError$,
  toPoint$,
  toPointError$,
} from '../modules/generatorForm/redux/selectors';
import { fieldChange } from '../modules/generatorForm/redux/creators';

import { Container, Content, Form } from 'native-base';
import FormCommonPart from './FormCommonPart';
import FieldItem from '../components/generatorForm/FieldItem';
import FieldName from '../modules/generatorForm/redux/types/FieldName';
import AppHeader from '../components/AppHeader';

interface StateProps {
  fromPoint: string;
  fromPointError: string;
  toPoint: string;
  toPointError: string;
}
interface DispatchProps {
  fieldChange: (fieldName: FieldName, value: string) => void;
}
interface OwnProps {}
interface Props extends StateProps, DispatchProps, OwnProps {
}

class ScreenCreateByBBox extends React.Component<Props> {
  render() {
    return (
      <Container>
        <AppHeader />
        <Content>
          <Form>
            <FieldItem
              label='Ліва нижня точка'
              fieldName='fromPoint'
              value={this.props.fromPoint}
              error={this.props.fromPointError}
              fieldChange={this.props.fieldChange}
              autoCompleteType='off'
              keyboardType='number-pad'
            />
            <FieldItem
              label='Права верхня точка'
              fieldName='toPoint'
              value={this.props.toPoint}
              error={this.props.toPointError}
              fieldChange={this.props.fieldChange}
              autoCompleteType='off'
              keyboardType='number-pad'
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
    fromPoint: fromPoint$(state),
    fromPointError: fromPointError$(state),
    toPoint: toPoint$(state),
    toPointError: toPointError$(state),
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
)(ScreenCreateByBBox);

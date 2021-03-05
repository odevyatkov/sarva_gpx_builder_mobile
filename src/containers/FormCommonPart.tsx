import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ApplicationState from '../redux/interfaces/ApplicationState';

import {
  cellSize$,
  cellSizeError$,
  fileName$,
  fileNameError$
} from '../modules/generatorForm/redux/selectors';
import { fieldChange, saveFile } from '../modules/generatorForm/redux/creators';

import FieldName from '../modules/generatorForm/redux/types/FieldName';
import FieldItem from '../components/generatorForm/FieldItem';
import { Button, Text, Icon, Content } from 'native-base';

interface StateProps {
  cellSize: string;
  cellSizeError: string;
  fileName: string;
  fileNameError: string;
}
interface DispatchProps {
  fieldChange: (fieldName: FieldName, value: string) => void;
  saveFile: () => void;
}
interface OwnProps {}
interface Props extends StateProps, DispatchProps, OwnProps {
}

class FormCommonPart extends React.Component<Props> {
  render() {
    return (
      <>
        <FieldItem
          label='Розмір клітинки (км)'
          fieldName='cellSize'
          value={this.props.cellSize}
          error={this.props.cellSizeError}
          fieldChange={this.props.fieldChange}
          autoCompleteType='off'
          keyboardType='number-pad'
          // icon='ios-grid-outline'
        />
        <FieldItem
          label='Ім`я файлу'
          fieldName='fileName'
          value={this.props.fileName}
          error={this.props.fileNameError}
          fieldChange={this.props.fieldChange}
          // icon='ios-document-text-outline'
        />
        <Button
          block
          onPress={this.props.saveFile}
        >
          <Icon name='md-download-outline' />
          <Text>Зберіти gpx файл</Text>
        </Button>
      </>
    );
  }
}

function mapStateToProps(state: ApplicationState): StateProps {
  return {
    cellSize: cellSize$(state),
    cellSizeError: cellSizeError$(state),
    fileName: fileName$(state),
    fileNameError: fileNameError$(state),
  };
}

function mapDispatchToProps(dispatch): DispatchProps {
  return bindActionCreators({
    fieldChange,
    saveFile,
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
)(FormCommonPart);

import * as React from 'react';

import FieldName from '../../modules/generatorForm/redux/types/FieldName';

import { Item, Input, Label, Icon, Text } from 'native-base';
import { KeyboardTypeOptions } from 'react-native';

const errorTextStyle = {
  fontSize: 12,
  color: '#ed2f2f',
};

interface Props {
  icon?: string;
  label: string;
  fieldName: FieldName;
  value: string;
  error: string;
  fieldChange: (fieldName: FieldName, value: string) => void;
  autoCompleteType?:
    | 'cc-csc'
    | 'cc-exp'
    | 'cc-exp-month'
    | 'cc-exp-year'
    | 'cc-number'
    | 'email'
    | 'name'
    | 'password'
    | 'postal-code'
    | 'street-address'
    | 'tel'
    | 'username'
    | 'off';
  keyboardType?: KeyboardTypeOptions;
  placeholder?: string;
}

export default class FieldItem extends React.Component<Props> {
  handleChangeTextCellSize = (text: string) => {
    this.props.fieldChange(this.props.fieldName, text);
  };

  renderErrorBlock() {
    if (!this.props.error) {
      return null;
    }

    return (
      <Text style={errorTextStyle}>{this.props.error}</Text>
    );
  }

  renderIcon() {
    if (!this.props.icon) {
      return null;
    }

    return (
      <Icon name={this.props.icon} />
    );
  }

  render() {
    return (
      <Item
        stackedLabel
        error={!!this.props.error}
      >
        <Label>{this.props.label}</Label>
        {this.renderIcon()}
        <Input
          autoCompleteType={this.props.autoCompleteType}
          keyboardType={this.props.keyboardType}
          onChangeText={this.handleChangeTextCellSize}
          value={this.props.value}
          placeholder={this.props.placeholder}
        />
        {this.renderErrorBlock()}
      </Item>
    );
  }
}

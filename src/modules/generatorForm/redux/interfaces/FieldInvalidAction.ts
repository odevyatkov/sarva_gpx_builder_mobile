import {Action} from 'redux';
import GeneratorFormActionType from '../enums/GeneratorFormActionType';
import FieldName from '../types/FieldName';

export default interface FieldInvalidAction extends Action {
  type: GeneratorFormActionType.FieldInvalid;
  fieldName: FieldName;
  error: string;
}

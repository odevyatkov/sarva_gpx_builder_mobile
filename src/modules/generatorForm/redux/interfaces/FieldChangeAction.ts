import {Action} from 'redux';
import GeneratorFormActionType from '../enums/GeneratorFormActionType';
import FieldName from '../types/FieldName';

export default interface FieldChangeAction extends Action {
  type: GeneratorFormActionType.FieldChange;
  fieldName: FieldName;
  value: string;
}

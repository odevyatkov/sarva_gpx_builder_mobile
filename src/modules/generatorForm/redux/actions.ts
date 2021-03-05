import FieldChangeAction from './interfaces/FieldChangeAction';
import GeneratorFormActionType from './enums/GeneratorFormActionType';
import FieldName from './types/FieldName';
import FieldInvalidAction from './interfaces/FieldInvalidAction';

export function fieldChange(fieldName: FieldName, value: string): FieldChangeAction {
  return {
    type: GeneratorFormActionType.FieldChange,
    fieldName,
    value,
  };
}

export function fieldInvalid(fieldName: FieldName, error: string): FieldInvalidAction {
  return {
    type: GeneratorFormActionType.FieldInvalid,
    fieldName,
    error,
  };
}

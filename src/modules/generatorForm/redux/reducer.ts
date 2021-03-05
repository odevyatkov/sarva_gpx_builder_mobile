import GeneratorFormState from './interfaces/GeneratorFormState';

import GeneratorFormActionType from './enums/GeneratorFormActionType';
import FieldChangeAction from './interfaces/FieldChangeAction';
import FieldInvalidAction from './interfaces/FieldInvalidAction';

type Actions = FieldChangeAction | FieldInvalidAction;

export const initTasksState: GeneratorFormState = {
  center: '',
  radius: '10',
  cellSize: '1',
  fromPoint: '',
  toPoint: '',
  fileName: '',
  errors: {
    center: '',
    radius: '',
    cellSize: '',
    fromPoint: '',
    toPoint: '',
    fileName: '',
  }
};

export default function reducer(state: GeneratorFormState = initTasksState, action: Actions): GeneratorFormState {
  switch (action.type) {
    case GeneratorFormActionType.FieldChange:
      return onFieldChange(state, action);

    case GeneratorFormActionType.FieldInvalid:
      return onFieldInvalid(state, action);

    default:
      return state;
  }
}

function onFieldChange(state: GeneratorFormState, action: FieldChangeAction): GeneratorFormState {
  return {
    ...state,
    [action.fieldName]: action.value,
    errors: {
      ...state.errors,
      [action.fieldName]: '',
    },
  };
}

function onFieldInvalid(state: GeneratorFormState, action: FieldInvalidAction): GeneratorFormState {
  return {
    ...state,
    errors: {
      ...state.errors,
      [action.fieldName]: action.error,
    },
  };
}

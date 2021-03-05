import { createSelector, OutputSelector } from 'reselect';

import ApplicationState from '../../../redux/interfaces/ApplicationState';
import FieldName from './types/FieldName';
import ScreenName from '../../screen/enums/ScreenName';

import { activeScreen$ } from '../../screen/redux/selectors';
import fieldsNamesByScreenName from '../utils/fieldsNamesByScreenName';
import { RowData } from 'sarva_gpx_builder/src/utils/prepareData';

export const center$ = (state: ApplicationState): string => state.generatorForm.center;
export const centerError$ = (state: ApplicationState): string => state.generatorForm.errors.center;
export const radius$ = (state: ApplicationState): string => state.generatorForm.radius;
export const radiusError$ = (state: ApplicationState): string => state.generatorForm.errors.radius;
export const fromPoint$ = (state: ApplicationState): string => state.generatorForm.fromPoint;
export const fromPointError$ = (state: ApplicationState): string => state.generatorForm.errors.fromPoint;
export const toPoint$ = (state: ApplicationState): string => state.generatorForm.toPoint;
export const toPointError$ = (state: ApplicationState): string => state.generatorForm.errors.toPoint;
export const cellSize$ = (state: ApplicationState): string => state.generatorForm.cellSize;
export const cellSizeError$ = (state: ApplicationState): string => state.generatorForm.errors.cellSize;
export const fileName$ = (state: ApplicationState): string => state.generatorForm.fileName;
export const fileNameError$ = (state: ApplicationState): string => state.generatorForm.errors.fileName;

const values$ = (state: ApplicationState): Record<FieldName, string> => state.generatorForm;

export const buildRowData$: OutputSelector<ApplicationState, RowData, any> = createSelector(
  values$,
  activeScreen$,
  (
    values: Record<FieldName, string>,
    activeScreen: ScreenName
  ) => {
    const data: RowData = {};
    const allowFieldsName = fieldsNamesByScreenName(activeScreen);
    [
      'center',
      'fromPoint',
      'toPoint',
    ].forEach((fieldName: FieldName) => {
      if (allowFieldsName.includes(fieldName)) {
        data[fieldName] = values[fieldName];
      }
    });
    [
      'radius',
    ].forEach((fieldName: FieldName) => {
      if (allowFieldsName.includes(fieldName)) {
        data[fieldName] = parseFloat(values[fieldName]);
      }
    });
    if (allowFieldsName.includes('cellSize')) {
      data['cell'] = parseFloat(values['cellSize']);
    }
    return data;
  }
);

const errors$ = (state: ApplicationState): Record<FieldName, string> => state.generatorForm.errors;

export const isValidForm$: OutputSelector<ApplicationState, boolean, any> = createSelector(
  errors$,
  activeScreen$,
  (
    errors: Record<FieldName, string>,
    activeScreen: ScreenName
  ) => {
    let isValid = true;
    fieldsNamesByScreenName(activeScreen).forEach(fieldName => {
      isValid = isValid && !errors[fieldName];
    });
    return isValid;
  }
);

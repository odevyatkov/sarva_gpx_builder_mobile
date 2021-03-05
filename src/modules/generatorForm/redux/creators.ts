import { PERMISSIONS } from 'react-native-permissions';

import * as Actions from './actions';
import FieldName from './types/FieldName';
import * as Selectors from './selectors';
import ApplicationState from '../../../redux/interfaces/ApplicationState';
import { getDefaultFileName, getExtent, RowData } from 'sarva_gpx_builder/src/utils/prepareData';
import buildGrid from 'sarva_gpx_builder/src/utils/buildGrid';
import buildNamesDict from 'sarva_gpx_builder/src/utils/buildNamesDict';
import buildGpx from 'sarva_gpx_builder/src/utils/buildGpx';
import * as RNFS from 'react-native-fs';
import { requestPermission } from '../../permissions/utils/permissionUtils';

export function fieldChange(fieldName: FieldName, value: string) {
  return (dispatch) => {
    dispatch(Actions.fieldChange(fieldName, value));
  };
}

export function saveFile() {
  return async (dispatch, getState) => {
    dispatch(validateFields());
    if (!Selectors.isValidForm$(getState())) {
      return;
    }

    const allowSave = await requestPermission(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE);
    if (!allowSave) {
      alert('Немає прав зберігати файли =(');
      return;
    }

    const state: ApplicationState = getState();
    const data: RowData = Selectors.buildRowData$(state);
    const fileName = Selectors.fileName$(state) || getDefaultFileName(data);
    try {
      const extent: [number,number,number,number] = getExtent(data);
      const grid = buildGrid(extent, data.cell);
      const nameDict: Record<'numeric'|'alphabet', Record<number, string>> = buildNamesDict(grid);
      const xml = buildGpx(extent, grid, nameDict);
      const fileNamePath: string = `${RNFS.DownloadDirectoryPath}/${fileName}.txt`;
      RNFS.writeFile(fileNamePath, xml, 'utf8')
        .then(() => {
          alert(`Файл збережено: ${fileNamePath}`);
        })
        .catch((err) => {
          alert(err.message);
        });
    } catch (e) {
      alert('Помилка при збереженні файлу =(');
    }
  };
}

function validateFields() {
  return (dispatch, getState) => {
    const state: ApplicationState = getState();
    [
      'center',
      'fromPoint',
      'toPoint',
    ].forEach((fieldName: FieldName) => {
      const errorMessage = validateCoordinatesString(Selectors[`${fieldName}$`](state));
      if (errorMessage) {
        dispatch(Actions.fieldInvalid(fieldName, errorMessage));
      }
    });

    [
      'radius',
      'cellSize',
    ].forEach((fieldName: FieldName) => {
      const errorMessage = validateNumberString(Selectors[`${fieldName}$`](state));
      if (errorMessage) {
        dispatch(Actions.fieldInvalid(fieldName, errorMessage));
      }
    });
  };
}

function validateCoordinatesString(value: string): string {
  if (!value) {
    return 'Це поле обов\'язкове';
  }
  const regex = /^(\d)+(.(\d)+)?,(\d)+(.(\d)+)?$/;
  return regex.test(value) ? '' : 'Не валідні координати';
}

function validateNumberString(value: string): string {
  if (!value) {
    return 'Це поле обов\'язкове';
  }
  const regex = /^(\d)+(.(\d)=)?$/;
  return regex.test(value) ? '' : 'Не валідне число';
}

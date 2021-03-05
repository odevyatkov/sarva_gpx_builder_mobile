import {
  combineReducers,
  ReducersMapObject,
} from 'redux';
import screen from '../modules/screen/redux/reducer';
import generatorForm from '../modules/generatorForm/redux/reducer';

const appReducers: ReducersMapObject = {
  screen,
  generatorForm,
};

const reducers = combineReducers(appReducers);
export default reducers;

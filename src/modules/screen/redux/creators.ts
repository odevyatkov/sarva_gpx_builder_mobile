import ScreenName from '../enums/ScreenName';
import * as Actions from './actions';

export function activeScreenSet(screenName: ScreenName) {
  return (dispatch) => {
    dispatch(Actions.activeScreenSet(screenName));
  };
}

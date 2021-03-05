import ScreenState from './interfaces/ScreenState';

import ScreenName from '../enums/ScreenName';
import ScreenActionType from './enums/ScreenActionType';

export const initTasksState: ScreenState = {
  activeScreen: ScreenName.BuildByCenter,
};

export default function reducer(state: ScreenState = initTasksState, action: any): ScreenState {
  switch (action.type) {
    case ScreenActionType.ActiveScreenSet:
      return {
        ...state,
        activeScreen: action.screenName,
      };

    default:
      return state;
  }
}

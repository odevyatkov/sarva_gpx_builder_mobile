import ScreenActionType from './enums/ScreenActionType';
import ScreenName from '../enums/ScreenName';

export function activeScreenSet(screenName: ScreenName): any {
  return {
    type: ScreenActionType.ActiveScreenSet,
    screenName,
  };
}

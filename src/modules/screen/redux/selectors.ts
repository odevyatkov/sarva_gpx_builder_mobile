import ScreenName from '../enums/ScreenName';
import ApplicationState from '../../../redux/interfaces/ApplicationState';

export const activeScreen$ = (state: ApplicationState): ScreenName => state.screen.activeScreen;

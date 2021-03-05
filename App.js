import React from 'react';
import {StatusBar} from 'react-native';

import ReduxedApp from './src/redux/ReduxedApp';
import ScreenFooter from './src/containers/ScreenFooter';
import AppScreen from './src/containers/AppScreen';

const App: () => React$Node = () => {
  return (
    <ReduxedApp>
      <StatusBar barStyle="dark-content" />
      <AppScreen />
      <ScreenFooter />
    </ReduxedApp>
  );
};

export default App;

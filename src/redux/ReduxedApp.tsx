import * as React from 'react';
import {Provider} from 'react-redux';
import {
  applyMiddleware,
  compose,
  createStore,
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';

const composeEnhancers = window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(
    thunkMiddleware,
  )),
);

class ReduxedApp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    );
  }
}

export default ReduxedApp;

import React, { Component } from 'react';
import ScreenStack from './navigators/AppNavigation';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import rootState from './reducers/rootState';

const store = createStore(rootReducer, rootState)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ScreenStack />
      </Provider>
    );
  }
}
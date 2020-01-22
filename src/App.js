import React, { Component } from 'react';
import ScreenStack from './navigators/AppNavigation';
import { Provider } from 'react-redux';
import store from './redux';


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <ScreenStack />
      </Provider>
    );
  }
}
import React, { Component } from 'react';
import './App.css';

import { Provider } from 'react-redux';
import WeatherApp from './WeatherApp';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <WeatherApp />
      </Provider>
    );
  }
}

export default App;

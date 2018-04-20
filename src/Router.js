import React, { Component } from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';

import Home from './scenes/Home'
export default class RouterComponent extends Component {
  render() {
    return (
      <Router>
        <Stack>
          <Scene key="welcome" component={Home} hideNavBar />
        </Stack>
      </Router>
    );
  }
}


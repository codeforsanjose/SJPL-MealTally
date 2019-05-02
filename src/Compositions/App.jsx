import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import NavigationComponent from './navigation/NavigationComponent'

require('./App.css');


export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <MuiThemeProvider>
            <NavigationComponent />
        </MuiThemeProvider>
    );
  }
}


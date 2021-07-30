import * as React from 'react';
import { AppRegistry } from 'react-native';
import App from './src/containers/App';
import { name as appName } from './app.json';
import ServiceContainer from './src/services/ServiceContainer';

class AppContainer extends React.Component {
  render() {
    ServiceContainer.instantiate();
    return <App />;
  }
}

AppRegistry.registerComponent(appName, () => AppContainer);

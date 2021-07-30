import 'react-native-gesture-handler';
import * as React from 'react';
// import { Provider } from 'inversify-react';
import { NavigationContainer } from '@react-navigation/native';
import { MainStack } from '../components/navigationComponents/stacks/MainStack';
// import { container } from '../services/DependencyInjectionContainer';

const App = (): JSX.Element => {
  return (
    //<Provider container={container}>
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
    //</Provider>
  );
};

export default App;

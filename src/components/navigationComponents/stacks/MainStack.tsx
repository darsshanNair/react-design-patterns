import * as React from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

// Screen imports
import HomeScreen from '../../../containers/home/HomeScreen';
import UserInfoScreen from '../../../containers/userInfo/UserInfoScreen';

// View-Model imports
import { HomeViewModel } from '../../../viewModels/HomeViewModel';
import { UserInfoViewModel } from '../../../viewModels/UserInfoViewModel';

export type RootStackParamList = {
  Home: undefined;
  UserInfo: undefined;
};

export type MainStackNavProps<T extends keyof RootStackParamList> = {
  navigation: StackNavigationProp<RootStackParamList, T>;
  route: RouteProp<RootStackParamList, T>;
};

const Stack = createStackNavigator<RootStackParamList>();

export const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName={'UserInfo'}>
      <Stack.Screen name="Home" options={{ headerShown: false }}>
        {(props: any) => (
          // Initialise and pass in view model as a prop
          <HomeScreen {...props} viewModel={new HomeViewModel()} />
        )}
      </Stack.Screen>
      <Stack.Screen name="UserInfo" options={{ headerShown: false }}>
        {(props: any) => (
          // Initialise and pass in view model as a prop
          <UserInfoScreen {...props} viewModel={new UserInfoViewModel()} />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

import React from 'react';
import { RouteProp } from '@react-navigation/core';
import { createStackNavigator, StackNavigationProp, StackNavigationOptions } from '@react-navigation/stack';
import SignIn from 'pages/Auth/SignIn';
import { ThemeState } from 'store/theme';
import AppRoute from './app-routes';
import { AppNavigatorParams } from './app.navigator';

type AuthNavigatorParams = AppNavigatorParams & {
  [AppRoute.SIGN_IN]: undefined,
};

export interface SignInProps {
  navigation: StackNavigationProp<AuthNavigatorParams, AppRoute.SIGN_IN>,
  route: RouteProp<AuthNavigatorParams, AppRoute.SIGN_IN>,
  theme: ThemeState,
  signIn?: Function,
}

const Stack = createStackNavigator<AuthNavigatorParams>();

const screenOptions: StackNavigationOptions = {
};

const AuthNavigator = (): React.ReactElement =>
  <Stack.Navigator headerMode='none' initialRouteName={AppRoute.SIGN_IN}>
    <Stack.Screen name={AppRoute.SIGN_IN} component={SignIn} options={screenOptions} />
  </Stack.Navigator>
;

export default AuthNavigator;

import React from 'react';
import { RouteProp } from '@react-navigation/core';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import Loading from 'pages/Loading';
import { LoadingState } from 'store/loading';
import AppRoute from './app-routes';
import { AppNavigatorParams } from './app.navigator';

type LoadingNavigatorParams = AppNavigatorParams & {
  [AppRoute.LOADING]: undefined;
}

export interface LoadingProps {
  navigation?: StackNavigationProp<LoadingNavigatorParams, AppRoute.LOADING>,
  route: RouteProp<LoadingNavigatorParams, AppRoute.LOADING>,
  loading?: LoadingState,
  toggleLoading?: Function,
}

const Stack = createStackNavigator<LoadingNavigatorParams>();

const LoadingNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode='none' initialRouteName={AppRoute.LOADING}>
    <Stack.Screen name={AppRoute.LOADING} component={Loading} />
  </Stack.Navigator>
);

export default LoadingNavigator;

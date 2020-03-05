import React from 'react';
import { createBottomTabNavigator, BottomTabBarProps } from '@react-navigation/bottom-tabs';
import Home from 'pages/Home';
import Settings from 'pages/Settings';
import Account from 'pages/Account';
import AppRoute from './app-routes';
import HomeTabNavigator from './components/HomeTabNavigator';

export type HomeNavigatorParams = {
  [AppRoute.HOME]: undefined,
  [AppRoute.SETTINGS]: undefined,
  [AppRoute.ACCOUNT]: undefined,
};

const TabNavigator = createBottomTabNavigator<HomeNavigatorParams>();

const HomeNavigator = (): React.ReactElement =>
  <TabNavigator.Navigator tabBar={(props: BottomTabBarProps): React.ReactElement => <HomeTabNavigator {...props}/>}>
    <TabNavigator.Screen
      name={AppRoute.HOME}
      component={Home}
      options={{
        title: 'Home',
      }}
    />
    <TabNavigator.Screen
      name={AppRoute.SETTINGS}
      component={Settings}
      options={{
        title: 'Settings',
      }}
    />
    <TabNavigator.Screen
      name={AppRoute.ACCOUNT}
      component={Account}
      options={{
        title: 'Account',
      }}
    />
  </TabNavigator.Navigator>
;

export default HomeNavigator;

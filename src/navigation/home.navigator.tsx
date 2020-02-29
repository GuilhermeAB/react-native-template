import React from 'react';
import { createDrawerNavigator, DrawerNavigationProp } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { RouteProp } from '@react-navigation/core';
import Home from 'pages/Home';
import Settings from 'pages/Settings';
// import { ThemeState, Themes } from 'store/theme';
import { ThemeState, Themes } from 'store/theme';
import AppRoute from './app-routes';

type HomeNavigatorParams = {
  [AppRoute.HOME]: undefined,
  [AppRoute.SETTINGS]: undefined,
};

export interface HomeProps {
  navigation: DrawerNavigationProp<HomeNavigatorParams, AppRoute.HOME>,
  route: RouteProp<HomeNavigatorParams, AppRoute.HOME>,
  theme: ThemeState,
  changeTheme: (name: Themes) => void,
  signOut: () => void,
}

export interface SettingsProps {
  navigation: DrawerNavigationProp<HomeNavigatorParams, AppRoute.SETTINGS>,
}

const Drawer = createDrawerNavigator<HomeNavigatorParams>();

const HomeNavigator = (): React.ReactElement =>
  <Drawer.Navigator initialRouteName={AppRoute.HOME}>
    <Drawer.Screen
      name={AppRoute.HOME}
      component={Home}
      options={{
        title: 'Home',
        drawerIcon: (): Element => <Icon name='plus' />,
      }}
    />
    <Drawer.Screen
      name={AppRoute.SETTINGS}
      component={Settings}
      options={{
        title: 'Settings',
        drawerIcon: (): Element => <Icon name='plus' />,
      }}
    />
  </Drawer.Navigator>
;

export default HomeNavigator;

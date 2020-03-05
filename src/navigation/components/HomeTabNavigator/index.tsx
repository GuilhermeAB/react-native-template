import React from 'react';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
// import Home from 'pages/Home';
// import Settings from 'pages/Settings';
import AppRoute from 'navigation/app-routes';
import { AppState } from 'store/';
import { connect } from 'react-redux';
import { ThemeState } from 'store/theme';
import { BottomNavigator, Button, Icon } from './styles';

export type HomeTabProps = {
  theme: ThemeState,
} & BottomTabBarProps;

const HomeTabNavigator = ({ state, navigation, theme }: HomeTabProps): React.ReactElement => {
  function navigateTo (routeName: string): void {
    navigation.navigate(routeName);
  }

  return (
    <BottomNavigator height={50}>
      <Button
        theme={theme}
        isActive={state.index === 0}
        onPress={(): void => navigateTo(AppRoute.HOME)}
      >
        <Icon
          theme={theme}
          isActive={state.index === 0}
          name='home'
        />
      </Button>
      <Button
        theme={theme}
        isActive={state.index === 1}
        onPress={(): void => navigateTo(AppRoute.SETTINGS)}
      >
        <Icon
          theme={theme}
          isActive={state.index === 1}
          name='settings'
        />
      </Button>
      <Button
        theme={theme}
        isActive={state.index === 2}
        onPress={(): void => navigateTo(AppRoute.ACCOUNT)}
      >
        <Icon
          theme={theme}
          isActive={state.index === 2}
          name='account'
        />
      </Button>
    </BottomNavigator>
  );
};

const mapStateToProps = (state: AppState, props: BottomTabBarProps): any => ({
  theme: state.theme,
  props: props,
});

export default connect(mapStateToProps, undefined)(HomeTabNavigator);

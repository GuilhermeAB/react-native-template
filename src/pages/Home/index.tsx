import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { signOutAction } from 'store/auth';
import { changeThemeAction, Themes } from 'store/theme';
import { AppState } from 'store/';
import { HomeProps } from 'navigation/home.navigator';
import AppRoute from 'navigation/app-routes';
import { Card, Text, Button } from 'react-native-paper';

const Home = ({
  navigation, signOut, changeTheme, theme,
}: HomeProps): any => {
  function toLogin (): void {
    navigation.navigate(AppRoute.SETTINGS);
  }

  function toggleTheme (): void {
    if (theme.name === Themes.LIGHT_THEME) {
      changeTheme(Themes.DARK_THEME);
    } else {
      changeTheme(Themes.LIGHT_THEME);
    }
  }

  return (
    <Card>
      <Card.Content>
        <Text> Home ;D</Text>
        <Button mode='contained' onPress={(): void => toLogin()}>
          <Text>Settings</Text>
        </Button>
        <Button mode='contained' onPress={(): void => toggleTheme()}>
          <Text>Toggle Theme</Text>
        </Button>
        <Button mode='contained' onPress={(): void => signOut()}>
          <Text>Sign Out</Text>
        </Button>
      </Card.Content>
    </Card>
  );
};

const mapStateToProps = (state: AppState, props: HomeProps): any => ({
  theme: state.theme,
  props: props,
});

const mapDispatchToProps = (dispatch: Dispatch): any => ({
  changeTheme: (name: Themes): void => {
    dispatch(changeThemeAction(name));
  },
  signOut: (): void => {
    dispatch(signOutAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

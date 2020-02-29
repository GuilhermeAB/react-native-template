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
}: HomeProps) => {
  function toLogin () {
    navigation.navigate(AppRoute.SETTINGS);
  }

  function toggleTheme () {
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
        <Button mode='contained' onPress={() => toLogin()}>
          <Text>Settings</Text>
        </Button>
        <Button mode='contained' onPress={() => toggleTheme()}>
          <Text>Toggle Theme</Text>
        </Button>
        <Button mode='contained' onPress={() => signOut()}>
          <Text>Sign Out</Text>
        </Button>
      </Card.Content>
    </Card>
  );
};

const mapStateToProps = (state: AppState, props: HomeProps) => ({
  theme: state.theme,
  props: props,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  changeTheme: (name: Themes) => {
    dispatch(changeThemeAction(name));
  },
  signOut: () => {
    dispatch(signOutAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

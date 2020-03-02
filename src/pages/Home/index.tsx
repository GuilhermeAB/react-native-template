import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { signOutAction } from 'store/auth';
import { changeThemeAction, Themes } from 'store/theme';
import { AppState } from 'store/';
import { HomeProps } from 'navigation/home.navigator';
import AppRoute from 'navigation/app-routes';
import DotBackground from 'components/DotBackground';
import { Grid, Col } from 'components/Grid';
import Button from 'components/Button';
import { Appbar } from 'react-native-paper';

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
    <DotBackground>
      <Appbar>
        <Appbar.Action icon='menu' onPress={(): void => navigation.openDrawer()} />
        <Appbar.Content title='Home' />
      </Appbar>
      <Grid width={[1]}>
        <Col px='20px'>
          <Button mt='1' mode='contained' onPress={(): void => toLogin()}>Settings</Button>
          <Button mt='1' mode='contained' onPress={(): void => toggleTheme()}>Toggle Theme</Button>
          <Button mt='1' mode='contained' onPress={(): void => signOut()}>Sign Out</Button>
        </Col>
      </Grid>
    </DotBackground>
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

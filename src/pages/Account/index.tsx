import React, { useState } from 'react';
import DotBackground from 'components/DotBackground';
import { Row } from 'components/Grid';
import { Themes, ThemeState, ChangeThemeAction } from 'store/theme';
import { AppState } from 'store/';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { useTranslation } from 'react-i18next';
import { SignOutAction, AuthState } from 'store/auth';
import { Avatar, Appbar, Menu, Portal, Dialog, Paragraph } from 'react-native-paper';
import Button from 'components/Button';

export type AccountProps = {
  theme: ThemeState,
  auth: AuthState,
  changeTheme: (name: Themes) => void,
  signOut: () => void,
};

const Account = ({ theme, auth, changeTheme, signOut }: AccountProps): any => {
  const { t } = useTranslation();
  const [showMenuUserOptions, setShowMenuUserOptions] = useState(false);
  const [showConfirmSignout, setShowConfirmSignout] = useState(false);

  function toggleTheme (): void {
    if (theme.name === Themes.LIGHT_THEME) {
      changeTheme(Themes.DARK_THEME);
    } else {
      changeTheme(Themes.LIGHT_THEME);
    }
  }

  return (
    <DotBackground>
      <Row height={70} alignItems='center' bg={theme.style.colors.primary}>
        <Avatar.Image size={60} source={{ uri: auth.user?.avatar }} style={{ marginLeft: 5 }} />
        <Appbar.Content title={auth.user?.name} subtitle={auth.user?.login} />
        <Menu
          visible={showMenuUserOptions}
          onDismiss={(): void => setShowMenuUserOptions(false)}
          anchor={
            <Appbar.Action icon='dots-vertical' color='#fff' onPress={(): void => setShowMenuUserOptions(true)} />
          }
        >
          <Menu.Item
            icon='account'
            title={t('PROFILE')}
          />
          <Menu.Item
            icon={theme.style.dark ? 'weather-sunny' : 'weather-night'}
            title={theme.style.dark ? t('LIGHT_THEME') : t('DARK_THEME')}
            onPress={toggleTheme}
          />
          <Menu.Item
            icon='logout'
            title={t('SIGN_OUT')}
            onPress={(): void => {
              setShowMenuUserOptions(false); setShowConfirmSignout(true);
            }}
          />
        </Menu>
      </Row>

      <Portal>
        <Dialog visible={showConfirmSignout} onDismiss={(): void => setShowConfirmSignout(false)}>
          <Dialog.Content>
            <Paragraph>{t('REALLY_WANT_DISCONNECT?')}</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={(): void => setShowConfirmSignout(false)}>
              {t('CANCEL')}
            </Button>
            <Button onPress={signOut}>
              {t('CONFIRM')}
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </DotBackground>
  );
};

const mapStateToProps = (state: AppState, props: AccountProps): any => ({
  theme: state.theme,
  auth: state.auth,
  props: props,
});

const mapDispatchToProps = (dispatch: Dispatch): any => ({
  changeTheme: (name: Themes): void => {
    dispatch(ChangeThemeAction(name));
  },
  signOut: (): void => {
    dispatch(SignOutAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);

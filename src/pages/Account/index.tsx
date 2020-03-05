import React from 'react';
import DotBackground from 'components/DotBackground';
import { Grid, Col } from 'components/Grid';
import Button from 'components/Button';
import { Themes, ThemeState, ChangeThemeAction } from 'store/theme';
import { AppState } from 'store/';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { useTranslation } from 'react-i18next';

export type AccountProps = {
  theme: ThemeState,
  changeTheme: (name: Themes) => void,
};

const Account = ({ theme, changeTheme }: AccountProps): any => {
  const { t } = useTranslation();

  function toggleTheme (): void {
    if (theme.name === Themes.LIGHT_THEME) {
      changeTheme(Themes.DARK_THEME);
    } else {
      changeTheme(Themes.LIGHT_THEME);
    }
  }

  return (
    <DotBackground>
      <Grid width={[1]}>
        <Col px='20px'>
          <Button mt='1' mode='contained' onPress={(): void => toggleTheme()}>
            {t('TOGGLE_THEME')}
          </Button>
        </Col>
      </Grid>
    </DotBackground>
  );
};

const mapStateToProps = (state: AppState, props: AccountProps): any => ({
  theme: state.theme,
  props: props,
});

const mapDispatchToProps = (dispatch: Dispatch): any => ({
  changeTheme: (name: Themes): void => {
    dispatch(ChangeThemeAction(name));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);

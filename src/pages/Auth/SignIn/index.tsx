import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { SignInAction } from 'store/auth';
import { SignInProps } from 'navigation/auth.navigator';
import {
  Headline,
  Caption,
  Divider,
} from 'react-native-paper';
import { Grid, Col, Row } from 'components/Grid';
import Button from 'components/Button';
import TextField from 'components/Inputs/TextField';
import { AppState } from 'store/';
import DotBackground from 'components/DotBackground';
import { useTranslation } from 'react-i18next';
import ChangeLanguage from 'components/ChangeLanguage';
import { SignInLogo } from './styles';

const SignIn = ({ signIn }: SignInProps): any => {
  const { t } = useTranslation();

  const [userName, onChangeUserName] = useState();
  const [userPassword, onChangeUserPassword] = useState();

  function logIn (): void {
    if (signIn) {
      signIn();
    }
  }

  return (
    <DotBackground>
      <Grid width={[1]} display='flex' alignItems='center'>
        <Col px='20px'>
          <Row alignItems='center' justifyContent='center' height={200}>
            <SignInLogo width={230} mt={3} />
          </Row>
          <Col>
            <Headline>{t('LOGIN')}</Headline>
            <TextField
              autoCompleteType='username'
              clearButtonMode='while-editing'
              label={t('USERNAME')}
              onChangeText={(text: string): void => onChangeUserName(text)}
              value={userName}
            />
            <TextField
              autoCompleteType='password'
              secureTextEntry={true}
              clearButtonMode='while-editing'
              returnKeyType='done'
              label={t('PASSWORD')}
              mt='1'
              onChangeText={(text: string): void => onChangeUserPassword(text)}
              value={userPassword}
            />

            <Button mode='text'>
              <Caption>{t('FORGOT_PASSWORD?')}</Caption>
            </Button>

            <Button
              mt='3'
              mode='contained'
              onPress={(): void => logIn()}
            >
              {t('LOGIN')}
            </Button>

            <Button mt='1' mb='4' mode='text'>{t('DONT_HAVE_ACCOUNT?')}</Button>

            <Divider />

            <ChangeLanguage />
          </Col>
        </Col>
      </Grid>
    </DotBackground>
  );
};

const mapStateToProps = (state: AppState, props: SignInProps): any => ({
  theme: state.theme,
  props: props,
});

const mapDispatchToProps = (dispatch: Dispatch): any => ({
  signIn: (): void => {
    dispatch(SignInAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

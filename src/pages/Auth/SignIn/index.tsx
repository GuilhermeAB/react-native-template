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
import { ScrollView } from 'react-native-gesture-handler';
import { SignInLogo } from './styles';

const SignIn = (props: SignInProps): any => {
  const { signIn } = props;
  const { t } = useTranslation();

  const [username, onChangeUsername] = useState<string>();
  const [password, onChangePassword] = useState<string>();

  async function logIn (): Promise<void> {
    try {
      await signIn(username, password);
    } catch (e) {
      throw new Error(e);
    }
  }

  return (
    <DotBackground>
      <ScrollView>
        <Grid width={[1]} display='flex' alignItems='center'>
          <Col px='20px'>
            <Row alignItems='center' justifyContent='center' height={200}>
              <SignInLogo width={230} mt={3} />
            </Row>
            <Col>
              <Headline>{t('LOGIN')}</Headline>
              <TextField
                dense
                autoCompleteType='username'
                clearButtonMode='while-editing'
                label={t('USERNAME')}
                returnKeyType='next'
                onChangeText={(text: string): void => onChangeUsername(text)}
                value={username}
              />
              <TextField
                dense
                autoCompleteType='password'
                secureTextEntry={true}
                clearButtonMode='while-editing'
                returnKeyType='done'
                label={t('PASSWORD')}
                mt='1'
                onChangeText={(text: string): void => onChangePassword(text)}
                value={password}
              />

              <Button compact mode='text'>
                <Caption>{t('FORGOT_PASSWORD?')}</Caption>
              </Button>

              <Button
                compact
                mt='3'
                mode='contained'
                onPress={logIn}
              >
                {t('LOGIN')}
              </Button>

              <Button compact mt='1' mb='4' mode='text'>{t('DONT_HAVE_ACCOUNT?')}</Button>

              <Divider />

              <ChangeLanguage />
            </Col>
          </Col>
        </Grid>
      </ScrollView>
    </DotBackground>
  );
};

const mapStateToProps = (state: AppState, props: SignInProps): any => ({
  theme: state.theme,
  props: props,
});

const mapDispatchToProps = (dispatch: Dispatch): any => ({
  signIn: async (username: string, password: string): Promise<void> => {
    dispatch(await SignInAction(username, password));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

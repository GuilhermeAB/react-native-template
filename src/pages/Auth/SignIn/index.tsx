import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { signInAction } from 'store/auth';
import { SignInProps } from 'navigation/auth.navigator';
import {
  Card,
  TextInput,
  Button,
  Text,
} from 'react-native-paper';
import { Grid, Col } from 'react-native-easy-grid';
import styles from './styles';

const SignIn = ({ signIn }: SignInProps) => {
  const [userName, onChangeUserName] = React.useState();
  const [userPassword, onChangeUserPassword] = React.useState();

  function logIn (): void {
    if (signIn) {
      signIn();
    }
  }

  return (
    <Grid>
      <Col style={styles.col}>
        <Card elevation={0} style={styles.card}>
          <Card.Title title='Login' />
          <Card.Content>
            <TextInput
              autoCompleteType='username'
              clearButtonMode='while-editing'
              label='Username'
              onChangeText={text => onChangeUserName(text)}
              value={userName}
            />
            <TextInput
              autoCompleteType='password'
              secureTextEntry={true}
              clearButtonMode='while-editing'
              returnKeyType='done'
              label='Password'
              onChangeText={text => onChangeUserPassword(text)}
              value={userPassword}
            />

            <Button mode='contained' onPress={() => logIn()}>
              <Text>Login</Text>
            </Button>
          </Card.Content>
        </Card>
      </Col>
    </Grid>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  signIn: () => {
    dispatch(signInAction());
  },
});

export default connect(undefined, mapDispatchToProps)(SignIn);

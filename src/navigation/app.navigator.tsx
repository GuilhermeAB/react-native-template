import React from 'react';
// import * as firebase from 'firebase';
import { connect } from 'react-redux';
import { AppState } from 'store/';
import { AuthState } from 'store/auth';
import { LoadingState } from 'store/loading';
import AuthNavigator from './auth.navigator';
import HomeNavigator from './home.navigator';
import LoadingNavigator from './loading.navigator';
import AppRoute from './app-routes';

// const firebaseConfig = {
//   apiKey: 'AIzaSyCwuJbh4T-hB0sOiuElLKCI0eTx97hCCHI',
//   authDomain: 'safty-727bd.firebaseapp.com',
//   databaseURL: 'https://safty-727bd.firebaseio.com',
//   projectId: 'safty-727bd',
//   storageBucket: 'safty-727bd.appspot.com',
//   messagingSenderId: '813029939328',
//   appId: '1:813029939328:web:fb3b7faa32196cb21c2e65',
//   measurementId: 'G-08DH60S3NL',
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

export type AppNavigatorParams = {
  [AppRoute.AUTH]: undefined,
  [AppRoute.HOME]: undefined,
  [AppRoute.LOADING]: undefined,
};

export interface AppProps {
  auth?: AuthState,
  loading?: LoadingState,
}

const AppNavigator = ({ loading, auth }: AppProps): React.ReactElement => {
  const { isLoading } = loading ?? { isLoading: true };
  const { isAuthenticated } = auth ?? { isLoading: true };

  return isLoading ?
    <LoadingNavigator />
    : isAuthenticated ? <HomeNavigator /> : <AuthNavigator />;
};

const mapStateToProps = (state: AppState): any => ({
  auth: state.auth,
  loading: state.loading,
});

export default connect(mapStateToProps)(AppNavigator);

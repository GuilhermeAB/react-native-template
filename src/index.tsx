import React from 'react';
import { Provider as StoreProvider, connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import store, { AppState } from 'store/';
import AppNavigator from 'navigation/app.navigator';
import { Provider as PaperProvider } from 'react-native-paper';
import { ThemeState } from 'store/theme';
import FlashMessage from 'react-native-flash-message';

export type Props = {
  theme: ThemeState,
}

const AppWrapper = ({ theme }: Props) => (
  <PaperProvider theme={theme.style}>
    <NavigationContainer>
      <AppNavigator />
      <FlashMessage position='top' />
    </NavigationContainer>
  </PaperProvider>
);

const mapStateToProps = (state: AppState) => ({
  theme: state.theme,
});

const App = connect(mapStateToProps)(AppWrapper);

export default function () {
  return (
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  );
}

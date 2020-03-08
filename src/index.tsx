import React from 'react';
import { Provider as StoreProvider, connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import store, { AppState } from 'store/';
import AppNavigator from 'navigation/app.navigator';
import { Provider as PaperProvider } from 'react-native-paper';
import { ThemeState, initialState } from 'store/theme';
import FlashMessage from 'react-native-flash-message';
import i18n from './i18n';

export type Props = {
  theme: ThemeState,
};

const AppWrapper = (props?: Props): any => {
  const { theme } = props ?? { theme: initialState };
  i18n.changeLanguage(store.getState().i18n.lang);

  return (
    <PaperProvider theme={theme.style}>
      <NavigationContainer>
        <AppNavigator />
        <FlashMessage position='top' />
      </NavigationContainer>
    </PaperProvider>
  );
};

const mapStateToProps = (state: AppState): any => ({
  theme: state.theme,
});

const App = connect(mapStateToProps)(AppWrapper);

export default function (): any {
  return (
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  );
}

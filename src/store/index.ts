import {
  createStore, combineReducers, applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import auth, { AuthState } from './auth';
import theme, { ThemeState } from './theme';
import loading, { LoadingState } from './loading';
import i18n, { I18nState } from './i18n';

export type AppState = {
  theme: ThemeState,
  loading: LoadingState,
  auth: AuthState,
  i18n: I18nState,
};

const combinedReducers = combineReducers(
  {
    loading: loading,
    theme: persistReducer<ThemeState>(
      {
        key: 'theme',
        storage: AsyncStorage,
      },
      theme as any,
    ),
    auth: persistReducer<AuthState>(
      {
        key: 'auth',
        storage: AsyncStorage,
      },
      auth as any,
    ),
    i18n: persistReducer<I18nState>(
      {
        key: 'i18n',
        storage: AsyncStorage,
      },
      i18n as any,
    ),
  },
);

const persistedReducer = persistReducer(
  {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['auth', 'theme', 'i18n'],
  },
  combinedReducers,
);

const store = createStore(persistedReducer, applyMiddleware(thunk));
persistStore(store);

export default store;

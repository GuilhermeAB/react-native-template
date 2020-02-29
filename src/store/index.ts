import {
  createStore, combineReducers, applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import auth, { AuthState } from './auth';
import theme, { ThemeState } from './theme';
import loading, { LoadingState } from './loading';

export type AppState = {
  theme: ThemeState,
  loading: LoadingState,
  auth: AuthState,
}

const combinedReducers = combineReducers(
  {
    loading: loading,
    theme: persistReducer(
      {
        key: 'theme',
        storage: AsyncStorage,
      },
      theme,
    ),
    auth: persistReducer(
      {
        key: 'auth',
        storage: AsyncStorage,
      },
      auth,
    ),
  },
);

const persistedReducer = persistReducer(
  {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['auth', 'theme'],
  },
  combinedReducers,
);

const store = createStore(persistedReducer, applyMiddleware(thunk));
persistStore(store);

export default store;

import { showMessage } from 'react-native-flash-message';

// Action Types

export type AuthState = {
  isAuthenticated: boolean,
};

const SIGN_IN = 'SIGN_IN';
const SIGN_OUT = 'SIGN_OUT';

export type SignInAction = {
  type: 'SIGN_IN',
  auth: AuthState,
};

export type SignOutAction = {
  type: 'SIGN_OUT',
  auth: AuthState,
};

// Reducer

export type AuthAction = SignInAction | SignOutAction;

const initialState: AuthState = {
  isAuthenticated: false,
};

const reducer = (action: AuthAction, state: AuthState = initialState): AuthState => {
  switch (action.type) {
    case SIGN_IN:
      return {
        isAuthenticated: true,
      };
    case SIGN_OUT:
      return {
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default reducer;

// Actions

export const signInAction = (): AuthAction => {
  showMessage({
    message: 'Bem Vindo!',
    description: 'Ola, {user}',
    icon: 'success',
    type: 'success',
    duration: 1500,
  });

  return {
    type: SIGN_IN,
    auth: {
      isAuthenticated: true,
    },
  };
};

export const signOutAction = (): AuthAction => ({
  type: SIGN_OUT,
  auth: {
    isAuthenticated: false,
  },
});

import { showMessage } from 'react-native-flash-message';
import i18n from 'i18n';

// Action Types

export type AuthState = {
  isAuthenticated: boolean,
};

const SIGN_IN = 'SIGN_IN';
const SIGN_OUT = 'SIGN_OUT';

export type SignInActionType = {
  type: 'SIGN_IN',
  auth: AuthState,
};

export type SignOutActionType = {
  type: 'SIGN_OUT',
  auth: AuthState,
};

// Reducer

export type AuthAction = SignInActionType | SignOutActionType;

const initialState: AuthState = {
  isAuthenticated: false,
};

const reducer = (state: AuthState = initialState, action: AuthAction): AuthState => {
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

export const SignInAction = (): AuthAction => {
  showMessage({
    message: i18n.t('WELCOME'),
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

export const SignOutAction = (): AuthAction => ({
  type: SIGN_OUT,
  auth: {
    isAuthenticated: false,
  },
});

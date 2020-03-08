import { request } from 'util/request/request';

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

export const SignInAction = async (username: string, password: string): Promise<AuthAction> => {
  try {
    await request({
      url: 'Login',
      params: {
        USERNAME: username,
        PASSWORD: password,
      },
    });

    return {
      type: SIGN_IN,
      auth: {
        isAuthenticated: true,
      },
    };
  } catch (e) {
    return {
      type: SIGN_OUT,
      auth: {
        isAuthenticated: false,
      },
    };
  }
};

export const SignOutAction = (): AuthAction => ({
  type: SIGN_OUT,
  auth: {
    isAuthenticated: false,
  },
});

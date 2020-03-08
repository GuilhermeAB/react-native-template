import { request } from 'util/request/request';

// Action Types

export type AuthState = {
  isAuthenticated: boolean,
  user?: {
    id: number,
    name: string,
    email: string,
    login: string,
    token: string,
    avatar: string,
    country?: string,
  },
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
        user: action.auth.user,
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
    const response = await request({
      url: 'Login',
      params: {
        USERNAME: username,
        PASSWORD: password,
      },
    });

    const { USER } = response.data;

    return {
      type: SIGN_IN,
      auth: {
        isAuthenticated: true,
        user: {
          id: USER.ID,
          name: USER.NAME,
          email: USER.EMAIL,
          login: USER.LOGIN,
          token: USER.TOKEN,
          avatar: USER.AVATAR,
          country: USER.COUNTRY,
        },
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

import store from 'store/';

// Action Types

export type LoadingState = {
  isLoading: boolean,
};

const SHOW_LOADING = 'SHOW_LOADING';
const HIDE_LOADING = 'HIDE_LOADING';

export type ToggleLoadingActionType = {
  type: 'SHOW_LOADING' | 'HIDE_LOADING',
  loading: LoadingState,
};

// Reducer

export type LoadingActionType = ToggleLoadingActionType;

const initialState: LoadingState = {
  isLoading: true,
};

const reducer = (state: LoadingState = initialState, action: LoadingActionType): LoadingState => {
  switch (action.type) {
    case SHOW_LOADING:
      return { isLoading: true };
    case HIDE_LOADING:
      return { isLoading: false };
    default:
      return state;
  }
};

export default reducer;

// Actions

export const ToggleLoadingAction = (): ToggleLoadingActionType => {
  const { isLoading } = store.getState().loading;

  return {
    type: isLoading ? HIDE_LOADING : SHOW_LOADING,
    loading: {
      isLoading: !isLoading,
    },
  };
};

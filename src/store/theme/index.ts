import { Theme } from 'react-native-paper';
import light from './themes/light';
import dark from './themes/dark';

// Action Types

export enum Themes {
  'DARK_THEME',
  'LIGHT_THEME'
}

export type ThemeState = {
  name: Themes,
  style: Theme,
};

export type ChangeThemeActionType = {
  type: Themes,
};

// Reducer

export type ThemeActionType = ChangeThemeActionType;

export const initialState: ThemeState = {
  name: Themes.LIGHT_THEME,
  style: light,
};

const reducer = (state: ThemeState = initialState, action: ThemeActionType): ThemeState => {
  switch (action.type) {
    case Themes.LIGHT_THEME:
      return {
        name: Themes.LIGHT_THEME, style: light,
      };
    case Themes.DARK_THEME:
      return {
        name: Themes.DARK_THEME, style: dark,
      };
    default:
      return state;
  }
};

export default reducer;

// Actions

export const ChangeThemeAction = (name: Themes): ChangeThemeActionType => ({
  type: name,
});

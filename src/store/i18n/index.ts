export enum LangKeys {
  EN = 'en',
  PTBR = 'pt_BR',
}

// Action Types

export type I18nState = {
  lang: LangKeys,
};

export type ChangeLanguageActionType = {
  type: LangKeys,
  locale: I18nState,
};

// Reducer

export type I18nActionType = ChangeLanguageActionType;

const initialState: I18nState = {
  lang: LangKeys.EN,
};

const reducer = (state: I18nState = initialState, action: I18nActionType): I18nState => {
  if (Object.values(LangKeys).includes(action.type)) {
    return {
      lang: action.locale.lang,
    };
  }

  return state;
};

export default reducer;

// Actions

export const ChangeLanguageAction = (lang: LangKeys): ChangeLanguageActionType => {
  return {
    type: lang,
    locale: {
      lang: lang,
    },
  };
};

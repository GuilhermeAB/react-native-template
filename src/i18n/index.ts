import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import store from 'store/';
import { LangKeys } from 'store/i18n';
import en from './locales/en.json';
import ptBR from './locales/ptBR.json';

const resources = {
  [LangKeys.EN]: {
    translation: en,
  },
  [LangKeys.PTBR]: {
    translation: ptBR,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources: resources,
    lng: store.getState().i18n.lang,
    fallbackLng: store.getState().i18n.lang,
  });

export default i18n;

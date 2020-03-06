import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import ptBR from './locales/ptBR.json';

const resources = {
  en: {
    translation: en,
  },
  ptBR: {
    translation: ptBR,
  },
};

// eslint-disable-next-line @typescript-eslint/no-floating-promises
i18n
  .use(initReactI18next)
  .init({
    resources: resources,
    lng: 'en',
    fallbackLng: 'en',
  });

export default i18n;

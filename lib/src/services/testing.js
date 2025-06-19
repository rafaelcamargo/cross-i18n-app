import i18n from 'i18next';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import { render } from '@testing-library/react';
export * from '@testing-library/react';

let i18nInitialized;

export const customRender = async component => {
  return await render(component)
}

export const mockI18n = (lang = 'pt-BR') => {
  if(!i18nInitialized) {
    i18n
      .use(initReactI18next)
      .init({
        resources: {
          'en-US': {
            translation: {}
          },
          'pt-BR': {
            translation: {}
          }
        },
        lng: 'pt-BR',
        fallbackLng: 'pt-BR',
        interpolation: {
          escapeValue: false
        }
      });
    i18nInitialized = true;
  }
  i18n.changeLanguage(lang);
  return i18n;
}

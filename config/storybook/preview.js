import {addDecorator} from '@storybook/react';
import {StyleDecorator} from '../../src/shared/config/storybook/StyleDecorator';
import {Theme} from '../../src/app/providers/ThemeProvider';
import i18n from './i18next.js';
import {RouterDecorator} from '../../src/shared/config/storybook/RouterDecorator';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  themes: {
    default: Theme.LIGHT,
    list: [
      { name: 'light', class: Theme.LIGHT, color: '#00aced' },
      { name: 'dark', class: Theme.DARK, color: '#3b5998' }
    ],
  },
  i18n,
  locale: 'ru',
  locales: {
    ru: {title: 'Русский', left: '🇷🇺'},
    en: {title: 'English', left: '🇬🇧'},
  },
}

addDecorator(StyleDecorator)
addDecorator(RouterDecorator)


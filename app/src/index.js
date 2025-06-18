import React from 'react';
import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next'
import './index.css';
import HomeView from './views/Home/Home';
import i18n from './i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <HomeView />
    </I18nextProvider>
  </React.StrictMode>
); 

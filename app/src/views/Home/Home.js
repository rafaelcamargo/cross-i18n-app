import React from 'react';
import { useTranslation } from 'react-i18next';
import './Home.css';

function App() {
  const { t, i18n } = useTranslation();
  const setLanguage = lng => i18n.changeLanguage(lng);

  return (
    <div className="App">
      <header className="App-header">
        <h1>{t('home.hello')}</h1>
        <div className="language-selector">
          <label htmlFor="language-select">{t('home.language')}: </label>
          <select
            id="language-select"
            value={i18n.language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="en">{t('home.english')}</option>
            <option value="pt">{t('home.portuguese')}</option>
          </select>
        </div>
      </header>
    </div>
  );
}

export default App; 

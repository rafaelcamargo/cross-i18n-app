import { useTranslation } from 'react-i18next';
import { HelloWorld } from 'cross-i18n-components';
import './Home.css';

function HomeView() {
  const { t, i18n } = useTranslation();
  const setLanguage = lng => i18n.changeLanguage(lng);

  return (
    <div className="home">
      <header className="home-header">
        <HelloWorld i18n={i18n} />
        <div className="language-selector">
          <label htmlFor="language-select">{t('home.language')}: </label>
          <select
            id="language-select"
            value={i18n.language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="en-US">{t('home.english')}</option>
            <option value="pt-BR">{t('home.portuguese')}</option>
          </select>
        </div>
      </header>
    </div>
  );
}

export default HomeView; 

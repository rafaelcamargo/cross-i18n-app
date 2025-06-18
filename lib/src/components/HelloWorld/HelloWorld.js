import { localize } from '../../services/intl';
import pt from './locales/pt-BR.json';
import en from './locales/en-US.json';

const HelloWorld = ({ i18n }) => {
  const { t } = localize(i18n, { pt, en }, 'cec_hello');

  return (
    <div>
      <h1>{t('cec_hello.world')}</h1>
      <p>{t('cec_hello.greeting')}</p>
    </div>
  );
};

export default HelloWorld; 

import { useTranslation } from 'react-i18next';

const HelloWorld = ({ i18n }) => {  
  const { t } = useTranslation('', { i18n });

  return (
    <div>
      <h1>{t('hello.world')}</h1>
      <p>{t('hello.greeting')}</p>
    </div>
  );
};

export default HelloWorld; 

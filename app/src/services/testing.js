import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import userEvent from '@testing-library/user-event';
import i18n from '../i18n';

export * from '@testing-library/react';
export { userEvent };

export const customRender = async component => {
  const user = userEvent.setup();
  const result = await render(
    <I18nextProvider i18n={i18n}>
      {component}
    </I18nextProvider>
  );
  return { ...result, user };
}

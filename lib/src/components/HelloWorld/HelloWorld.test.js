import { customRender, mockI18n, screen } from '../../services/testing';
import HelloWorld from './HelloWorld';

describe('Hello World', () => {
  async function mount({ lang } = {}){
    return await customRender(<HelloWorld i18n={mockI18n(lang)} />);
  }

  it('should render hello world in portuguese by default', async () => {
    await mount();
    expect(screen.getByText('Olá Mundo')).toBeInTheDocument();
    expect(screen.getByText('Bem-vindo ao nosso componente internacionalizado!')).toBeInTheDocument();
  });

  it('should optionally render hello world in english', async () => {
    await mount({ lang: 'en-US' });
    expect(screen.getByText('Hello World')).toBeInTheDocument();
    expect(screen.getByText('Welcome to our internationalized component!')).toBeInTheDocument();
  });
}); 

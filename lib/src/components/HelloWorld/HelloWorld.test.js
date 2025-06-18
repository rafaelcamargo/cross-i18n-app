import React from 'react';
import { render, screen } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HelloWorld from './HelloWorld';
import { translations } from './index';

// Initialize i18next for testing
i18n
  .use(initReactI18next)
  .init({
    resources: {
      'en-US': {
        translation: translations['en-US']
      },
      'pt-BR': {
        translation: translations['pt-BR']
      }
    },
    lng: 'en-US',
    fallbackLng: 'en-US',
    interpolation: {
      escapeValue: false
    }
  });

const TestWrapper = ({ children }) => (
  <I18nextProvider i18n={i18n}>
    {children}
  </I18nextProvider>
);

describe('HelloWorld', () => {
  test('renders hello world in English by default', () => {
    render(
      <TestWrapper>
        <HelloWorld />
      </TestWrapper>
    );
    
    expect(screen.getByText('Hello World')).toBeInTheDocument();
    expect(screen.getByText('Welcome to our internationalized component!')).toBeInTheDocument();
  });

  test('renders hello world in Portuguese when language is changed', () => {
    i18n.changeLanguage('pt-BR');
    
    render(
      <TestWrapper>
        <HelloWorld />
      </TestWrapper>
    );
    
    expect(screen.getByText('Olá Mundo')).toBeInTheDocument();
    expect(screen.getByText('Bem-vindo ao nosso componente internacionalizado!')).toBeInTheDocument();
  });

  test('applies custom className and style', () => {
    const customStyle = { backgroundColor: 'red' };
    
    render(
      <TestWrapper>
        <HelloWorld className="custom-class" style={customStyle} />
      </TestWrapper>
    );
    
    const container = screen.getByText('Hello World').parentElement;
    expect(container).toHaveClass('custom-class');
    expect(container).toHaveStyle('background-color: red');
  });
}); 

import React from 'react';
import { customRender, screen, act } from '../../services/testing';
import Home from './Home';

describe('Home View', () => {
  async function mount(){
    return await customRender(<Home />)
  }

  async function changeLanguage(user, lang){
    const languageSelect = screen.getByRole('combobox');
    await act(async () => {
      await user.selectOptions(languageSelect, lang);
    })
  }

  it('should language be portuguese by default', async () => {
    await mount();
    expect(screen.getByText('Olá Mundo')).toBeInTheDocument();
    expect(screen.getByText('Idioma:')).toBeInTheDocument();
  });

  it('should language be optionally english', async () => {
    const { user } = await mount();
    await changeLanguage(user, 'en-US');
    expect(screen.getByText('Hello World')).toBeInTheDocument();
    expect(screen.getByText('Language:')).toBeInTheDocument();
  });

  it('should change language back to portuguese', async () => {
    const { user } = await mount();
    await changeLanguage(user, 'en-US');
    await changeLanguage(user, 'pt-BR');
    expect(screen.getByText('Olá Mundo')).toBeInTheDocument();
    expect(screen.getByText('Idioma:')).toBeInTheDocument();
  });
}); 

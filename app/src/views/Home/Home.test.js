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

  it('should language be english by default', async () => {
    await mount();
    const helloElement = screen.getByText('Hello World');
    expect(helloElement).toBeInTheDocument();
  });

  it('should language be optionally portuguese', async () => {
    const { user } = await mount();
    await changeLanguage(user, 'pt');
    expect(screen.getByText('Olá Mundo')).toBeInTheDocument();
    expect(screen.getByText('Idioma:')).toBeInTheDocument();
  });

  it('should change language back to english', async () => {
    const { user } = await mount();
    await changeLanguage(user, 'pt');
    await changeLanguage(user, 'en');
    expect(screen.getByText('Hello World')).toBeInTheDocument();
    expect(screen.getByText('Language:')).toBeInTheDocument();
  });
}); 

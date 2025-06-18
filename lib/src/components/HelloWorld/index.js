export { default } from './HelloWorld';
export { default as HelloWorld } from './HelloWorld';

// Export translations
export const translations = {
  'en-US': require('./locales/en-US.json'),
  'pt-BR': require('./locales/pt-BR.json')
}; 

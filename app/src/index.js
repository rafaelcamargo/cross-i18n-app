import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomeView from './views/Home/Home';
import './i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HomeView />
  </React.StrictMode>
); 

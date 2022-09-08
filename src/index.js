import React from 'react';

import ReactDOM from 'react-dom/client';

import App from './App';
 
import UrlContextProvider from './components/store/UrlContextProvider';

import './index.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UrlContextProvider>
    <App />
  </UrlContextProvider>
);

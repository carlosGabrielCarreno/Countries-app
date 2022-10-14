import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { DataProvider } from './context/DataContext';

import { CountriesApp } from './CountriesApp';
import './normalize.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataProvider>
      <BrowserRouter>
        <CountriesApp />
      </BrowserRouter>
    </DataProvider>
  </React.StrictMode>
);

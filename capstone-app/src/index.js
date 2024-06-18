import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
//import ScrollToTop from './components/layout/ScrollToTop';
import React from 'react';

import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(window.fetchAPI);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);



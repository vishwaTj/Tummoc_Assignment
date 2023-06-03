import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const el = document.getElementById('root');
const newEle = ReactDOM.createRoot(el);

newEle.render(
  <BrowserRouter>
      <App/>
  </BrowserRouter>
);
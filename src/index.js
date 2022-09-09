import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Themeprovider } from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Themeprovider>
    <App />
    </Themeprovider>
  </React.StrictMode>
);


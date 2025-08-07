import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';
import './index.css';
import 'modern-normalize';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import { BrowserRouter } from 'react-router-dom';
import { StrictMode } from 'react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);

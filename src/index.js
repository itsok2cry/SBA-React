import React, { useReducer } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './features/theme'
import { Provider } from 'react-redux';


const store = configureStore({
  reducer: {
    theme: themeReducer
  }
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store = {store}>
        <App />
    </Provider>
  </React.StrictMode>
);


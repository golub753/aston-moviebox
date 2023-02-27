import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Normalize from 'react-normalize';
import { store } from './store/store';
import { Provider } from 'react-redux';
import './styles/style.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
  <Normalize />
  <Provider store={store}>
   <App />
  </Provider>
 </React.StrictMode>
);

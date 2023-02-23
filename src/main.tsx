import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/style.scss';
import Normalize from 'react-normalize';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
  <Normalize />
  <App />
 </React.StrictMode>
);

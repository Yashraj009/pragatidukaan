import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css' 
//bootstrap.min.css: This is the actual CSS file you're importing. It's a minimized version (minified) of the Bootstrap CSS, meaning it has been compressed to reduce its file size for faster loading on web pages.
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

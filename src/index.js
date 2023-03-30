import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import Layout from './components/layout/Layout';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout>
      <App />
    </Layout>
  </React.StrictMode>
);
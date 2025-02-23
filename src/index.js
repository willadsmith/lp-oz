import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './assets/fonts/fonts.scss';
import App from './App';
import { ConfigProvider } from "antd";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ConfigProvider
          theme={{
              token: {
                  // colorPrimary: '#f6ffed',
              },
          }}
      >
        <App />
      </ConfigProvider>
  </React.StrictMode>
);


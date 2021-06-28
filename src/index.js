import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import WrapperProvider from './components/useContext';

ReactDOM.render(
  <WrapperProvider>
    <App />
  </WrapperProvider>,
  document.getElementById('root')
);


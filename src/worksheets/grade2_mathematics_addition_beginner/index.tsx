import React from 'react';
import ReactDOM from 'react-dom/client';
import AdditionWorksheet from './components/AdditionWorksheet';
import '../../../src/index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <AdditionWorksheet />
  </React.StrictMode>
); 
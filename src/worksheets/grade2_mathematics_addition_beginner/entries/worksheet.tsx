import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/index.css';
import AdditionWorksheet from '../components/AdditionWorksheet';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <AdditionWorksheet />
  </React.StrictMode>
); 
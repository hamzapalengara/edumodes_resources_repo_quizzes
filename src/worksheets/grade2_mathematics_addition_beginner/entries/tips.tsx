import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/index.css';
import AdditionTips from '../components/AdditionTips';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <AdditionTips />
  </React.StrictMode>
); 
import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/index.css';
import AdditionAnswerKey from '../components/AdditionAnswerKey';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <AdditionAnswerKey />
  </React.StrictMode>
); 
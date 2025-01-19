import React from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
import AdditionTips from '../worksheets/grade2_mathematics_addition_beginner/components/AdditionTips';

// Will import TipsApp component once created
// import TipsApp from '../components/tips/TipsApp';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <AdditionTips />
    {/* <TipsApp /> */}
  </React.StrictMode>
); 
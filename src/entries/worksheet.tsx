import React from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
import AdditionWorksheet from '../worksheets/grade2_mathematics_addition_beginner/components/AdditionWorksheet';

// Will import WorksheetApp component once created
// import WorksheetApp from '../components/worksheet/WorksheetApp';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <AdditionWorksheet />
    {/* <WorksheetApp /> */}
  </React.StrictMode>
); 
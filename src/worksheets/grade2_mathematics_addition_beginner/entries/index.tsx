import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/index.css';
import AdditionWorksheet from '../components/AdditionWorksheet';
import AdditionAnswerKey from '../components/AdditionAnswerKey';
import AdditionTips from '../components/AdditionTips';
import AdditionThumbnail from '../components/AdditionThumbnail';

declare global {
  interface Window {
    WORKSHEET_VIEW: 'worksheet' | 'answer_key' | 'tips' | 'thumbnail';
  }
}

const view = window.WORKSHEET_VIEW || 'worksheet';
console.log('Current view:', view); // For debugging

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Render the appropriate component based on the view
const renderView = () => {
  switch (view) {
    case 'answer_key':
      return <AdditionAnswerKey />;
    case 'tips':
      return <AdditionTips />;
    case 'thumbnail':
      return <AdditionThumbnail />;
    default:
      return <AdditionWorksheet />;
  }
};

root.render(
  <React.StrictMode>
    {renderView()}
  </React.StrictMode>
); 
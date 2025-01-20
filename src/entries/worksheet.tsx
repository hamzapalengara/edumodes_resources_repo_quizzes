import React from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
import AdditionWorksheet from '../worksheets/grade2_mathematics_addition_beginner/components/AdditionWorksheet';
import ColorWorksheet from '../worksheets/preschool_creative_expression_color_exploration_beginner/components/ColorWorksheet';

// Get the worksheet ID from the environment
const worksheetId = import.meta.env.VITE_WORKSHEET_ID;

// Map worksheet IDs to their components
const worksheetComponents: Record<string, React.ComponentType> = {
  'grade2_mathematics_addition_beginner': AdditionWorksheet,
  'preschool_creative_expression_color_exploration_beginner': ColorWorksheet,
};

// Define the global initialization function expected by the web app
declare global {
  interface Window {
    initializeWorksheet: () => void;
    updateWorksheetCompletion?: (isComplete: boolean) => void;
  }
}

// Initialize the worksheet with completion state false
window.initializeWorksheet = () => {
  console.log('Worksheet initialized');
  if (window.updateWorksheetCompletion) {
    window.updateWorksheetCompletion(false);
  }
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Get the component based on the worksheet ID
const WorksheetComponent = worksheetComponents[worksheetId];

if (!WorksheetComponent) {
  console.error(`No worksheet component found for ID: ${worksheetId}`);
}

root.render(
  <React.StrictMode>
    {WorksheetComponent ? <WorksheetComponent /> : <div>Worksheet not found</div>}
  </React.StrictMode>
); 
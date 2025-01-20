import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WorksheetDashboard from './components/development/WorksheetDashboard';
import { discoverWorksheets } from './utils/worksheet-discovery';

const worksheets = discoverWorksheets();

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<div className="p-4">Loading...</div>}>
        <Routes>
          {/* Dashboard Route */}
          <Route path="/" element={<WorksheetDashboard worksheets={worksheets} />} />

          {/* Dynamic Worksheet Routes */}
          {worksheets.map(worksheet => (
            <React.Fragment key={worksheet.id}>
              <Route 
                path={`/${worksheet.id}/worksheet.html`} 
                element={<worksheet.components.Worksheet />} 
              />
              <Route 
                path={`/${worksheet.id}/answer_key.html`} 
                element={<worksheet.components.AnswerKey />} 
              />
              <Route 
                path={`/${worksheet.id}/tips.html`} 
                element={<worksheet.components.Tips />} 
              />
              <Route 
                path={`/${worksheet.id}/thumbnail.html`} 
                element={<worksheet.components.Thumbnail />} 
              />
            </React.Fragment>
          ))}
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;

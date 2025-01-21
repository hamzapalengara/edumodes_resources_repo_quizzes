import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

const PatternWorksheet = React.lazy(() => import('./components/PatternWorksheet'));
const PatternThumbnail = React.lazy(() => import('./components/PatternThumbnail'));
const PatternTips = React.lazy(() => import('./components/PatternTips'));
const PatternAnswerKey = React.lazy(() => import('./components/PatternAnswerKey'));

const LoadingMessage = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="text-2xl font-bold text-blue-600 animate-pulse">
      Loading Pattern Magic...
    </div>
  </div>
);

const view = new URLSearchParams(window.location.search).get('view');

const App = () => {
  const renderContent = () => {
    switch (view) {
      case 'thumbnail':
        return <PatternThumbnail />;
      case 'tips':
        return <PatternTips />;
      case 'answer-key':
        return <PatternAnswerKey />;
      default:
        return <PatternWorksheet />;
    }
  };

  return (
    <StrictMode>
      <Suspense fallback={<LoadingMessage />}>
        {renderContent()}
      </Suspense>
    </StrictMode>
  );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
} 
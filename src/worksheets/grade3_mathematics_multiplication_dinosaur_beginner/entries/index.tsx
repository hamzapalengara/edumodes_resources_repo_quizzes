import '../../../index.css';
import React, { Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';

declare global {
  interface Window {
    WORKSHEET_VIEW: 'worksheet' | 'answer_key' | 'tips' | 'thumbnail';
    WORKSHEET_METADATA: {
      id: string;
      title: string;
      description: string;
      metadata: {
        grade: string;
        subject: string;
        topic: string;
        difficulty: string;
      };
    };
  }
}

// Lazy load components
const MultiplicationDinosaurWorksheet = lazy(() => import('../components/MultiplicationDinosaurWorksheet'));
const MultiplicationDinosaurAnswerKey = lazy(() => import('../components/MultiplicationDinosaurAnswerKey'));
const MultiplicationDinosaurTips = lazy(() => import('../components/MultiplicationDinosaurTips'));
const MultiplicationDinosaurThumbnail = lazy(() => import('../components/MultiplicationDinosaurThumbnail'));

const view = window.WORKSHEET_VIEW || 'worksheet';

const App: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {view === 'worksheet' && <MultiplicationDinosaurWorksheet />}
      {view === 'answer_key' && <MultiplicationDinosaurAnswerKey />}
      {view === 'tips' && <MultiplicationDinosaurTips />}
      {view === 'thumbnail' && <MultiplicationDinosaurThumbnail />}
    </Suspense>
  );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
} 
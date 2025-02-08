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
const MultiplicationBalloonWorksheet = lazy(() => import('../components/MultiplicationBalloonWorksheet'));
const MultiplicationBalloonAnswerKey = lazy(() => import('../components/MultiplicationBalloonAnswerKey'));
const MultiplicationBalloonTips = lazy(() => import('../components/MultiplicationBalloonTips'));
const MultiplicationBalloonThumbnail = lazy(() => import('../components/MultiplicationBalloonThumbnail'));

const view = window.WORKSHEET_VIEW || 'worksheet';

const App: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {view === 'worksheet' && <MultiplicationBalloonWorksheet />}
      {view === 'answer_key' && <MultiplicationBalloonAnswerKey />}
      {view === 'tips' && <MultiplicationBalloonTips />}
      {view === 'thumbnail' && <MultiplicationBalloonThumbnail />}
    </Suspense>
  );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
} 
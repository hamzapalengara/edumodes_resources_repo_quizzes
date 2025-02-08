import React, { Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import '../../../index.css';

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

const Worksheet = lazy(() => import('../components/MultiplicationTreasureWorksheet'));
const AnswerKey = lazy(() => import('../components/MultiplicationTreasureAnswerKey'));
const Tips = lazy(() => import('../components/MultiplicationTreasureTips'));
const Thumbnail = lazy(() => import('../components/MultiplicationTreasureThumbnail'));

const view = window.WORKSHEET_VIEW || 'worksheet';

const App: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {view === 'worksheet' && <Worksheet />}
      {view === 'answer_key' && <AnswerKey />}
      {view === 'tips' && <Tips />}
      {view === 'thumbnail' && <Thumbnail />}
    </Suspense>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
} 
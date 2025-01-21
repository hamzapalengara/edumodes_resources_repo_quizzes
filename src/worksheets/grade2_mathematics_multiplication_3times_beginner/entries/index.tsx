import '../../../../index.css';
import React, { lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';

const MultiplicationWorksheet = lazy(() => import('../components/MultiplicationWorksheet'));
const MultiplicationAnswerKey = lazy(() => import('../components/MultiplicationAnswerKey'));
const MultiplicationTips = lazy(() => import('../components/MultiplicationTips'));
const MultiplicationThumbnail = lazy(() => import('../components/MultiplicationThumbnail'));

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

const view = window.WORKSHEET_VIEW;

const App: React.FC = () => {
  let Component;
  switch (view) {
    case 'worksheet':
      Component = MultiplicationWorksheet;
      break;
    case 'answer_key':
      Component = MultiplicationAnswerKey;
      break;
    case 'tips':
      Component = MultiplicationTips;
      break;
    case 'thumbnail':
      Component = MultiplicationThumbnail;
      break;
    default:
      Component = MultiplicationWorksheet;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
  );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
} 
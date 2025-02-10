import '../../../index.css';
import { lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';

// Lazy load components
const DialogueWorksheet = lazy(() => import('../components/DialogueWorksheet'));
const DialogueAnswerKey = lazy(() => import('../components/DialogueAnswerKey'));
const DialogueTips = lazy(() => import('../components/DialogueTips'));
const DialogueThumbnail = lazy(() => import('../components/DialogueThumbnail'));

// Required type declaration for worksheet view
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

const view = window.WORKSHEET_VIEW || 'worksheet';

const App = () => {
  const getComponent = () => {
    switch (view) {
      case 'worksheet': return <DialogueWorksheet />;
      case 'answer_key': return <DialogueAnswerKey />;
      case 'tips': return <DialogueTips />;
      case 'thumbnail': return <DialogueThumbnail />;
      default: return <DialogueWorksheet />;
    }
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {getComponent()}
    </Suspense>
  );
};

// Initialize React
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
} 
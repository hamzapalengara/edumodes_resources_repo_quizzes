import '../../../index.css';
import { lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';

// Lazy load components
const Worksheet = lazy(() => import('../components/BodyPartsWorksheet'));
const AnswerKey = lazy(() => import('../components/BodyPartsAnswerKey'));
const Tips = lazy(() => import('../components/BodyPartsTips'));
const Thumbnail = lazy(() => import('../components/BodyPartsThumbnail'));

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
      case 'worksheet': return <Worksheet />;
      case 'answer_key': return <AnswerKey />;
      case 'tips': return <Tips />;
      case 'thumbnail': return <Thumbnail />;
      default: return <Worksheet />;
    }
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {getComponent()}
    </Suspense>
  );
};

// Create root and render
const root = createRoot(document.getElementById('root')!);
root.render(<App />); 
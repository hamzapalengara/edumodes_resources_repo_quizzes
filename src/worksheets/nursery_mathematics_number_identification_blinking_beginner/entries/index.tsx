import '../../../index.css';
import { lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';

// Lazy load components
const Worksheet = lazy(() => import('../components/BlinkingNumbersWorksheet'));
const AnswerKey = lazy(() => import('../components/BlinkingNumbersAnswerKey'));
const Tips = lazy(() => import('../components/BlinkingNumbersTips'));
const Thumbnail = lazy(() => import('../components/BlinkingNumbersThumbnail'));

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
    <Suspense fallback={<div className="w-full h-screen flex items-center justify-center">
      <div className="text-2xl text-gray-600">Loading...</div>
    </div>}>
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
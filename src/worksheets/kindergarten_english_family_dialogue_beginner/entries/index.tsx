import '../../../index.css';
import { lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';

// Lazy load components
const Worksheet = lazy(() => import('../components/DialogueWorksheet'));
const AnswerKey = lazy(() => import('../components/DialogueAnswerKey'));
const Tips = lazy(() => import('../components/DialogueTips'));
const Thumbnail = lazy(() => import('../components/DialogueThumbnail'));

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

// Loading fallback component with matching theme
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-pink-50 to-orange-50">
    <div className="text-center">
      <div className="animate-bounce text-4xl mb-4">👩👧</div>
      <div className="animate-pulse text-xl text-pink-600 font-semibold">
        Loading...
      </div>
    </div>
  </div>
);

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
    <Suspense fallback={<LoadingFallback />}>
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
import '../../../index.css';
import { lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';

// Lazy load components
const Worksheet = lazy(() => import('../components/WordUnscrambleWorksheet'));
const AnswerKey = lazy(() => import('../components/WordUnscrambleAnswerKey'));
const Tips = lazy(() => import('../components/WordUnscrambleTips'));
const Thumbnail = lazy(() => import('../components/WordUnscrambleThumbnail'));

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
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-b from-pink-50 via-yellow-50 to-purple-50 flex items-center justify-center">
        <div className="text-2xl font-bold text-pink-600 animate-bounce">
          Loading... 🌟
        </div>
      </div>
    }>
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
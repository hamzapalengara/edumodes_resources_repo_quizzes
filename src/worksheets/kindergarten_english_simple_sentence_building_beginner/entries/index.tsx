import '../../../index.css';
import { lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';

// Lazy load components
const Worksheet = lazy(() => import('../components/SentenceBuildingWorksheet'));
const AnswerKey = lazy(() => import('../components/SentenceBuildingAnswerKey'));
const Tips = lazy(() => import('../components/SentenceBuildingTips'));
const Thumbnail = lazy(() => import('../components/SentenceBuildingThumbnail'));

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

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-green-50">
    <div className="text-center">
      <div className="animate-bounce text-4xl mb-4">📚</div>
      <div className="animate-pulse text-xl text-blue-600 font-semibold">
        Loading...
      </div>
    </div>
  </div>
);

const ErrorBoundary: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  try {
    return <>{children}</>;
  } catch (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-red-50 to-pink-50">
        <div className="text-center p-4">
          <div className="text-4xl mb-4">⚠️</div>
          <div className="text-xl text-red-600 font-semibold mb-2">
            Oops! Something went wrong.
          </div>
          <div className="text-gray-600">
            Please refresh the page to try again.
          </div>
        </div>
      </div>
    );
  }
};

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
    <ErrorBoundary>
      <Suspense fallback={<LoadingFallback />}>
        {getComponent()}
      </Suspense>
    </ErrorBoundary>
  );
};

// Initialize React
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
} else {
  console.error('Root element not found');
} 
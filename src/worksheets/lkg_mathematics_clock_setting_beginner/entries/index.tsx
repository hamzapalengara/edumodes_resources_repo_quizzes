import '../../../index.css';
import { lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';

// Lazy load components
const Worksheet = lazy(() => import('../components/ClockSettingWorksheet'));
const AnswerKey = lazy(() => import('../components/ClockSettingAnswerKey'));
const Tips = lazy(() => import('../components/ClockSettingTips'));
const Thumbnail = lazy(() => import('../components/ClockSettingThumbnail'));

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
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-violet-50 to-purple-50 flex items-center justify-center">
        <div className="text-2xl text-indigo-600 font-bold">Loading...</div>
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
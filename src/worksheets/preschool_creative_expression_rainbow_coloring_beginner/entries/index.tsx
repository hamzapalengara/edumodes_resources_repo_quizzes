import '../../../index.css';
import { lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';

const Worksheet = lazy(() => import('../components/RainbowColoringWorksheet'));
const AnswerKey = lazy(() => import('../components/RainbowColoringAnswerKey'));
const Tips = lazy(() => import('../components/RainbowColoringTips'));
const Thumbnail = lazy(() => import('../components/RainbowColoringThumbnail'));

declare global {
  interface Window {
    WORKSHEET_VIEW: 'worksheet' | 'answer_key' | 'tips' | 'thumbnail';
  }
}

const view = window.WORKSHEET_VIEW || 'worksheet';

const App = () => {
  const getComponent = () => {
    switch (view) {
      case 'worksheet':
        return <Worksheet />;
      case 'answer_key':
        return <AnswerKey />;
      case 'tips':
        return <Tips />;
      case 'thumbnail':
        return <Thumbnail />;
      default:
        return <Worksheet />;
    }
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {getComponent()}
    </Suspense>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
} 
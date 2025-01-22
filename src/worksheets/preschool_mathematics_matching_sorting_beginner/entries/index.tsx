import '../../../index.css';
import { lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';

// Lazy load components
const Worksheet = lazy(async () => {
  const module = await import('../components/SortingWorksheet');
  return { default: module.default };
});

const AnswerKey = lazy(async () => {
  const module = await import('../components/SortingAnswerKey');
  return { default: module.default };
});

const Tips = lazy(async () => {
  const module = await import('../components/SortingTips');
  return { default: module.default };
});

const Thumbnail = lazy(async () => {
  const module = await import('../components/SortingThumbnail');
  return { default: module.default };
});

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

// Set worksheet metadata
window.WORKSHEET_METADATA = {
  id: 'preschool_mathematics_matching_sorting_beginner',
  title: 'Fun Toy Sorting and Matching Game',
  description: 'An engaging interactive game for preschoolers (ages 4-5) to develop sorting and matching skills. Children drag and drop toys, shapes, and objects into their correct categories based on color, shape, or size. Features fun animations, sound effects, and progressive levels to keep children motivated while learning essential classification skills.',
  metadata: {
    grade: 'preschool',
    subject: 'mathematics',
    topic: 'matching_sorting',
    difficulty: 'beginner'
  }
};

const view = window.WORKSHEET_VIEW || 'worksheet';

// Loading component with animation
const LoadingComponent = () => (
  <div className="min-h-screen bg-gradient-to-br from-violet-50 via-fuchsia-50 to-pink-50 flex items-center justify-center">
    <div className="text-center">
      <div className="text-4xl mb-4 animate-bounce">🎯</div>
      <div className="text-violet-800 font-semibold">Loading your fun sorting game...</div>
    </div>
  </div>
);

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
    <Suspense fallback={<LoadingComponent />}>
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
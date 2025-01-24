import React from 'react';
import '../../../index.css';
import { lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';

// Lazy load components with explicit chunk names for better code splitting
const Worksheet = lazy(() => 
  import(/* webpackChunkName: "memory-worksheet" */ '../components/MemoryWorksheet')
);
const AnswerKey = lazy(() => 
  import(/* webpackChunkName: "memory-answer-key" */ '../components/MemoryAnswerKey')
);
const Tips = lazy(() => 
  import(/* webpackChunkName: "memory-tips" */ '../components/MemoryTips')
);
const Thumbnail = lazy(() => 
  import(/* webpackChunkName: "memory-thumbnail" */ '../components/MemoryThumbnail')
);

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

// Default to worksheet view if not specified
const view = window.WORKSHEET_VIEW || 'worksheet';

// Loading component with proper styling
const LoadingComponent = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="text-center">
      <div className="text-xl text-blue-600 animate-pulse mb-2">
        Loading...
      </div>
      <div className="text-sm text-blue-400">
        Preparing your memory game
      </div>
    </div>
  </div>
);

// Error boundary component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-white">
          <div className="text-center p-4">
            <div className="text-xl text-red-600 mb-2">
              Oops! Something went wrong.
            </div>
            <div className="text-sm text-gray-600">
              Please try refreshing the page.
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

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
    <ErrorBoundary>
      <Suspense fallback={<LoadingComponent />}>
        {getComponent()}
      </Suspense>
    </ErrorBoundary>
  );
};

// Initialize React with error handling
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Failed to find the root element');
}

const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Failed to find the root element');
}

// Create root only if it hasn't been created before
// @ts-ignore - _reactRootContainer is an internal property
const root = (rootElement as any)._reactRootContainer?.containerInfo?._internalRoot ?? createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

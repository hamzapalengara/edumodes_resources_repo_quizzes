import React from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
import AdditionThumbnail from '../worksheets/grade2_mathematics_addition_beginner/components/AdditionThumbnail';

// Will import ThumbnailApp component once created
// import ThumbnailApp from '../components/thumbnail/ThumbnailApp';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <AdditionThumbnail />
    {/* <ThumbnailApp /> */}
  </React.StrictMode>
); 
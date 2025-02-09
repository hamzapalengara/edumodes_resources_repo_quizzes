import React from 'react';
import ReactDOM from 'react-dom/client';
import LetterTracingWorksheet from '../components/LetterTracingWorksheet';
import LetterTracingAnswerKey from '../components/LetterTracingAnswerKey';
import LetterTracingTips from '../components/LetterTracingTips';
import LetterTracingThumbnail from '../components/LetterTracingThumbnail';
import '../../../index.css';

// Get the HTML filename to determine which component to render
const htmlFile = window.location.pathname.split('/').pop();

const getComponent = () => {
  switch (htmlFile) {
    case 'answer_key.html':
      return <LetterTracingAnswerKey />;
    case 'tips.html':
      return <LetterTracingTips />;
    case 'thumbnail.html':
      return <LetterTracingThumbnail />;
    default:
      return <LetterTracingWorksheet />;
  }
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {getComponent()}
  </React.StrictMode>
);

export {
  LetterTracingWorksheet as Worksheet,
  LetterTracingAnswerKey as AnswerKey,
  LetterTracingTips as Tips,
  LetterTracingThumbnail as Thumbnail,
}; 
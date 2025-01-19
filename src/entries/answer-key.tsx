import React from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
import AdditionAnswerKey from '../worksheets/grade2_mathematics_addition_beginner/components/AdditionAnswerKey';

// Will import AnswerKeyApp component once created
// import AnswerKeyApp from '../components/answer-key/AnswerKeyApp';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <AdditionAnswerKey />
    {/* <AnswerKeyApp /> */}
  </React.StrictMode>
); 
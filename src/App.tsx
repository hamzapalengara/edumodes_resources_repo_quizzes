import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdditionWorksheet from './worksheets/grade2_mathematics_addition_beginner/components/AdditionWorksheet';
import AdditionAnswerKey from './worksheets/grade2_mathematics_addition_beginner/components/AdditionAnswerKey';
import AdditionTips from './worksheets/grade2_mathematics_addition_beginner/components/AdditionTips';
import AdditionThumbnail from './worksheets/grade2_mathematics_addition_beginner/components/AdditionThumbnail';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdditionWorksheet />} />
        <Route path="/answer-key" element={<AdditionAnswerKey />} />
        <Route path="/tips" element={<AdditionTips />} />
        <Route path="/thumbnail" element={<AdditionThumbnail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

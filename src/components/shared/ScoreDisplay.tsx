import React from 'react';

interface ScoreDisplayProps {
  score: number;
  totalQuestions: number;
}

const ScoreDisplay: React.FC<ScoreDisplayProps> = ({ score, totalQuestions }) => {
  const progressPercentage = (score / totalQuestions) * 100;

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-3 sm:p-6 mb-4">
      <div className="flex items-center justify-between mb-2">
        <div className="text-sm font-medium text-gray-600">Progress</div>
        <div className="text-sm font-medium text-gray-600">
          Score: {score}/{totalQuestions}
        </div>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-pink-500 to-yellow-500 transition-all duration-300"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
    </div>
  );
};

export default ScoreDisplay; 
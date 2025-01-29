import React from 'react';

const SizeComparisonThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-r from-pink-400 to-yellow-400 p-[40px] flex items-center justify-center">
      <div className="w-[420px] h-[240px] bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center">
        {/* Title */}
        <h1 className="text-2xl font-bold text-center text-purple-700 mb-4">
          Size Comparison
        </h1>
        
        {/* Preview Content */}
        <div className="flex items-center justify-center gap-8">
          <div className="flex flex-col items-center">
            <span className="text-5xl mb-2">🐘</span>
            <span className="text-sm font-medium text-purple-600">BIG</span>
          </div>
          <div className="text-2xl text-purple-400">vs</div>
          <div className="flex flex-col items-center">
            <span className="text-3xl mb-2">🐭</span>
            <span className="text-sm font-medium text-purple-600">SMALL</span>
          </div>
        </div>

        {/* Age Level */}
        <div className="mt-4 text-sm text-purple-500">
          Preschool • Mathematics • Beginner
        </div>
      </div>
    </div>
  );
};

export default SizeComparisonThumbnail; 
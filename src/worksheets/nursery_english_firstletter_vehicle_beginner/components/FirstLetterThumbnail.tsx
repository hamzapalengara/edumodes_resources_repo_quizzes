import React from 'react';

const FirstLetterThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-r from-pink-100 to-yellow-100 flex items-center justify-center p-4">
      <div className="w-[420px] h-[240px] bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Vehicle First Letters
        </h1>
        
        <div className="text-center text-gray-600 mb-4">
          C → R
        </div>

        {/* Preview Content */}
        <div className="flex justify-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-b from-yellow-400 to-yellow-500 
                        shadow-lg ring-4 ring-yellow-600 flex items-center justify-center">
            <span className="text-xl font-bold text-white">C</span>
          </div>
          <div className="w-12 h-12 rounded-full bg-gradient-to-b from-yellow-400 to-yellow-500 
                        shadow-lg ring-4 ring-yellow-600 flex items-center justify-center">
            <span className="text-xl font-bold text-white">B</span>
          </div>
          <div className="w-12 h-12 rounded-full bg-gradient-to-b from-yellow-400 to-yellow-500 
                        shadow-lg ring-4 ring-yellow-600 flex items-center justify-center">
            <span className="text-xl font-bold text-white">T</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstLetterThumbnail; 
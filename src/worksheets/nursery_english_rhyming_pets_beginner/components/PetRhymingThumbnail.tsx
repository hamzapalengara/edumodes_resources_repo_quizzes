import React from 'react';

const PetRhymingThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-pink-100 to-yellow-100 flex items-center justify-center p-4">
      <div className="w-[420px] h-[240px] bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-200 to-yellow-200" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-200 to-pink-200" />
        
        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">
          Pet Friends Rhyming Words
        </h1>

        {/* Word Families Preview */}
        <div className="grid grid-cols-3 gap-4 w-full">
          <div className="flex flex-col items-center">
            <span className="text-xl mb-1">🐾</span>
            <span className="font-medium text-gray-700">-et</span>
            <span className="text-sm text-gray-500">PET</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl mb-1">📌</span>
            <span className="font-medium text-gray-700">-in</span>
            <span className="text-sm text-gray-500">PIN</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl mb-1">🐛</span>
            <span className="font-medium text-gray-700">-ug</span>
            <span className="text-sm text-gray-500">BUG</span>
          </div>
        </div>

        {/* Activity Type */}
        <div className="mt-4 px-4 py-1 bg-pink-100 rounded-full">
          <span className="text-sm font-medium text-pink-600">
            Dictation Practice
          </span>
        </div>
      </div>
    </div>
  );
};

export default PetRhymingThumbnail; 
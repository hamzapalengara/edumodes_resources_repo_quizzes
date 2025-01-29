import React from 'react';

const PictureWordThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-r from-pink-400 to-yellow-400 flex items-center justify-center p-10">
      <div className="w-[420px] h-[240px] bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-2 left-2 text-4xl rotate-[-15deg]">🐱</div>
        <div className="absolute top-2 right-2 text-4xl rotate-[15deg]">🐕</div>
        <div className="absolute bottom-2 left-2 text-4xl rotate-[15deg]">📦</div>
        <div className="absolute bottom-2 right-2 text-4xl rotate-[-15deg]">✏️</div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-center text-purple-700 mb-6 relative z-10">
          Picture Word Matching
        </h1>

        {/* Preview Content */}
        <div className="flex items-center gap-4 relative z-10">
          <div className="text-5xl">🎯</div>
          <div className="text-lg font-semibold text-gray-700">Match & Learn</div>
        </div>
      </div>
    </div>
  );
};

export default PictureWordThumbnail; 
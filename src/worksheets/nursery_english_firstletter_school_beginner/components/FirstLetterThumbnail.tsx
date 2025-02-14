import React from 'react';

const FirstLetterThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-[420px] h-[240px] bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-between">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-blue-800 mb-2">
            School Words First Letters
          </h1>
          <div className="text-blue-600 text-lg">
            Listen and Find
          </div>
        </div>

        {/* Preview Content */}
        <div className="flex items-center gap-6">
          {/* School Items */}
          <div className="flex gap-3">
            <span className="text-3xl">📚</span>
            <span className="text-3xl">✏️</span>
            <span className="text-3xl">📓</span>
          </div>

          {/* Arrow */}
          <div className="text-blue-500 text-2xl">
            →
          </div>

          {/* Letters */}
          <div className="flex gap-2">
            <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-800 font-bold">
              B
            </span>
            <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-800 font-bold">
              P
            </span>
            <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-800 font-bold">
              N
            </span>
          </div>
        </div>

        {/* Feature Tags */}
        <div className="flex gap-3">
          <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
            <span>🔊</span>
            Listen
          </div>
          <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
            <span>🎯</span>
            Match
          </div>
          <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
            <span>📚</span>
            School
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstLetterThumbnail; 
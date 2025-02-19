import React from 'react';

const HomeDictationThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-r from-amber-100 to-orange-100 flex items-center justify-center p-4">
      <div className="w-[420px] h-[240px] bg-white rounded-lg shadow-lg p-4 flex flex-col">
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold text-amber-800">
            Home Words Letter Dictation
          </h1>
          <p className="text-amber-600 mt-1">
            Listen and spell 3-letter words
          </p>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <div className="grid grid-cols-3 gap-3">
            {/* Sample Word Card */}
            <div className="bg-amber-50 rounded p-2 border border-amber-200 flex items-center justify-center">
              <span className="text-2xl">🛏️</span>
            </div>
            
            {/* Letter Grid */}
            <div className="flex flex-col gap-1">
              <div className="w-8 h-8 bg-amber-100 rounded border border-amber-300 flex items-center justify-center font-bold text-amber-800">
                B
              </div>
              <div className="w-8 h-8 bg-amber-100 rounded border border-amber-300 flex items-center justify-center font-bold text-amber-800">
                E
              </div>
              <div className="w-8 h-8 bg-amber-100 rounded border border-amber-300 flex items-center justify-center font-bold text-amber-800">
                D
              </div>
            </div>

            {/* Speaker Icon */}
            <div className="flex items-center justify-center">
              <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white">
                🔊
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDictationThumbnail; 
import React from 'react';

const PatternThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-r from-pink-500 to-yellow-500 font-sans relative overflow-hidden">
      <div className="w-[420px] h-[240px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="p-6 h-full flex flex-col">
          {/* Title */}
          <h1 className="text-3xl font-bold text-center mb-4 select-none">
            Pattern Magic 🎯
          </h1>

          {/* Preview Content */}
          <div className="flex-1 grid grid-cols-2 gap-4 select-none">
            {/* Pattern Example 1 */}
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-3">
              <h2 className="text-lg font-bold text-pink-800 mb-2">
                Simple Patterns
              </h2>
              <div className="flex justify-center gap-2">
                <div className="text-2xl">⭕</div>
                <div className="text-2xl">⭐</div>
                <div className="text-2xl">⭕</div>
                <div className="text-2xl">⭐</div>
              </div>
            </div>

            {/* Pattern Example 2 */}
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-3">
              <h2 className="text-lg font-bold text-blue-800 mb-2">
                Find Missing
              </h2>
              <div className="flex justify-center gap-2">
                <div className="text-2xl">🔵</div>
                <div className="text-2xl">🟡</div>
                <div className="text-2xl">🔵</div>
                <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-lg border-2 border-dashed border-gray-300">?</div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-4 flex justify-center gap-4 select-none">
            <div className="flex items-center text-sm text-blue-800">
              <span className="mr-1">🧩</span> Pattern Recognition
            </div>
            <div className="flex items-center text-sm text-blue-800">
              <span className="mr-1">🎯</span> Problem Solving
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatternThumbnail; 
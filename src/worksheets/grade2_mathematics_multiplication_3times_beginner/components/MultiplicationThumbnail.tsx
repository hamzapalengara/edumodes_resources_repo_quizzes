import React from 'react';

const MultiplicationThumbnail: React.FC = () => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 p-6 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center text-blue-800 mb-6">
          Fun with the 3 Times Table! 🌟
        </h1>
        
        <div className="space-y-4">
          {/* Example 1: 1 × 3 = 3 */}
          <div className="flex flex-col items-center">
            <div className="text-xl mb-2">1 × 3 = 3</div>
            <div className="flex gap-2">
              <span className="text-2xl">🎈🎈🎈</span>
            </div>
          </div>

          {/* Example 2: 2 × 3 = 6 */}
          <div className="flex flex-col items-center">
            <div className="text-xl mb-2">2 × 3 = 6</div>
            <div className="flex flex-col gap-2">
              <span className="text-2xl">🌟🌟🌟</span>
              <span className="text-2xl">🌟🌟🌟</span>
            </div>
          </div>

          {/* Example 3: 3 × 3 = 9 */}
          <div className="flex flex-col items-center">
            <div className="text-xl mb-2">3 × 3 = 9</div>
            <div className="flex flex-col gap-2">
              <span className="text-2xl">🎪🎪🎪</span>
              <span className="text-2xl">🎪🎪🎪</span>
              <span className="text-2xl">🎪🎪🎪</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiplicationThumbnail; 
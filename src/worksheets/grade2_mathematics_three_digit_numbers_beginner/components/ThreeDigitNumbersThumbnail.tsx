import React from 'react';

const ThreeDigitNumbersThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-r from-pink-400 to-yellow-400 flex items-center justify-center p-10">
      <div className="w-[420px] h-[240px] bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-2 left-2 text-4xl rotate-[-15deg] opacity-20">1️⃣</div>
        <div className="absolute top-2 right-2 text-4xl rotate-[15deg] opacity-20">2️⃣</div>
        <div className="absolute bottom-2 left-2 text-4xl rotate-[15deg] opacity-20">3️⃣</div>
        <div className="absolute bottom-2 right-2 text-4xl rotate-[-15deg] opacity-20">4️⃣</div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-center text-purple-700 mb-6 relative z-10">
          Three-Digit Numbers
        </h1>

        {/* Preview Content */}
        <div className="flex items-center gap-4 relative z-10">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-xl font-bold text-purple-700 mb-1">
              2
            </div>
            <div className="text-xs text-purple-600">Hundreds</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-xl font-bold text-blue-700 mb-1">
              3
            </div>
            <div className="text-xs text-blue-600">Tens</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-xl font-bold text-green-700 mb-1">
              4
            </div>
            <div className="text-xs text-green-600">Ones</div>
          </div>
        </div>

        {/* Preview Elements */}
        <div className="absolute bottom-2 right-2 flex items-center space-x-2">
          <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
            <span className="text-sm">🎯</span>
          </div>
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-sm">🎮</span>
          </div>
          <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
            <span className="text-sm">🎨</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeDigitNumbersThumbnail; 
import React from 'react';

const MultiplicationTable2Thumbnail: React.FC = () => {
  return (
    // Outer container: 500x375px (4:3 ratio)
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-green-100 via-emerald-50 to-green-100 flex items-center justify-center p-4">
      {/* Inner container: 420x240px */}
      <div className="w-[420px] h-[240px] bg-white rounded-xl shadow-lg p-6 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-6 gap-4">
            {Array.from({ length: 24 }).map((_, i) => (
              <div key={i} className="text-3xl">
                {i % 2 === 0 ? '×' : '🍎'}
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10">
          <h1 className="text-2xl font-bold text-center bg-gradient-to-r from-green-600 via-emerald-600 to-green-600 bg-clip-text text-transparent mb-2">
            Multiplication Table of 2
          </h1>
          <div className="text-emerald-600 text-lg font-semibold text-center mb-4">
            Learn with Visual Groups
          </div>

          {/* Example Section */}
          <div className="flex items-center justify-between gap-4">
            {/* Left Example */}
            <div className="flex-1 bg-green-50 rounded-lg p-3">
              <div className="flex items-center justify-center gap-2 text-lg font-bold text-green-700 mb-2">
                <span>2</span>
                <span>×</span>
                <span>3</span>
                <span>=</span>
                <span className="w-8 h-8 bg-white rounded flex items-center justify-center shadow-sm">
                  6
                </span>
              </div>
              <div className="flex items-center justify-center gap-1 text-lg">
                <span>🍎🍎</span>
                <span className="text-green-300 mx-1">|</span>
                <span>🍎🍎</span>
                <span className="text-green-300 mx-1">|</span>
                <span>🍎🍎</span>
              </div>
            </div>

            {/* Right Example */}
            <div className="flex-1 bg-emerald-50 rounded-lg p-3">
              <div className="flex items-center justify-center gap-2 text-lg font-bold text-emerald-700 mb-2">
                <span>2</span>
                <span>×</span>
                <span>4</span>
                <span>=</span>
                <span className="w-8 h-8 bg-white rounded flex items-center justify-center shadow-sm">
                  8
                </span>
              </div>
              <div className="flex items-center justify-center gap-1 text-lg">
                <span>🍎🍎</span>
                <span className="text-emerald-300 mx-1">|</span>
                <span>🍎🍎</span>
                <span className="text-emerald-300 mx-1">|</span>
                <span>🍎🍎</span>
                <span className="text-emerald-300 mx-1">|</span>
                <span>🍎🍎</span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-4 text-center text-sm text-emerald-600 font-medium">
            Interactive Practice with Visual Groups and Audio Feedback
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiplicationTable2Thumbnail; 
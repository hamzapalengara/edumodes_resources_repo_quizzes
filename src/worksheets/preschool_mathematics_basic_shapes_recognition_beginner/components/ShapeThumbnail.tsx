import React from 'react';

const ShapeThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-r from-pink-100 to-yellow-100 flex items-center justify-center p-10">
      <div className="w-[420px] h-[240px] bg-white rounded-xl shadow-lg p-6">
        <div className="h-full flex flex-col">
          {/* Title */}
          <div className="flex items-center gap-3 mb-4">
            <h1 className="text-xl font-bold text-purple-800">Shape Safari</h1>
            <span className="text-2xl">🔍</span>
          </div>

          {/* Preview Content */}
          <div className="flex-1 grid grid-cols-2 gap-4">
            {/* Left side - Shapes */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xl">⭕</span>
                <span className="text-purple-700">Circle</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl">⬛</span>
                <span className="text-purple-700">Square</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl">▲</span>
                <span className="text-purple-700">Triangle</span>
              </div>
            </div>

            {/* Right side - Objects */}
            <div className="grid grid-cols-2 gap-2">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center text-2xl">
                ☀️
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-2xl">
                🌲
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl">
                🏐
              </div>
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center text-2xl">
                🎁
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between mt-4">
            <div className="text-sm text-purple-600">Find shapes in fun scenes!</div>
            <div className="flex gap-2">
              <span className="text-xl">🎯</span>
              <span className="text-xl">🎨</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShapeThumbnail; 
import React from 'react';

const MultiplicationThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] overflow-hidden bg-gradient-to-r from-pink-500 to-yellow-500 font-sans relative">
      <div className="w-[420px] h-[240px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3">
            <h1 className="text-xl font-bold text-white text-center">
              Magic of Multiplication! ✨
            </h1>
          </div>

          {/* Content */}
          <div className="flex-1 p-4 flex flex-col justify-between">
            {/* Visual Examples */}
            <div className="space-y-3">
              <div className="flex items-center justify-center gap-2">
                <div className="text-2xl">
                  🍎🍎 + 🍎🍎 + 🍎🍎
                </div>
                <div className="text-xl font-semibold text-blue-600">
                  = 6
                </div>
              </div>
              <div className="text-center text-blue-600 font-medium">
                2 + 2 + 2 = 3 × 2
              </div>
            </div>

            {/* Topics */}
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                Repeated Addition
              </span>
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                Visual Learning
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-4 left-4 text-4xl animate-bounce">✨</div>
      <div className="absolute bottom-4 right-4 text-4xl animate-bounce delay-150">🌟</div>
      <div className="absolute top-4 right-4 text-4xl animate-bounce delay-300">⭐</div>
      <div className="absolute bottom-4 left-4 text-4xl animate-bounce delay-450">✨</div>
    </div>
  );
};

export default MultiplicationThumbnail; 
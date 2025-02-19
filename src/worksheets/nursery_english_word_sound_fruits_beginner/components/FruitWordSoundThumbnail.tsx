import React from 'react';

const FruitWordSoundThumbnail: React.FC = () => {
  return (
    // Outer container: 500x375px (4:3 ratio)
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-orange-500 via-yellow-400 to-red-500 font-sans relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Sound Waves */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-10">
          <div className="absolute inset-0 border-4 border-white rounded-full animate-ping" style={{ animationDuration: '3s' }} />
          <div className="absolute inset-0 border-4 border-white rounded-full animate-ping" style={{ animationDuration: '3s', animationDelay: '1s' }} />
          <div className="absolute inset-0 border-4 border-white rounded-full animate-ping" style={{ animationDuration: '3s', animationDelay: '2s' }} />
        </div>
      </div>

      {/* Inner container: 420x240px (centered) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[240px]">
        {/* Content Container */}
        <div className="w-full h-full bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Main Content */}
          <div className="h-full flex flex-col items-center justify-between p-6">
            <h1 className="text-2xl font-bold text-orange-600 text-center">
              Fruit Word Sound Game
              <span className="block text-lg text-orange-500 mt-1">Listen and Choose!</span>
            </h1>

            {/* Game Preview */}
            <div className="flex flex-col items-center gap-4">
              {/* Sound Button */}
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full shadow-lg flex items-center justify-center animate-pulse">
                <span className="text-2xl">🔊</span>
              </div>

              {/* Options Preview */}
              <div className="flex items-center gap-3">
                <div className="bg-orange-100 px-4 py-2 rounded-lg shadow-md text-orange-600 font-bold transform hover:scale-105 transition-transform">
                  Apple
                </div>
                <div className="bg-orange-100 px-4 py-2 rounded-lg shadow-md text-orange-600 font-bold transform hover:scale-105 transition-transform">
                  Banana
                </div>
                <div className="bg-orange-100 px-4 py-2 rounded-lg shadow-md text-orange-600 font-bold transform hover:scale-105 transition-transform">
                  Orange
                </div>
              </div>
            </div>

            {/* Footer */}
            <p className="text-orange-600 text-center text-sm">
              Learn fruit words through fun sound matching!
            </p>
          </div>
        </div>

        {/* Decorative Fruit Elements */}
        <div className="absolute -right-4 -bottom-4 text-4xl rotate-12">🍎</div>
        <div className="absolute -left-2 bottom-8 text-3xl -rotate-12">🍌</div>
        <div className="absolute right-12 -top-2 text-3xl rotate-6">🍊</div>
        <div className="absolute left-12 top-4 text-3xl -rotate-6">🍇</div>
        <div className="absolute right-24 bottom-2 text-3xl rotate-12">🍓</div>
        <div className="absolute left-24 -top-4 text-3xl -rotate-12">🍉</div>
      </div>
    </div>
  );
};

export default FruitWordSoundThumbnail; 
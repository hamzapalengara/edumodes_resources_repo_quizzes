import React from 'react';

const ColorWordSoundThumbnail: React.FC = () => {
  return (
    // Outer container: 500x375px (4:3 ratio)
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-blue-500 via-purple-400 to-pink-500 font-sans relative overflow-hidden">
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
            <h1 className="text-2xl font-bold text-blue-600 text-center">
              Color Word Sound Game
              <span className="block text-lg text-purple-500 mt-1">Listen and Choose!</span>
            </h1>

            {/* Game Preview */}
            <div className="flex flex-col items-center gap-4">
              {/* Sound Button */}
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg flex items-center justify-center animate-pulse">
                <span className="text-2xl">🔊</span>
              </div>

              {/* Color Options Preview */}
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 bg-red-500 rounded-lg shadow-md flex items-center justify-center text-white font-bold transform hover:scale-105 transition-transform">
                  Red
                </div>
                <div className="w-16 h-16 bg-blue-500 rounded-lg shadow-md flex items-center justify-center text-white font-bold transform hover:scale-105 transition-transform">
                  Blue
                </div>
                <div className="w-16 h-16 bg-green-500 rounded-lg shadow-md flex items-center justify-center text-white font-bold transform hover:scale-105 transition-transform">
                  Green
                </div>
              </div>
            </div>

            {/* Footer */}
            <p className="text-purple-600 text-center text-sm">
              Learn colors through fun sound matching!
            </p>
          </div>
        </div>

        {/* Decorative Color Elements */}
        <div className="absolute -right-4 -bottom-4 w-12 h-12 bg-red-500 rounded-full shadow-lg transform rotate-12" />
        <div className="absolute -left-2 bottom-8 w-10 h-10 bg-yellow-400 rounded-full shadow-lg transform -rotate-12" />
        <div className="absolute right-12 -top-2 w-8 h-8 bg-green-500 rounded-full shadow-lg transform rotate-45" />
        <div className="absolute left-12 top-4 w-10 h-10 bg-purple-500 rounded-full shadow-lg transform -rotate-45" />
        <div className="absolute right-24 bottom-2 w-8 h-8 bg-pink-500 rounded-full shadow-lg transform rotate-12" />
        <div className="absolute left-24 -top-4 w-12 h-12 bg-blue-500 rounded-full shadow-lg transform -rotate-12" />
      </div>
    </div>
  );
};

export default ColorWordSoundThumbnail; 
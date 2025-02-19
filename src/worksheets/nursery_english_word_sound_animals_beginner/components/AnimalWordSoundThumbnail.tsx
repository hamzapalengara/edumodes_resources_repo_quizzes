import React from 'react';

const AnimalWordSoundThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-purple-500 via-pink-400 to-purple-600 font-sans relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Sound Waves */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-10">
          <div className="absolute inset-0 border-4 border-white rounded-full animate-ping" style={{ animationDuration: '3s' }} />
          <div className="absolute inset-0 border-4 border-white rounded-full animate-ping" style={{ animationDuration: '3s', animationDelay: '1s' }} />
          <div className="absolute inset-0 border-4 border-white rounded-full animate-ping" style={{ animationDuration: '3s', animationDelay: '2s' }} />
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative w-[420px] h-[300px] mx-auto mt-8">
        {/* Game Frame */}
        <div className="absolute inset-0 bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Main Content */}
          <div className="h-full flex flex-col items-center justify-between p-6">
            <h1 className="text-2xl font-bold text-purple-600 text-center">
              Animal Word Sound Game
              <span className="block text-lg text-pink-500 mt-1">Listen and Choose!</span>
            </h1>

            {/* Game Preview */}
            <div className="flex flex-col items-center gap-4">
              {/* Sound Button */}
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg flex items-center justify-center animate-pulse">
                <span className="text-2xl">🔊</span>
              </div>

              {/* Options Preview */}
              <div className="flex items-center gap-3">
                <div className="bg-purple-100 px-4 py-2 rounded-lg shadow-md text-purple-600 font-bold transform hover:scale-105 transition-transform">
                  Lion
                </div>
                <div className="bg-purple-100 px-4 py-2 rounded-lg shadow-md text-purple-600 font-bold transform hover:scale-105 transition-transform">
                  Tiger
                </div>
                <div className="bg-purple-100 px-4 py-2 rounded-lg shadow-md text-purple-600 font-bold transform hover:scale-105 transition-transform">
                  Cat
                </div>
              </div>
            </div>

            {/* Footer */}
            <p className="text-purple-600 text-center text-sm">
              Learn animal words through fun sound matching!
            </p>
          </div>
        </div>

        {/* Decorative Animal Elements */}
        <div className="absolute -right-4 -bottom-4 text-4xl rotate-12">🐘</div>
        <div className="absolute -left-2 bottom-8 text-3xl -rotate-12">🦁</div>
        <div className="absolute right-12 -top-2 text-3xl rotate-6">🐯</div>
        <div className="absolute left-12 top-4 text-3xl -rotate-6">🐒</div>
        <div className="absolute right-24 bottom-2 text-3xl rotate-12">🐎</div>
        <div className="absolute left-24 -top-4 text-3xl -rotate-12">🐕</div>
      </div>
    </div>
  );
};

export default AnimalWordSoundThumbnail; 
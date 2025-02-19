import React from 'react';

const HomeWordSoundThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-[#FFB5C2] via-[#E6EEF1] to-[#7EC4CF] font-sans relative overflow-hidden">
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
        {/* House Frame */}
        <div className="absolute inset-0 bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* House Roof */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-[250px] h-[120px]">
            <div className="w-full h-full bg-[#7EC4CF] rotate-45 transform origin-bottom-left shadow-lg" />
            <div className="absolute top-0 right-0 w-full h-full bg-[#89B7B6] -rotate-45 transform origin-bottom-right shadow-lg" />
          </div>

          {/* Main Content */}
          <div className="h-full pt-16 px-6 pb-6 flex flex-col items-center">
            <h1 className="text-2xl font-bold text-[#2A7B7B] text-center mb-4 relative">
              Match Home Words
              <span className="block text-lg text-[#7EC4CF] mt-1">with Sounds</span>
            </h1>

            {/* Interactive Elements Preview */}
            <div className="flex items-center justify-center gap-4 mt-2">
              {/* Word Tile */}
              <div className="w-24 h-24 bg-[#7EC4CF] rounded-xl shadow-lg flex items-center justify-center transform hover:scale-105 transition-transform">
                <span className="text-white font-bold text-xl">Door</span>
              </div>

              {/* Arrow */}
              <div className="text-[#2A7B7B] text-2xl animate-bounce">→</div>

              {/* Sound Tile */}
              <div className="w-24 h-24 bg-[#FFB5C2] rounded-xl shadow-lg flex items-center justify-center transform hover:scale-105 transition-transform">
                <div className="relative">
                  <span className="text-white text-3xl">🔊</span>
                  {/* Animated Sound Indicator */}
                  <div className="absolute -right-1 -top-1 w-3 h-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Text */}
            <div className="mt-auto">
              <p className="text-[#2A7B7B] text-center text-sm font-medium">
                Learn household words through
                <span className="block">interactive sound matching!</span>
              </p>
            </div>
          </div>
        </div>

        {/* Decorative House Elements */}
        <div className="absolute -right-4 -bottom-4 text-4xl rotate-12 opacity-80">🏠</div>
        <div className="absolute -left-2 bottom-8 text-3xl -rotate-12 opacity-80">🪑</div>
        <div className="absolute right-12 -top-2 text-3xl rotate-6 opacity-80">💡</div>
      </div>
    </div>
  );
};

export default HomeWordSoundThumbnail; 
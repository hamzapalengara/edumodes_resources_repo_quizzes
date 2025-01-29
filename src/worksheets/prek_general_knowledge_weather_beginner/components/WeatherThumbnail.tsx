import React from 'react';

const WeatherThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-pink-100 to-yellow-100 flex items-center justify-center p-4">
      <div className="w-[420px] h-[240px] bg-white rounded-xl shadow-lg p-6 relative overflow-hidden">
        {/* Background Weather Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-2 left-4 text-4xl">☀️</div>
          <div className="absolute top-8 right-8 text-4xl">🌧️</div>
          <div className="absolute bottom-4 left-8 text-4xl">❄️</div>
          <div className="absolute bottom-8 right-4 text-4xl">⚡</div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-2xl font-bold text-purple-800 mb-4 font-system">
            Weather Learning Adventure
          </h1>

          <div className="flex items-center justify-center space-x-6 mb-4">
            <div className="text-4xl animate-pulse">☀️</div>
            <div className="text-4xl animate-bounce">🌧️</div>
            <div className="text-4xl">❄️</div>
          </div>

          <div className="text-center">
            <p className="text-purple-600 font-system">
              Fun weather activities for Pre-K learners!
            </p>
          </div>

          {/* Preview Elements */}
          <div className="absolute bottom-2 right-2 flex items-center space-x-2">
            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
              <span className="text-sm">👀</span>
            </div>
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-sm">🎯</span>
            </div>
            <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
              <span className="text-sm">🎨</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherThumbnail; 
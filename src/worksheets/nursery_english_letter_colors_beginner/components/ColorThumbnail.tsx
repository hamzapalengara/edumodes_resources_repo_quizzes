import React from 'react';
import backgroundImage from '../assets/colors.jpg';

const ColorThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/80 via-blue-500/80 to-green-500/80" />

      {/* Content container */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-6">
        {/* Title */}
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          Color Words Spelling
        </h1>

        {/* Word pattern showcase */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
            <div className="text-xl font-bold text-white mb-2">3 Letters</div>
            <div className="flex gap-2 justify-center">
              <span className="text-white">RED</span>
              <span className="text-yellow-300">•</span>
              <span className="text-white">TAN</span>
            </div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
            <div className="text-xl font-bold text-white mb-2">4 Letters</div>
            <div className="flex gap-2 justify-center">
              <span className="text-white">BLUE</span>
              <span className="text-yellow-300">•</span>
              <span className="text-white">PINK</span>
            </div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
            <div className="text-xl font-bold text-white mb-2">5 Letters</div>
            <div className="flex gap-2 justify-center">
              <span className="text-white">BLACK</span>
              <span className="text-yellow-300">•</span>
              <span className="text-white">GREEN</span>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="flex gap-6 justify-center">
          <div className="flex items-center gap-2">
            <span className="text-3xl">🔊</span>
            <span className="text-white font-medium">Audio</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-3xl">✨</span>
            <span className="text-white font-medium">Interactive</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-3xl">🎯</span>
            <span className="text-white font-medium">Practice</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorThumbnail; 
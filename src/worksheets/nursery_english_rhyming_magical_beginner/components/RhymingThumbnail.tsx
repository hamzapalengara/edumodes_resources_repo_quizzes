import React from 'react';
import backgroundImage from '../assets/rhyme.jpg';

const RhymingThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] relative overflow-hidden">
      {/* Background with magical reading theme */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/80 via-blue-600/80 to-pink-600/80" />

      {/* Content container */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-6">
        {/* Title */}
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          Rhyming Words Spelling
        </h1>

        {/* Rhyming words showcase */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
            <div className="text-xl font-bold text-white mb-2">-at words</div>
            <div className="flex gap-2 justify-center">
              <span className="text-white">CAT</span>
              <span className="text-yellow-300">•</span>
              <span className="text-white">BAT</span>
              <span className="text-yellow-300">•</span>
              <span className="text-white">RAT</span>
            </div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
            <div className="text-xl font-bold text-white mb-2">-og words</div>
            <div className="flex gap-2 justify-center">
              <span className="text-white">DOG</span>
              <span className="text-yellow-300">•</span>
              <span className="text-white">LOG</span>
              <span className="text-yellow-300">•</span>
              <span className="text-white">FOG</span>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="flex gap-4 justify-center">
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

export default RhymingThumbnail; 
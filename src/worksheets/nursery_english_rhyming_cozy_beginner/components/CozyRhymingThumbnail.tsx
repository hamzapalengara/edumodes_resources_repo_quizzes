import React from 'react';
import backgroundImage from '../assets/cozy-reading.jpg';

const CozyRhymingThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] relative overflow-hidden">
      {/* Background with cozy reading theme */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-600/80 via-orange-600/80 to-rose-600/80" />

      {/* Content container */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-6">
        {/* Title */}
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          Cozy Reading Time
        </h1>
        <h2 className="text-xl text-yellow-200 mb-8">Rhyming Words Dictation</h2>

        {/* Rhyming words showcase */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
            <div className="text-lg font-bold text-white mb-2">-ap words</div>
            <div className="flex flex-col gap-1 items-center">
              <span className="text-white">CAP 🍶</span>
              <span className="text-white">TAP 🚰</span>
              <span className="text-white">LAP 🍽️</span>
            </div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
            <div className="text-lg font-bold text-white mb-2">-ot words</div>
            <div className="flex flex-col gap-1 items-center">
              <span className="text-white">POT 🥘</span>
              <span className="text-white">HOT 🔥</span>
              <span className="text-white">DOT 🍫</span>
            </div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
            <div className="text-lg font-bold text-white mb-2">-un words</div>
            <div className="flex flex-col gap-1 items-center">
              <span className="text-white">BUN 🥖</span>
              <span className="text-white">FUN 😊</span>
              <span className="text-white">SUN ☀️</span>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="flex gap-6 justify-center">
          <div className="flex items-center gap-2">
            <span className="text-3xl">🎧</span>
            <span className="text-white font-medium">Listen</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-3xl">✍️</span>
            <span className="text-white font-medium">Spell</span>
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

export default CozyRhymingThumbnail; 
import React from 'react';

const SpeakingBusThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-orange-400 to-yellow-400 flex items-center justify-center p-4">
      <div className="w-[420px] h-[240px] bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center relative overflow-hidden">
        {/* Road design at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gray-700 flex items-center justify-center">
          <div className="w-full h-2 flex items-center justify-center">
            <div className="w-16 h-1 bg-yellow-400 mx-2"></div>
            <div className="w-16 h-1 bg-yellow-400 mx-2"></div>
          </div>
        </div>
        
        <div className="text-4xl mb-4 flex items-center gap-4 relative">
          <span role="img" aria-label="passenger" className="transform -scale-x-100">🧑</span>
          <span role="img" aria-label="bus" className="text-5xl">🚌</span>
          <span role="img" aria-label="driver">👨‍✈️</span>
        </div>
        
        <h1 className="text-2xl font-bold text-center text-orange-600 mb-4">
          Speaking with Bus Driver
        </h1>

        <div className="flex items-center justify-center gap-3 text-lg text-orange-500">
          <span>Ask</span>
          <span>→</span>
          <span>Listen</span>
          <span>→</span>
          <span>Travel</span>
        </div>

        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {['🚌', '🗺️', '🎫', '⏰', '✨'].map((emoji, index) => (
            <span 
              key={index}
              className="text-2xl"
              role="img"
            >
              {emoji}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpeakingBusThumbnail; 
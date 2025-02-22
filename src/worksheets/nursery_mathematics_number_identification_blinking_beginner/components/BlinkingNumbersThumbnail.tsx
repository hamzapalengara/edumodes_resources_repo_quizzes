import React from 'react';
import trainStationBg from '../train-station.jpg';

const BlinkingNumbersThumbnail: React.FC = () => {
  return (
    // Outer container: 500x375px (4:3 ratio)
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-blue-100 to-yellow-100 flex items-center justify-center">
      {/* Inner container: 420x240px */}
      <div className="w-[420px] h-[240px] bg-white rounded-lg shadow-lg p-4 flex flex-col items-center justify-center relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${trainStationBg})`,
            filter: 'brightness(0.9)',
          }}
        />
        
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>
        
        {/* Train Track */}
        <div className="absolute bottom-8 left-0 w-full">
          <div className="h-2 bg-gray-400/80"></div>
          <div className="flex justify-between px-4 -mt-1">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="w-4 h-1 bg-gray-600/90"></div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg px-4 py-2 mb-4">
            <h1 className="text-2xl font-bold text-center text-gray-800">
              Number Train Adventure
            </h1>
          </div>
          
          {/* Train with Numbers */}
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="relative w-12 h-12 bg-gradient-to-b from-yellow-300 to-yellow-400 rounded-lg border-2 border-yellow-500 flex items-center justify-center shadow-lg">
              <span className="text-xl font-bold">1</span>
              <div className="absolute -bottom-1 left-1 w-2 h-2 bg-gray-800 rounded-full"></div>
              <div className="absolute -bottom-1 right-1 w-2 h-2 bg-gray-800 rounded-full"></div>
            </div>
            <div className="relative w-12 h-12 bg-gradient-to-b from-yellow-300 to-yellow-400 rounded-lg border-2 border-yellow-500 flex items-center justify-center transform scale-110 shadow-lg">
              <span className="text-xl font-bold">5</span>
              <div className="absolute -bottom-1 left-1 w-2 h-2 bg-gray-800 rounded-full"></div>
              <div className="absolute -bottom-1 right-1 w-2 h-2 bg-gray-800 rounded-full"></div>
            </div>
            <div className="relative w-12 h-12 bg-gradient-to-b from-yellow-300 to-yellow-400 rounded-lg border-2 border-yellow-500 flex items-center justify-center shadow-lg">
              <span className="text-xl font-bold">10</span>
              <div className="absolute -bottom-1 left-1 w-2 h-2 bg-gray-800 rounded-full"></div>
              <div className="absolute -bottom-1 right-1 w-2 h-2 bg-gray-800 rounded-full"></div>
            </div>
          </div>

          {/* Range indicator */}
          <div className="bg-white/80 backdrop-blur-sm rounded-full px-4 py-1 text-gray-800 font-semibold text-center">
            1 → 10
          </div>

          {/* Train Smoke */}
          <div className="absolute -top-2 left-[140px] animate-smoke">
            <div className="w-3 h-3 bg-gray-300 rounded-full opacity-60"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full opacity-40 ml-1 -mt-1"></div>
            <div className="w-1 h-1 bg-gray-300 rounded-full opacity-20 ml-2 -mt-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlinkingNumbersThumbnail; 
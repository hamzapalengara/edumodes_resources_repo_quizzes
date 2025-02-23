import React from 'react';
import buildingBg from '../building.jpg';

const OddNumbersThumbnail: React.FC = () => {
  return (
    // Outer container: 500x375px (4:3 ratio)
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
      {/* Inner container: 420x240px */}
      <div className="w-[420px] h-[240px] bg-white rounded-lg shadow-lg p-4 flex flex-col items-center justify-center relative overflow-hidden">
        {/* Building Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${buildingBg})`,
            filter: 'brightness(0.9)',
          }}
        />
        
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>
        
        {/* Content */}
        <div className="relative z-10">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg px-4 py-2 mb-4">
            <h1 className="text-2xl font-bold text-center text-gray-800">
              Catch the Odd Numbers
            </h1>
          </div>
          
          {/* Falling Numbers */}
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="relative w-12 h-12 bg-gradient-to-b from-purple-300 to-purple-400 rounded-lg border-2 border-purple-500 flex items-center justify-center shadow-lg transform -rotate-12 animate-bounce">
              <span className="text-xl font-bold text-white">1</span>
            </div>
            <div className="relative w-12 h-12 bg-gradient-to-b from-purple-300 to-purple-400 rounded-lg border-2 border-purple-500 flex items-center justify-center shadow-lg transform rotate-12 animate-bounce delay-100">
              <span className="text-xl font-bold text-white">3</span>
            </div>
            <div className="relative w-12 h-12 bg-gradient-to-b from-purple-300 to-purple-400 rounded-lg border-2 border-purple-500 flex items-center justify-center shadow-lg transform -rotate-6 animate-bounce delay-200">
              <span className="text-xl font-bold text-white">5</span>
            </div>
          </div>

          {/* Range indicator */}
          <div className="bg-white/80 backdrop-blur-sm rounded-full px-4 py-1 text-gray-800 font-semibold text-center">
            Numbers 1-10
          </div>
        </div>
      </div>
    </div>
  );
};

export default OddNumbersThumbnail; 
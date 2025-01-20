import React from 'react';

const RainbowColoringThumbnail: React.FC = () => {
  const colors = [
    '#FF0000', // Red
    '#FF7F00', // Orange
    '#FFFF00', // Yellow
    '#00FF00', // Green
    '#0000FF', // Blue
    '#4B0082', // Indigo
    '#8F00FF', // Violet
  ];

  return (
    <div className="w-[500px] h-[375px] overflow-hidden bg-gradient-to-r from-blue-400 to-purple-400 font-sans relative">
      <div className="w-[420px] h-[240px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Rainbow Coloring 🌈
        </h1>
        
        {/* Mini Rainbow Preview */}
        <div className="relative w-[200px] h-[100px]">
          {colors.map((color, index) => (
            <div
              key={color}
              className="absolute w-full rounded-t-full"
              style={{
                backgroundColor: color,
                height: '20px',
                bottom: `${index * 12}px`,
                opacity: 0.8,
              }}
            />
          ))}
        </div>

        <p className="text-sm text-gray-600 mt-4">
          Learn colors with a fun rainbow!
        </p>
      </div>
    </div>
  );
};

export default RainbowColoringThumbnail; 
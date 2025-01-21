import React from 'react';

const cardImages = ['🐶', '🐱', '🐰', '🐼', '🦊', '🦁'];

const MemoryThumbnail: React.FC = () => {
  return (
    // Outer container with exact 4:3 ratio (500x375)
    <div 
      className="relative w-[500px] h-[375px] overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #FFC0CB, #FFE77A)',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
      }}
    >
      {/* Inner container with exact size (420x240) and centered */}
      <div 
        className="absolute w-[420px] h-[240px] bg-white rounded-lg shadow-xl"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      >
        {/* Content */}
        <div className="h-full flex flex-col p-6">
          {/* Header */}
          <div className="text-center mb-4">
            <h1 className="text-xl font-bold text-blue-600 mb-1">
              🌟 Magic Memory Match 🌟
            </h1>
            <p className="text-sm text-blue-500">
              Match animal friends and earn points!
            </p>
          </div>

          {/* Card Preview */}
          <div className="flex-1 grid grid-cols-3 gap-3">
            {cardImages.map((emoji, index) => (
              <div
                key={index}
                className={`
                  aspect-square
                  flex items-center justify-center
                  text-2xl
                  rounded-md
                  ${index % 2 === 0 
                    ? 'bg-gradient-to-br from-blue-400 to-blue-600' 
                    : 'bg-white border-2 border-blue-400'
                  }
                `}
              >
                {index % 2 === 0 ? '' : emoji}
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="text-center text-sm text-blue-500 mt-4">
            Ages 3-4 • Memory Skills • Interactive
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemoryThumbnail; 
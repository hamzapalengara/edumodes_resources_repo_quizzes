import React from 'react';

const ClockDigitalThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-pink-100 to-yellow-100 flex items-center justify-center p-8">
      <div className="w-[420px] h-[240px] bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold text-center text-purple-600">
          Set Digital Time on Clock
        </h1>
        
        <div className="flex items-center gap-8">
          {/* Sample Clock */}
          <div className="relative w-24 h-24">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-100 via-indigo-50 to-blue-100 border-4 border-purple-200 shadow-lg">
              {/* Sample Hour Hand */}
              <div
                className="absolute w-1.5 h-12 bg-gradient-to-t from-purple-600 to-indigo-500 rounded-full"
                style={{
                  left: 'calc(50% - 3px)',
                  bottom: '50%',
                  transformOrigin: 'bottom',
                  transform: 'rotate(45deg)'
                }}
              />
              {/* Sample Minute Hand */}
              <div
                className="absolute w-1 h-14 bg-gradient-to-t from-blue-500 to-indigo-400 rounded-full"
                style={{
                  left: 'calc(50% - 2px)',
                  bottom: '50%',
                  transformOrigin: 'bottom',
                  transform: 'rotate(180deg)'
                }}
              />
              {/* Center Dot */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gradient-to-br from-purple-400 to-indigo-300 border-2 border-white" />
            </div>
          </div>

          {/* Sample Digital Time */}
          <div className="text-4xl font-mono font-bold text-purple-600">
            2:30
          </div>
        </div>

        <div className="text-sm text-center text-purple-500 mt-2">
          1:00 → 12:00
        </div>
      </div>
    </div>
  );
};

export default ClockDigitalThumbnail; 
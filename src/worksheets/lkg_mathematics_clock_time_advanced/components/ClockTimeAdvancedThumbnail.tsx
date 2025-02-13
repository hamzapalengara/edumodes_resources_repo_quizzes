import React from 'react';

const ClockTimeAdvancedThumbnail: React.FC = () => {
  const renderClock = (hours: number, minutes: number) => {
    const hourDegrees = ((hours % 12) + minutes / 60) * 30;
    const minuteDegrees = minutes * 6;

    return (
      <div className="relative w-24 h-24">
        {/* Clock Face with fun background */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 shadow-lg border-2 border-indigo-300 overflow-hidden">
          {/* Fun Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            {['🌟', '✨', '⭐️', '🌈'].map((emoji, i) => (
              <div
                key={i}
                className="absolute text-xs"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                {emoji}
              </div>
            ))}
          </div>

          {/* Hour Numbers */}
          {[...Array(12)].map((_, i) => {
            const angle = ((i * 30 - 90) * Math.PI) / 180;
            const radius = 35;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            const number = i + 1;
            return (
              <div
                key={i}
                className="absolute w-5 h-5 flex items-center justify-center"
                style={{
                  left: `calc(50% + ${x}px - 10px)`,
                  top: `calc(50% + ${y}px - 10px)`
                }}
              >
                <div className="relative">
                  <span className="text-xs font-bold bg-white rounded-full w-5 h-5 flex items-center justify-center shadow-sm border border-indigo-200 bg-gradient-to-br from-indigo-50 to-white">
                    {number}
                  </span>
                  {/* Fun indicators for special positions */}
                  {number === 12 && <span className="absolute -top-3 text-[8px]">🎯</span>}
                  {number === 3 && <span className="absolute -right-3 text-[8px]">🌟</span>}
                  {number === 6 && <span className="absolute -bottom-3 text-[8px]">🌈</span>}
                  {number === 9 && <span className="absolute -left-3 text-[8px]">✨</span>}
                </div>
              </div>
            );
          })}

          {/* Hour Hand */}
          <div
            className="absolute flex items-center justify-center origin-bottom"
            style={{
              width: '3px',
              height: '30%',
              left: 'calc(50% - 1.5px)',
              bottom: '50%',
              transformOrigin: 'bottom',
              transform: `rotate(${hourDegrees}deg)`
            }}
          >
            <div className="w-full h-full bg-gradient-to-t from-indigo-600 to-violet-500 rounded-full shadow-lg" />
            <span className="absolute -top-2 text-[8px]">🌙</span>
          </div>

          {/* Minute Hand */}
          <div
            className="absolute flex items-center justify-center origin-bottom"
            style={{
              width: '2px',
              height: '40%',
              left: 'calc(50% - 1px)',
              bottom: '50%',
              transformOrigin: 'bottom',
              transform: `rotate(${minuteDegrees}deg)`
            }}
          >
            <div className="w-full h-full bg-gradient-to-t from-purple-500 to-fuchsia-400 rounded-full shadow-lg" />
            <span className="absolute -top-2 text-[8px]">☀️</span>
          </div>

          {/* Center Dot */}
          <div
            className="absolute w-3 h-3 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center"
            style={{
              left: 'calc(50% - 6px)',
              top: 'calc(50% - 6px)',
              boxShadow: '0 0 10px rgba(0,0,0,0.1)'
            }}
          >
            <span className="text-[6px]">🎈</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-pink-400 to-yellow-400 flex items-center justify-center p-4">
      <div className="w-[420px] h-[240px] bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center space-y-4">
        <h1 className="text-2xl font-bold text-center bg-gradient-to-br from-indigo-600 to-violet-600 bg-clip-text text-transparent">
          Fun with Clock Time!
        </h1>
        
        <div className="flex items-center justify-center space-x-8">
          {/* Example Clock: Half Past */}
          <div className="flex flex-col items-center">
            {renderClock(3, 30)}
            <span className="mt-2 text-sm font-medium text-indigo-600">Half Past</span>
          </div>

          {/* Example Clock: Quarter Past */}
          <div className="flex flex-col items-center">
            {renderClock(9, 15)}
            <span className="mt-2 text-sm font-medium text-indigo-600">Quarter Past</span>
          </div>

          {/* Example Clock: Quarter To */}
          <div className="flex flex-col items-center">
            {renderClock(6, 45)}
            <span className="mt-2 text-sm font-medium text-indigo-600">Quarter To</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClockTimeAdvancedThumbnail; 
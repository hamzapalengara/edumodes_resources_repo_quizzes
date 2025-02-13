import React from 'react';

const ClockSettingThumbnail: React.FC = () => {
  const renderClock = (hours: number, minutes: number) => {
    const hourDegrees = ((hours % 12) + minutes / 60) * 30;
    const minuteDegrees = (minutes / 60) * 360;

    return (
      <div className="w-32 h-32 relative bg-white rounded-full border-4 border-indigo-200 shadow-lg">
        {/* Clock Numbers */}
        {[...Array(12)].map((_, i) => {
          const number = ((i - 1 + 12) % 12) + 1;
          const angle = (i * 30 - 90) * (Math.PI / 180);
          const x = 50 + 40 * Math.cos(angle);
          const y = 50 + 40 * Math.sin(angle);
          
          return (
            <div
              key={i}
              className="absolute text-sm font-bold text-indigo-600"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: 'translate(-50%, -50%)'
              }}
            >
              {number === 12 ? '🎯' : 
               number === 3 ? '🌟' : 
               number === 6 ? '🌈' : 
               number === 9 ? '✨' : 
               number}
            </div>
          );
        })}

        {/* Hour Hand */}
        <div
          className="absolute w-1 h-10 bg-indigo-600 rounded-full origin-bottom"
          style={{
            left: '50%',
            bottom: '50%',
            transform: `translateX(-50%) rotate(${hourDegrees}deg)`
          }}
        >
          <span className="absolute -top-4 left-1/2 -translate-x-1/2">🌙</span>
        </div>

        {/* Minute Hand */}
        <div
          className="absolute w-0.5 h-12 bg-violet-500 rounded-full origin-bottom"
          style={{
            left: '50%',
            bottom: '50%',
            transform: `translateX(-50%) rotate(${minuteDegrees}deg)`
          }}
        >
          <span className="absolute -top-4 left-1/2 -translate-x-1/2">☀️</span>
        </div>

        {/* Center Dot */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          🎈
        </div>
      </div>
    );
  };

  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-pink-100 to-yellow-100 flex items-center justify-center">
      <div className="w-[420px] h-[240px] bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center gap-4">
        <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
          Set the Clock Hands
        </h1>
        
        <div className="flex items-center gap-8">
          {/* Example Clock 1: 3 o'clock */}
          {renderClock(3, 0)}
          
          {/* Arrow */}
          <div className="text-2xl text-indigo-400">→</div>
          
          {/* Example Clock 2: Half past 6 */}
          {renderClock(6, 30)}
        </div>
      </div>
    </div>
  );
};

export default ClockSettingThumbnail; 
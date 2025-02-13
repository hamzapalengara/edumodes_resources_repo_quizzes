import React from 'react';
import { motion } from 'framer-motion';

const ClockSecondsThumbnail: React.FC = () => {
  const renderClock = () => {
    return (
      <div className="relative w-32 h-32">
        {/* Clock Face */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-100 via-amber-50 to-yellow-100 shadow-xl border-4 border-orange-300 overflow-hidden">
          {/* Fun Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            {['⭐️', '✨', '⚡️'].map((emoji, i) => (
              <div
                key={i}
                className="absolute text-sm"
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
            const radius = 40;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            const number = ((i - 1 + 12) % 12) + 1;
            
            return (
              <div
                key={i}
                className="absolute flex items-center justify-center"
                style={{
                  width: '20px',
                  height: '20px',
                  left: `calc(50% + ${x}px - 10px)`,
                  top: `calc(50% + ${y}px - 10px)`
                }}
              >
                <div className="relative">
                  <span className="text-sm font-bold bg-white rounded-full w-5 h-5 flex items-center justify-center shadow-sm border border-orange-200 bg-gradient-to-br from-orange-50 to-white">
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

          {/* Second Markers */}
          {[...Array(60)].map((_, i) => {
            const angle = (i * 6 - 90) * (Math.PI / 180);
            const radius = 48;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            const isHour = i % 5 === 0;
            
            return (
              <div
                key={i}
                className={`absolute rounded-full ${isHour ? 'bg-orange-400' : 'bg-orange-200'}`}
                style={{
                  width: isHour ? '2px' : '1px',
                  height: isHour ? '6px' : '4px',
                  left: `calc(50% + ${x}px - ${isHour ? '1px' : '0.5px'})`,
                  top: `calc(50% + ${y}px - ${isHour ? '3px' : '2px'})`,
                  transform: `rotate(${i * 6}deg)`
                }}
              />
            );
          })}

          {/* Seconds Hand */}
          <div
            className="absolute flex items-center justify-center origin-bottom"
            style={{
              width: '2px',
              height: '50%',
              left: 'calc(50% - 1px)',
              bottom: '50%',
              transformOrigin: 'bottom',
              transform: 'rotate(150deg)'
            }}
          >
            <div className="w-full h-full bg-gradient-to-t from-red-500 to-orange-400 rounded-full shadow-lg" />
            <span className="absolute -top-4 text-xs">⚡️</span>
          </div>

          {/* Center Dot */}
          <div
            className="absolute w-4 h-4 bg-gradient-to-br from-orange-400 to-amber-300 rounded-full flex items-center justify-center"
            style={{
              left: 'calc(50% - 8px)',
              top: 'calc(50% - 8px)',
              boxShadow: '0 0 10px rgba(0,0,0,0.1)'
            }}
          >
            <span className="text-[8px]">🎈</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-orange-400 to-yellow-400 flex items-center justify-center p-6">
      <div className="w-[420px] h-[240px] bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 flex flex-col items-center justify-center gap-4 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 opacity-5">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-4xl"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: 'translate(-50%, -50%) rotate(45deg)'
              }}
            >
              ⏱️
            </div>
          ))}
        </div>

        <h1 className="text-2xl font-bold text-center text-orange-600 relative">
          Count the Seconds!
          <span className="absolute -right-6 top-0">⏱️</span>
        </h1>
        
        <div className="flex items-center justify-center gap-8 relative">
          {/* Sample Clock */}
          <div className="flex-shrink-0">
            {renderClock()}
          </div>

          {/* Sample Counter with Animation */}
          <motion.div 
            className="flex flex-col items-center"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <div className="text-3xl font-mono font-bold text-orange-600">
              5
            </div>
            <div className="text-sm text-orange-500 mt-1">
              seconds
            </div>
          </motion.div>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mt-2">
          <div className="text-sm font-medium text-orange-500 px-3 py-1 bg-orange-50 rounded-full border border-orange-200">
            2-10 seconds
          </div>
          <div className="text-sm font-medium text-orange-500 px-3 py-1 bg-orange-50 rounded-full border border-orange-200">
            Fun Practice!
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClockSecondsThumbnail; 
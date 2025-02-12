import React from 'react';

const DiceCountingThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="w-[420px] h-[240px] bg-white/20 backdrop-blur-md rounded-xl p-6 flex flex-col items-center justify-center shadow-lg">
        <h1 className="text-2xl font-bold text-white text-center mb-4">
          Count and Write Dice Numbers
        </h1>
        
        <div className="flex items-center gap-4">
          <div className="dice-face">
            <div className="dot top-left"></div>
            <div className="dot top-right"></div>
            <div className="dot center-dot"></div>
            <div className="dot bottom-left"></div>
            <div className="dot bottom-right"></div>
          </div>
          <div className="text-3xl text-white">→</div>
          <div className="w-12 h-12 bg-white/30 backdrop-blur-md rounded-lg flex items-center justify-center text-2xl font-bold text-white">
            5
          </div>
        </div>

        <div className="text-white/90 text-lg mt-4">
          Numbers 1-6
        </div>
      </div>

      <style>{`
        .dice-face {
          width: 60px;
          height: 60px;
          background: white;
          border-radius: 8px;
          box-shadow: 
            inset 0 0 15px rgba(0,0,0,0.1),
            0 5px 15px rgba(0,0,0,0.2);
          position: relative;
        }

        .dot {
          position: absolute;
          width: 10px;
          height: 10px;
          background: #333;
          border-radius: 50%;
          box-shadow: inset 0 0 4px rgba(0,0,0,0.5);
        }

        .center-dot {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .top-left {
          top: 20%;
          left: 20%;
        }

        .top-right {
          top: 20%;
          right: 20%;
        }

        .bottom-left {
          bottom: 20%;
          left: 20%;
        }

        .bottom-right {
          bottom: 20%;
          right: 20%;
        }
      `}</style>
    </div>
  );
};

export default DiceCountingThumbnail; 
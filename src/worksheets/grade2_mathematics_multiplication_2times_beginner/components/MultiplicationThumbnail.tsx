import React from 'react';

const MultiplicationThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-pink-100 to-yellow-100 flex items-center justify-center p-10">
      <div className="w-[420px] h-[240px] bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-blue-600 mb-4 text-center">
          Fun with the 2 Times Table! 🌟
        </h1>
        
        <div className="flex items-center justify-center space-x-8">
          {/* Visual examples */}
          <div className="text-center">
            <div className="text-3xl mb-2">
              🍎🍎
            </div>
            <div className="text-lg text-blue-600">
              1 × 2 = 2
            </div>
          </div>

          <div className="text-center">
            <div className="text-3xl mb-2">
              🌟🌟 | 🌟🌟
            </div>
            <div className="text-lg text-blue-600">
              2 × 2 = 4
            </div>
          </div>

          <div className="text-center">
            <div className="text-3xl mb-2">
              🎈🎈 | 🎈🎈 | 🎈🎈
            </div>
            <div className="text-lg text-blue-600">
              3 × 2 = 6
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiplicationThumbnail; 
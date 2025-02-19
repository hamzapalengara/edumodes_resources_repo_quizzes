import React from 'react';

const GolfMultiplicationThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] overflow-hidden bg-gradient-to-r from-pink-500 to-yellow-500 font-sans relative">
      <div className="w-[420px] h-[240px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="bg-green-800 text-white p-4">
            <h1 className="text-xl font-bold text-center">
              10 Times Table Golf Challenge
            </h1>
          </div>

          {/* Content Preview */}
          <div className="flex-1 p-4 flex items-center justify-center">
            <div className="grid grid-cols-2 gap-3 w-full max-w-[300px]">
              {/* Question Example */}
              <div className="bg-green-800 text-white p-3 rounded-lg flex items-center justify-center text-xl font-bold">
                5 × 10
              </div>
              {/* Answer Example */}
              <div className="bg-yellow-500 text-white p-3 rounded-lg flex items-center justify-center text-xl font-bold">
                50
              </div>
              {/* Golf Flag Icon */}
              <div className="col-span-2 text-center text-4xl">
                ⛳
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-green-100 p-2 text-center text-green-800 text-sm">
            Match multiplication facts to sink your putts!
          </div>
        </div>
      </div>
    </div>
  );
};

export default GolfMultiplicationThumbnail; 
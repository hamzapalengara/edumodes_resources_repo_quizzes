import React from 'react';

const OrangeNumberMatchingThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] overflow-hidden bg-gradient-to-r from-orange-500 to-orange-700 font-sans relative">
      <div className="w-[420px] h-[240px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="absolute inset-0 flex flex-col">
          {/* Header */}
          <div className="bg-orange-800 text-white p-4">
            <h1 className="text-xl font-bold text-center">
              Orange Number Match 🍊
            </h1>
          </div>

          {/* Preview Content */}
          <div className="flex-1 p-4 flex items-center justify-center">
            <div className="grid grid-cols-3 gap-4">
              {/* Sample Number Pairs */}
              <div className="bg-orange-100 rounded-lg p-2 text-center">
                <span className="text-2xl font-bold text-orange-800">6</span>
              </div>
              <div className="bg-orange-100 rounded-lg p-2 text-center">
                <span className="text-2xl font-bold text-orange-800">six</span>
              </div>
              <div className="bg-orange-100 rounded-lg p-2 text-center">
                <span className="text-2xl font-bold text-orange-800">➡️</span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-orange-700 text-white p-2 text-center text-sm">
            Match Numbers 6 to 10
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrangeNumberMatchingThumbnail; 
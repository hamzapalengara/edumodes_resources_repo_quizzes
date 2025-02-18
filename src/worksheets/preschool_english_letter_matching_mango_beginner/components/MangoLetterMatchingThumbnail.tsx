import React from 'react';

const MangoLetterMatchingThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] overflow-hidden bg-gradient-to-r from-amber-500 to-yellow-500 font-sans relative">
      <div className="w-[420px] h-[240px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="absolute inset-0 flex flex-col">
          {/* Header */}
          <div className="bg-amber-800 text-white p-4">
            <h1 className="text-xl font-bold text-center">
              Sweet Mango Letter Match 🥭
            </h1>
          </div>

          {/* Preview Content */}
          <div className="flex-1 p-4 flex items-center justify-center">
            <div className="grid grid-cols-3 gap-4">
              {/* Sample Letter Pairs */}
              <div className="bg-amber-100 rounded-lg p-2 text-center">
                <span className="text-2xl font-bold text-amber-800">M</span>
              </div>
              <div className="bg-amber-100 rounded-lg p-2 text-center">
                <span className="text-2xl font-bold text-amber-800">m</span>
              </div>
              <div className="bg-amber-100 rounded-lg p-2 text-center">
                <span className="text-2xl font-bold text-amber-800">➡️</span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-amber-700 text-white p-2 text-center text-sm">
            Match Letters M to R
          </div>
        </div>
      </div>
    </div>
  );
};

export default MangoLetterMatchingThumbnail; 
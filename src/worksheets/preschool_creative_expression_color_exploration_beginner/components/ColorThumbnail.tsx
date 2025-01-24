import React from 'react';

const ColorThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-r from-pink-500 to-yellow-500 font-sans relative overflow-hidden">
      <div className="w-[420px] h-[240px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="p-6 h-full">
          <h1 className="text-3xl font-bold text-center mb-4 select-none">
            Rainbow Colors 🌈
          </h1>

          <div className="grid grid-cols-2 gap-4 select-none">
            {/* Activity 1 Preview */}
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-3">
              <h2 className="text-lg font-bold text-pink-800 mb-2">
                Learn Colors
              </h2>
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-red-500 h-8 rounded-lg"></div>
                <div className="bg-yellow-400 h-8 rounded-lg"></div>
                <div className="bg-blue-500 h-8 rounded-lg"></div>
              </div>
            </div>

            {/* Activity 2 Preview */}
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-3">
              <h2 className="text-lg font-bold text-blue-800 mb-2">
                Color Detective
              </h2>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-green-500 h-8 rounded-lg ring-2 ring-green-600 ring-offset-2"></div>
                <div className="bg-purple-500 h-8 rounded-lg"></div>
              </div>
            </div>
          </div>

          <div className="mt-4 flex justify-center gap-4 select-none">
            <div className="flex items-center text-sm text-blue-800">
              <span className="mr-1">👀</span> Color Recognition
            </div>
            <div className="flex items-center text-sm text-blue-800">
              <span className="mr-1">🎯</span> Matching Skills
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorThumbnail; 
import React from 'react';

const RainbowColoringThumbnail: React.FC = () => {
  return (
    <div className="w-full h-full bg-blue-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl p-6 shadow-lg w-full max-w-sm">
        <div className="space-y-6">
          {/* Title */}
          <h1 className="text-2xl font-bold text-center text-blue-800">
            Rainbow Colors Adventure! 🌈
          </h1>

          {/* Preview Grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* Rainbow Preview */}
            <div className="bg-blue-50 rounded-lg p-3">
              <div className="text-center mb-2 font-semibold">Rainbow</div>
              <div className="flex flex-col gap-1">
                <div className="h-2 rounded-full bg-red-500"></div>
                <div className="h-2 rounded-full bg-orange-500"></div>
                <div className="h-2 rounded-full bg-yellow-500"></div>
                <div className="h-2 rounded-full bg-green-500"></div>
                <div className="h-2 rounded-full bg-blue-500"></div>
                <div className="h-2 rounded-full bg-purple-500"></div>
              </div>
            </div>

            {/* Sun Preview */}
            <div className="bg-yellow-50 rounded-lg p-3">
              <div className="text-center mb-2 font-semibold">Sun</div>
              <div className="relative w-12 h-12 mx-auto">
                <div className="absolute inset-3 bg-yellow-400 rounded-full"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-1 bg-yellow-500 rotate-0"></div>
                  <div className="w-full h-1 bg-yellow-500 rotate-45 absolute"></div>
                  <div className="w-full h-1 bg-yellow-500 rotate-90 absolute"></div>
                  <div className="w-full h-1 bg-yellow-500 rotate-135 absolute"></div>
                </div>
              </div>
            </div>

            {/* Patterns Preview */}
            <div className="bg-green-50 rounded-lg p-3 col-span-2">
              <div className="text-center mb-2 font-semibold">Patterns</div>
              <div className="flex justify-center gap-2">
                <div className="w-6 h-6 rounded-full bg-red-500"></div>
                <div className="w-6 h-6 rounded-full bg-yellow-500"></div>
                <div className="w-6 h-6 rounded-full bg-red-500"></div>
                <div className="w-6 h-6 rounded-full bg-yellow-500"></div>
              </div>
            </div>
          </div>

          {/* Age Range */}
          <div className="text-center text-sm text-gray-600">
            For ages 3-5
          </div>
        </div>
      </div>
    </div>
  );
};

export default RainbowColoringThumbnail; 
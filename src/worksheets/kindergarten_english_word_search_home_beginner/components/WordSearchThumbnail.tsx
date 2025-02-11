import React from 'react';

const WordSearchThumbnail: React.FC = () => {
  return (
    // Outer container: 500x375px (4:3 ratio)
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-rose-400 to-amber-500 flex items-center justify-center p-4">
      {/* Inner container: 420x240px */}
      <div className="w-[420px] h-[240px] bg-white rounded-xl shadow-lg p-4 flex flex-col">
        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 mb-2 font-system">
          Home Words Search
        </h1>

        {/* Preview Content */}
        <div className="flex-1 flex gap-4">
          {/* Word Grid Preview */}
          <div className="flex-1">
            <div className="grid grid-cols-7 gap-1">
              {Array(21).fill(null).map((_, index) => (
                <div
                  key={index}
                  className="aspect-square bg-gray-100 rounded flex items-center justify-center font-bold text-gray-600"
                >
                  {String.fromCharCode(65 + Math.floor(Math.random() * 26))}
                </div>
              ))}
            </div>
          </div>

          {/* Word Examples */}
          <div className="w-32 flex flex-col justify-center">
            <div className="space-y-2">
              <div className="flex items-center bg-rose-200 rounded-lg p-1">
                <span className="text-xl mr-2">🛏️</span>
                <span className="font-bold text-rose-800">BED</span>
              </div>
              <div className="flex items-center bg-amber-200 rounded-lg p-1">
                <span className="text-xl mr-2">🛋️</span>
                <span className="font-bold text-amber-800">SOFA</span>
              </div>
              <div className="flex items-center bg-yellow-200 rounded-lg p-1">
                <span className="text-xl mr-2">💡</span>
                <span className="font-bold text-yellow-800">LAMP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordSearchThumbnail; 
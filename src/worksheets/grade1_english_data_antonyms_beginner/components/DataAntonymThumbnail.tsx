import React from 'react';

const DataAntonymThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center p-4">
      <div className="w-[420px] h-[240px] bg-white rounded-xl shadow-lg p-6">
        <div className="h-full flex flex-col">
          {/* Title */}
          <h1 className="text-2xl font-bold text-blue-600 text-center mb-4">
            Data Antonyms Word Search
          </h1>

          {/* Preview Content */}
          <div className="flex-1 flex">
            {/* Mini Grid */}
            <div className="flex-1 grid grid-cols-4 gap-1 bg-blue-50 p-2 rounded-lg mr-4">
              {['F', 'U', 'L', 'L', 'E', 'M', 'P', 'T',
                'I', 'N', 'O', 'U', 'T', 'S', 'T', 'A'].map((letter, index) => (
                <div
                  key={index}
                  className="aspect-square flex items-center justify-center bg-white rounded border-2 border-blue-200 font-bold text-blue-700"
                >
                  {letter}
                </div>
              ))}
            </div>

            {/* Word List */}
            <div className="w-32">
              <div className="bg-blue-50 p-2 rounded-lg h-full">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">📦</span>
                    <span className="font-bold text-blue-700">FULL</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🚪</span>
                    <span className="font-bold text-blue-700">IN</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">✅</span>
                    <span className="font-bold text-blue-700">YES</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Grade Level */}
          <div className="text-center mt-4">
            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
              Grade 1 • Beginner
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataAntonymThumbnail; 
import React from 'react';

const NatureWordsThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-green-100 to-emerald-200 flex items-center justify-center p-4">
      <div className="w-[420px] h-[240px] bg-white rounded-lg shadow-lg p-6 flex flex-col">
        <h1 className="text-2xl font-bold text-center text-emerald-600 mb-4">
          Nature Words
        </h1>
        
        {/* Preview Grid */}
        <div className="flex-1 flex items-center justify-center">
          <div className="grid grid-cols-4 gap-1 bg-emerald-50 p-2 rounded">
            {['T', 'R', 'E', 'E', 'B', 'I', 'R', 'D', 'L', 'E', 'A', 'F', 'S', 'E', 'E', 'D'].map((letter, index) => (
              <div
                key={index}
                className="w-8 h-8 flex items-center justify-center text-lg font-bold bg-white rounded border-2 border-emerald-200"
              >
                {letter}
              </div>
            ))}
          </div>
        </div>

        {/* Preview Words */}
        <div className="flex justify-center gap-4 mt-4">
          <div className="flex items-center gap-2 bg-green-100 px-3 py-1 rounded">
            <span>🌳</span>
            <span className="font-bold">TREE</span>
          </div>
          <div className="flex items-center gap-2 bg-emerald-100 px-3 py-1 rounded">
            <span>🐦</span>
            <span className="font-bold">BIRD</span>
          </div>
          <div className="flex items-center gap-2 bg-teal-100 px-3 py-1 rounded">
            <span>🍃</span>
            <span className="font-bold">LEAF</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NatureWordsThumbnail; 
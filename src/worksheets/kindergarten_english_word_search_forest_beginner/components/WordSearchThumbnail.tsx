import React from 'react';

const WordSearchThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-emerald-700 to-lime-500 flex items-center justify-center p-10">
      <div className="w-[420px] h-[240px] bg-white rounded-xl shadow-lg p-6">
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold text-emerald-800 mb-2">Forest Word Search</h1>
          <p className="text-emerald-600">TREE → OWL</p>
        </div>
        
        {/* Preview Grid */}
        <div className="grid grid-cols-4 gap-1 max-w-[200px] mx-auto">
          {Array(16).fill(null).map((_, i) => (
            <div
              key={i}
              className="w-full aspect-square bg-emerald-50 rounded flex items-center justify-center text-emerald-800 font-bold"
            >
              {String.fromCharCode(65 + Math.floor(Math.random() * 26))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WordSearchThumbnail; 
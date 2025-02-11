import React from 'react';

const WordSearchThumbnail: React.FC = () => {
  // Sample 4x4 grid for thumbnail preview
  const previewGrid = [
    ['C', 'A', 'R', 'R'],
    ['O', 'N', 'I', 'O'],
    ['R', 'T', 'O', 'N'],
    ['N', 'O', 'M', 'A'],
  ];

  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-green-600 to-lime-400 flex items-center justify-center">
      <div className="w-[420px] h-[240px] bg-white rounded-xl shadow-lg p-4">
        <h1 className="text-xl font-bold text-gray-800 text-center mb-2">
          Vegetable Word Search
        </h1>
        <p className="text-sm text-gray-600 text-center mb-4">
          CARROT → TOMATO
        </p>
        
        {/* Preview Grid */}
        <div className="grid grid-cols-4 gap-1 max-w-[160px] mx-auto mb-4">
          {previewGrid.map((row, rowIndex) =>
            row.map((letter, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                className="w-8 h-8 bg-green-100 rounded flex items-center justify-center font-bold text-green-800"
              >
                {letter}
              </div>
            ))
          )}
        </div>

        {/* Vegetable Emojis */}
        <div className="flex justify-center space-x-2">
          <span className="text-2xl">🥕</span>
          <span className="text-2xl">🥔</span>
          <span className="text-2xl">🍅</span>
          <span className="text-2xl">🥦</span>
        </div>
      </div>
    </div>
  );
};

export default WordSearchThumbnail; 
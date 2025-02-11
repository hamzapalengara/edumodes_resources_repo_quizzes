import React from 'react';

const WordSearchThumbnail: React.FC = () => {
  // Sample 4x4 grid for thumbnail preview
  const previewGrid = [
    ['H', 'E', 'A', 'D'],
    ['A', 'R', 'M', 'E'],
    ['N', 'O', 'S', 'E'],
    ['D', 'E', 'Y', 'E'],
  ];

  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
      <div className="w-[420px] h-[240px] bg-white rounded-xl shadow-lg p-4">
        <h1 className="text-xl font-bold text-gray-800 text-center mb-2">
          Body Parts Word Search
        </h1>
        <p className="text-sm text-gray-600 text-center mb-4">
          HEAD → HAND
        </p>
        
        {/* Preview Grid */}
        <div className="grid grid-cols-4 gap-1 max-w-[160px] mx-auto mb-4">
          {previewGrid.map((row, rowIndex) =>
            row.map((letter, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={`
                  w-8 h-8 rounded flex items-center justify-center font-bold
                  ${rowIndex === 0 ? 'bg-pink-200 text-pink-800' :
                    rowIndex === 1 ? 'bg-blue-200 text-blue-800' :
                    rowIndex === 2 ? 'bg-purple-200 text-purple-800' :
                    'bg-indigo-200 text-indigo-800'}
                `}
              >
                {letter}
              </div>
            ))
          )}
        </div>

        {/* Body Part Emojis */}
        <div className="flex justify-center space-x-2">
          <span className="text-2xl">👤</span>
          <span className="text-2xl">🤚</span>
          <span className="text-2xl">👁️</span>
          <span className="text-2xl">👂</span>
        </div>
      </div>
    </div>
  );
};

export default WordSearchThumbnail; 
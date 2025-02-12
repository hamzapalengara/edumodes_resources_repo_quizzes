import React from 'react';

const WordSearchThumbnail: React.FC = () => {
  // Sample 4x4 grid for thumbnail preview
  const previewGrid = [
    ['M', 'O', 'T', 'H'],
    ['F', 'A', 'U', 'E'],
    ['B', 'A', 'B', 'Y'],
    ['R', 'S', 'I', 'S'],
  ];

  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-rose-500 to-amber-600 flex items-center justify-center">
      <div className="w-[420px] h-[240px] bg-white rounded-xl shadow-lg p-4">
        <h1 className="text-xl font-bold text-gray-800 text-center mb-2">
          Family Word Search
        </h1>
        <p className="text-sm text-gray-600 text-center mb-4">
          MOTHER → FATHER
        </p>
        
        {/* Preview Grid */}
        <div className="grid grid-cols-4 gap-1 max-w-[160px] mx-auto mb-4">
          {previewGrid.map((row, rowIndex) =>
            row.map((letter, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={`
                  w-8 h-8 rounded flex items-center justify-center font-bold
                  ${rowIndex === 0 ? 'bg-rose-200 text-rose-800' :
                    rowIndex === 1 ? 'bg-sky-200 text-sky-800' :
                    rowIndex === 2 ? 'bg-amber-200 text-amber-800' :
                    'bg-emerald-200 text-emerald-800'}
                `}
              >
                {letter}
              </div>
            ))
          )}
        </div>

        {/* Family Emojis */}
        <div className="flex justify-center space-x-2">
          <span className="text-2xl">👨‍👩‍👧‍👦</span>
          <span className="text-2xl">👶</span>
          <span className="text-2xl">👵</span>
          <span className="text-2xl">👴</span>
        </div>
      </div>
    </div>
  );
};

export default WordSearchThumbnail; 
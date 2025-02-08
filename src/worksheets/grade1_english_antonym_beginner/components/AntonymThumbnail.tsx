import React from 'react';

const AntonymThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-purple-400 to-indigo-500 p-8 flex items-center justify-center">
      <div className="w-[420px] h-[240px] bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center">
        {/* Title */}
        <h1 className="text-2xl font-bold text-purple-600 mb-4 text-center">
          Find Opposite Words!
        </h1>

        {/* Preview Grid */}
        <div className="grid grid-cols-8 gap-0.5 bg-purple-50 p-2 rounded-lg">
          {Array.from({ length: 4 }, (_, rowIndex) => (
            <React.Fragment key={rowIndex}>
              {Array.from({ length: 8 }, (_, colIndex) => (
                <div
                  key={`${rowIndex}-${colIndex}`}
                  className="w-6 h-6 flex items-center justify-center text-sm font-bold bg-white border border-purple-200 rounded"
                >
                  {rowIndex === 0 && colIndex < 3 ? 'BIG'[colIndex] : 
                   rowIndex === 1 && colIndex < 5 ? 'SMALL'[colIndex] : ''}
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>

        {/* Subtitle */}
        <p className="text-sm text-purple-500 mt-4">
          Grade 1 • English • Antonyms
        </p>
      </div>
    </div>
  );
};

export default AntonymThumbnail; 
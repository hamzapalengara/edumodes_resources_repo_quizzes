import React from 'react';

const MultiplicationChoiceThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-rose-100 via-purple-50 to-amber-100 flex items-center justify-center p-10">
      <div className="w-[420px] h-[240px] bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-between relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-6 gap-4">
            {Array.from({ length: 24 }).map((_, i) => (
              <div key={i} className="text-3xl">
                {i % 2 === 0 ? '×' : '='}
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 text-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-rose-600 via-purple-600 to-amber-600 bg-clip-text text-transparent">
            Match Groups to Facts
          </h1>
          <div className="text-purple-600 text-lg font-semibold mt-1">
            Multiplication 1-5
          </div>
        </div>

        {/* Visual Example */}
        <div className="relative z-10 flex items-center gap-6">
          {/* Groups */}
          <div className="flex gap-2">
            <div className="bg-rose-50 rounded-lg p-2 flex flex-col items-center">
              <div className="text-sm text-rose-600 mb-1">Group 1</div>
              <div className="grid grid-cols-2 gap-1">
                <span className="text-xl">⭐</span>
                <span className="text-xl">⭐</span>
              </div>
            </div>
            <div className="bg-rose-50 rounded-lg p-2 flex flex-col items-center">
              <div className="text-sm text-rose-600 mb-1">Group 2</div>
              <div className="grid grid-cols-2 gap-1">
                <span className="text-xl">⭐</span>
                <span className="text-xl">⭐</span>
              </div>
            </div>
          </div>

          {/* Multiple Choice */}
          <div className="flex flex-col gap-2">
            <div className="bg-purple-50 rounded-lg px-3 py-1 text-purple-600 text-sm font-medium">
              2 × 2 = 4
            </div>
            <div className="bg-amber-50 rounded-lg px-3 py-1 text-amber-600 text-sm font-medium">
              2 × 3 = 6
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiplicationChoiceThumbnail; 
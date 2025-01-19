import React from 'react';

const AdditionThumbnail: React.FC = () => {
  // Sample problems for thumbnail
  const problems = [
    { num1: 12, num2: 15 },
    { num1: 24, num2: 38 }
  ];

  return (
    <div className="w-[500px] h-[375px] overflow-hidden bg-gradient-to-r from-pink-500 to-yellow-500 font-sans relative">
      <div className="w-[420px] h-[240px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col">
        <div className="bg-pink-500 text-white py-3 px-5 text-lg font-bold text-center truncate">
          Grade 2 Addition Practice
        </div>
        <div className="flex-1 p-5 flex items-center justify-center">
          <div className="grid grid-cols-2 gap-4 w-full">
            {problems.map(({ num1, num2 }, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-3">
                <div className="text-right font-mono text-lg">
                  <div>{num1}</div>
                  <div className="border-b border-gray-400">+ {num2}</div>
                  <div className="mt-2">_____</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionThumbnail; 
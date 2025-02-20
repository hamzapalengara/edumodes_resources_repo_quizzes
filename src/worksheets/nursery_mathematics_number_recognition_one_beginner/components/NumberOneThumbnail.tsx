import React from 'react';

const NumberOneThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-pink-100 to-yellow-100 p-6 flex items-center justify-center">
      <div className="w-[420px] h-[240px] bg-white rounded-xl shadow-lg p-4 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-indigo-600 mb-4 text-center">
          Write & Find Number One
        </h1>
        
        <div className="flex items-center justify-center gap-6">
          {/* Tracing Preview */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-indigo-50 rounded-lg flex items-center justify-center border-2 border-dashed border-indigo-300">
              <div className="w-1 h-10 bg-indigo-300 rounded-full"></div>
            </div>
            <span className="text-sm text-indigo-600 mt-1">Trace</span>
          </div>
          
          {/* Arrow */}
          <div className="text-3xl text-indigo-400">
            +
          </div>
          
          {/* Identification Preview */}
          <div className="flex flex-col items-center">
            <div className="grid grid-cols-2 gap-1">
              <div className="w-7 h-7 bg-indigo-50 rounded flex items-center justify-center text-indigo-600 font-bold">1</div>
              <div className="w-7 h-7 bg-indigo-50 rounded flex items-center justify-center text-indigo-600 font-bold">2</div>
              <div className="w-7 h-7 bg-indigo-50 rounded flex items-center justify-center text-indigo-600 font-bold">1</div>
              <div className="w-7 h-7 bg-indigo-50 rounded flex items-center justify-center text-indigo-600 font-bold">3</div>
            </div>
            <span className="text-sm text-indigo-600 mt-1">Find</span>
          </div>
        </div>
        
        <p className="text-gray-500 mt-4 text-center text-sm">
          Interactive tracing & identification practice
        </p>
      </div>
    </div>
  );
};

export default NumberOneThumbnail; 
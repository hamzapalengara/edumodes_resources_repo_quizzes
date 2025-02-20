import React from 'react';

const NUMBER_THREE = {
  value: '3',
  viewBox: '0 0 200 200',
  paths: [
    { 
      id: 'top_half', 
      d: 'M60 40C90 40 140 40 140 70C140 100 90 100 60 100', 
      order: 1,
      startPoint: { x: 60, y: 40 }
    },
    { 
      id: 'bottom_half', 
      d: 'M60 100C90 100 140 100 140 130C140 160 90 160 60 160', 
      order: 2,
      startPoint: { x: 60, y: 100 }
    }
  ]
};

const NumberThreeThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-pink-100 via-purple-100 to-yellow-100 p-6 flex items-center justify-center">
      <div className="w-[420px] h-[240px] bg-white rounded-xl shadow-lg p-4 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-indigo-600 mb-4 text-center">
          Write & Find Number Three
        </h1>
        
        <div className="flex items-center justify-center gap-6">
          {/* Tracing Preview */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg flex items-center justify-center border-2 border-dashed border-indigo-200 shadow-inner">
              <svg viewBox={NUMBER_THREE.viewBox} className="w-16 h-16">
                <pattern id="demo-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e0e7ff" strokeWidth="1"/>
                </pattern>
                <rect width="200" height="200" fill="url(#demo-grid)" className="opacity-30"/>
                <circle cx="100" cy="100" r="90" fill="rgba(99, 102, 241, 0.1)"/>
                {NUMBER_THREE.paths.map((path) => (
                  <path
                    key={path.id}
                    d={path.d}
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="16"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="number-path-animation"
                  />
                ))}
              </svg>
            </div>
            <span className="text-sm font-medium text-indigo-600 mt-2">Trace</span>
          </div>
          
          {/* Arrow */}
          <div className="text-3xl text-indigo-400">→</div>
          
          {/* Identification Preview */}
          <div className="flex flex-col items-center">
            <div className="grid grid-cols-2 gap-1.5">
              <div className="w-9 h-9 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg flex items-center justify-center text-indigo-600 font-bold text-xl shadow-sm">3</div>
              <div className="w-9 h-9 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg flex items-center justify-center text-indigo-600 font-bold text-xl shadow-sm">2</div>
              <div className="w-9 h-9 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg flex items-center justify-center text-indigo-600 font-bold text-xl shadow-sm">3</div>
              <div className="w-9 h-9 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg flex items-center justify-center text-indigo-600 font-bold text-xl shadow-sm">5</div>
            </div>
            <span className="text-sm font-medium text-indigo-600 mt-2">Find</span>
          </div>
        </div>
        
        <p className="text-gray-600 mt-4 text-center text-sm">
          Learn to write and identify number three
        </p>
      </div>
    </div>
  );
};

export default NumberThreeThumbnail; 
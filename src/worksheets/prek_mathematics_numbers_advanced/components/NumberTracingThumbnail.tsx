import React from 'react';

const NumberTracingThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-sky-100 via-cyan-100 to-teal-100 flex items-center justify-center p-10">
      <div className="w-[420px] h-[240px] bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-6 flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold text-cyan-900 text-center">
          Number Tracing 11-20
        </h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-3xl font-bold text-cyan-900">11</span>
            <span className="text-3xl">🚗</span>
          </div>
          <span className="text-2xl">→</span>
          <div className="flex items-center gap-2">
            <span className="text-3xl font-bold text-cyan-900">20</span>
            <span className="text-3xl">🚀</span>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
          <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
          <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
          <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
          <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
        </div>
      </div>
    </div>
  );
};

export default NumberTracingThumbnail; 
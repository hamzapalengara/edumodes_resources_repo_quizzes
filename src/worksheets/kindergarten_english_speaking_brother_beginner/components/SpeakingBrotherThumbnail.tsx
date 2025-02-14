import React from 'react';

const SpeakingBrotherThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-r from-amber-100 to-orange-100 flex items-center justify-center p-4">
      <div className="w-[420px] h-[240px] bg-white rounded-xl shadow-lg p-6 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-6 gap-4">
            {Array.from({ length: 24 }).map((_, i) => (
              <div key={i} className="text-4xl text-center">👦</div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-between">
          <h1 className="text-2xl font-bold text-amber-600 text-center">
            Speaking with My Brother
          </h1>

          <div className="flex items-center gap-4">
            <div className="text-4xl">👦</div>
            <div className="bg-amber-50 rounded-lg p-3">
              <p className="text-amber-800 font-medium">
                "Want to build a fort?"
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-orange-50 rounded-lg p-3">
              <p className="text-orange-800 font-medium">
                "Yes, let's build together!"
              </p>
            </div>
            <div className="text-4xl">🧑</div>
          </div>

          <div className="flex gap-2">
            <span className="text-2xl">🎤</span>
            <span className="text-2xl">🗣️</span>
            <span className="text-2xl">❤️</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakingBrotherThumbnail; 
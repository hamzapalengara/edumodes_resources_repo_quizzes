import React from 'react';

const SpeakingThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-r from-pink-100 to-orange-100 flex items-center justify-center p-4">
      <div className="w-[420px] h-[240px] bg-white rounded-xl shadow-lg p-6 flex flex-col">
        <h1 className="text-xl font-bold text-center text-pink-600 mb-4">
          Speaking Practice with Mom
        </h1>

        {/* Dialogue Preview */}
        <div className="flex-1 flex flex-col justify-center space-y-4">
          {/* Mom's message */}
          <div className="flex items-start gap-2">
            <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center">
              👩
            </div>
            <div className="bg-pink-100 rounded-lg p-2">
              <p className="text-sm font-medium text-pink-800">
                Good morning sweetie! 🌅
              </p>
            </div>
          </div>

          {/* Kid's response area */}
          <div className="flex items-start justify-end gap-2">
            <div className="bg-orange-100 rounded-lg p-2 flex items-center gap-2">
              <span className="text-sm font-medium text-orange-800">
                🎤 Speak your response
              </span>
            </div>
            <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
              👧
            </div>
          </div>
        </div>

        {/* Feature Indicators */}
        <div className="flex justify-center gap-2 mt-4">
          <div className="px-3 py-1 bg-pink-100 rounded-full text-sm text-pink-600 flex items-center gap-1">
            🗣️ Voice Recognition
          </div>
          <div className="px-3 py-1 bg-orange-100 rounded-full text-sm text-orange-600 flex items-center gap-1">
            🔊 Speech Synthesis
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakingThumbnail; 
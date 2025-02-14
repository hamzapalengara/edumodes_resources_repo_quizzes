import React from 'react';

const SpeakingHomeworkThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-purple-400 via-purple-300 to-teal-300 flex items-center justify-center p-4">
      <div className="w-[420px] h-[240px] bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-6 flex flex-col relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-6 -right-6 w-24 h-24 bg-purple-200 rounded-full opacity-50" />
        <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-teal-200 rounded-full opacity-50" />
        
        <h1 className="text-xl font-bold text-center text-purple-600 mb-4 relative z-10">
          Speaking Practice with Teacher
        </h1>

        {/* Dialogue Preview */}
        <div className="flex-1 flex flex-col justify-center space-y-4 relative z-10">
          {/* Teacher's message */}
          <div className="flex items-start gap-2">
            <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
              👩‍🏫
            </div>
            <div className="bg-purple-100 rounded-lg p-2">
              <p className="text-sm font-medium text-purple-800">
                How was your homework? 📚
              </p>
            </div>
          </div>

          {/* Kid's response area */}
          <div className="flex items-start justify-end gap-2">
            <div className="bg-teal-100 rounded-lg p-2 flex items-center gap-2">
              <span className="text-sm font-medium text-teal-800">
                🎤 Practice speaking
              </span>
            </div>
            <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center">
              👧
            </div>
          </div>
        </div>

        {/* Feature Indicators */}
        <div className="flex justify-center gap-2 mt-4 relative z-10">
          <div className="px-3 py-1 bg-purple-100 rounded-full text-sm text-purple-600 flex items-center gap-1 shadow-sm">
            🗣️ Voice Recognition
          </div>
          <div className="px-3 py-1 bg-teal-100 rounded-full text-sm text-teal-600 flex items-center gap-1 shadow-sm">
            🔊 Speech Synthesis
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakingHomeworkThumbnail; 
import React from 'react';

const SpeakingShopThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-emerald-100 via-teal-50 to-emerald-100 flex items-center justify-center p-4">
      <div className="w-[420px] h-[240px] bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center relative overflow-hidden">
        {/* Shop Icon Background */}
        <div className="absolute top-0 right-0 opacity-5 text-9xl text-emerald-500">
          🏪
        </div>
        
        {/* Title */}
        <h1 className="text-2xl font-bold text-emerald-700 text-center mb-4 relative z-10">
          Speaking with Shopkeeper
        </h1>

        {/* Preview Content */}
        <div className="flex items-center space-x-4 mb-6">
          <div className="text-4xl">👨‍💼</div>
          <div className="text-lg text-emerald-600 font-medium">
            "How may I help you?"
          </div>
        </div>

        {/* Interactive Elements Preview */}
        <div className="flex items-center space-x-3">
          <div className="bg-emerald-100 px-3 py-1 rounded-full text-emerald-600 text-sm">
            🎤 Voice Input
          </div>
          <div className="bg-emerald-100 px-3 py-1 rounded-full text-emerald-600 text-sm">
            🔊 Text to Speech
          </div>
        </div>

        {/* Shop Icons */}
        <div className="absolute bottom-4 left-4 text-2xl opacity-30">
          🛍️
        </div>
        <div className="absolute top-4 right-4 text-2xl opacity-30">
          💳
        </div>
      </div>
    </div>
  );
};

export default SpeakingShopThumbnail; 
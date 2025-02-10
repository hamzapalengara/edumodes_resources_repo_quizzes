import React from 'react';

const DialogueThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-r from-pink-100 to-orange-100 flex items-center justify-center p-4">
      <div className="w-[420px] h-[240px] bg-white rounded-xl shadow-lg p-6 flex flex-col">
        <h1 className="text-xl font-bold text-center text-pink-600 mb-4">
          Talking with Mom
        </h1>

        {/* Dialogue Preview */}
        <div className="flex-1 flex flex-col justify-center space-y-4">
          {/* Kid's message */}
          <div className="flex items-start justify-end gap-2">
            <div className="bg-orange-100 rounded-lg p-2">
              <p className="text-sm font-medium text-orange-800">Mom I'm hungry 🍽️</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
              👧
            </div>
          </div>

          {/* Mom's message */}
          <div className="flex items-start gap-2">
            <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center">
              👩
            </div>
            <div className="bg-pink-100 rounded-lg p-2">
              <p className="text-sm font-medium text-pink-800">What would you like? 🤔</p>
            </div>
          </div>
        </div>

        {/* Word Bank Preview */}
        <div className="flex justify-center gap-2 mt-4">
          <div className="px-3 py-1 bg-white rounded-full text-sm text-pink-600 border border-pink-200">
            Mom
          </div>
          <div className="px-3 py-1 bg-white rounded-full text-sm text-orange-600 border border-orange-200">
            I'm
          </div>
          <div className="px-3 py-1 bg-white rounded-full text-sm text-pink-600 border border-pink-200">
            hungry
          </div>
        </div>
      </div>
    </div>
  );
};

export default DialogueThumbnail; 
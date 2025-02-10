import React from 'react';

const DialogueThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-from-blue-100 to-purple-100 flex items-center justify-center p-4">
      <div className="w-[420px] h-[240px] bg-white rounded-lg shadow-lg p-6 flex flex-col">
        <h1 className="text-xl font-bold text-center text-blue-600 mb-4">
          Friends Talking
        </h1>

        {/* Dialogue Preview */}
        <div className="flex-1 flex flex-col justify-center space-y-4">
          {/* Friend 1 */}
          <div className="flex items-start justify-end gap-2">
            <div className="bg-blue-100 rounded-lg p-2 text-blue-800">
              <p className="text-sm font-medium">Hi want to play? 👋</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
              👦
            </div>
          </div>

          {/* Friend 2 */}
          <div className="flex items-start gap-2">
            <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
              👧
            </div>
            <div className="bg-purple-100 rounded-lg p-2 text-purple-800">
              <p className="text-sm font-medium">Sure sounds fun! 😊</p>
            </div>
          </div>
        </div>

        {/* Word Bank Preview */}
        <div className="flex justify-center gap-2 mt-4">
          <div className="px-3 py-1 bg-gray-50 rounded-full text-sm text-blue-600 border border-blue-200">
            Hi
          </div>
          <div className="px-3 py-1 bg-gray-50 rounded-full text-sm text-blue-600 border border-blue-200">
            want
          </div>
          <div className="px-3 py-1 bg-gray-50 rounded-full text-sm text-blue-600 border border-blue-200">
            to
          </div>
        </div>
      </div>
    </div>
  );
};

export default DialogueThumbnail; 
import React from 'react';

const DialogueThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-red-100 to-blue-100 flex items-center justify-center p-4">
      <div className="w-[420px] h-[240px] bg-white rounded-xl shadow-lg p-4 flex flex-col">
        <h1 className="text-xl font-bold text-center text-blue-600 mb-4">
          Talk with Spider-Man
        </h1>

        {/* Dialogue Preview */}
        <div className="flex-1 flex flex-col justify-center space-y-4">
          {/* Kid's message */}
          <div className="flex items-start justify-end gap-2">
            <div className="bg-blue-50 rounded-lg p-2">
              <p className="text-sm font-medium text-blue-800">Wow it's Spider-Man! 🕷️</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
              👦
            </div>
          </div>

          {/* Spider-Man's message */}
          <div className="flex items-start gap-2">
            <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
              🕷️
            </div>
            <div className="bg-red-50 rounded-lg p-2">
              <p className="text-sm font-medium text-red-800">Hey there buddy! 👋</p>
            </div>
          </div>
        </div>

        {/* Word Bank Preview */}
        <div className="flex justify-center gap-2 mt-4">
          <div className="px-3 py-1 bg-white rounded-full text-sm text-blue-600 border border-blue-200">
            Spider-Man
          </div>
          <div className="px-3 py-1 bg-white rounded-full text-sm text-red-600 border border-red-200">
            Wow
          </div>
          <div className="px-3 py-1 bg-white rounded-full text-sm text-blue-600 border border-blue-200">
            it's
          </div>
        </div>
      </div>
    </div>
  );
};

export default DialogueThumbnail; 
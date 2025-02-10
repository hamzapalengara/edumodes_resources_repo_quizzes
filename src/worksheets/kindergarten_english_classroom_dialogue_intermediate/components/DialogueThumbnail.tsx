import React from 'react';

const DialogueThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center p-4">
      <div className="w-[420px] h-[240px] bg-white rounded-xl shadow-lg p-4 flex flex-col">
        <h1 className="text-xl font-bold text-center text-blue-600 mb-4">
          Classroom Dialogue Practice
        </h1>

        {/* Preview of dialogue bubbles */}
        <div className="flex-1 flex flex-col gap-2">
          {/* Teacher bubble */}
          <div className="flex items-start gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-lg">
              👩‍🏫
            </div>
            <div className="bg-blue-50 rounded-lg p-2 text-sm">
              Good morning everyone 🌞
            </div>
          </div>

          {/* Student bubble */}
          <div className="flex items-start gap-2 justify-end">
            <div className="bg-green-50 rounded-lg p-2 text-sm">
              May I ask a question? 🤔
            </div>
            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-lg">
              👨‍🎓
            </div>
          </div>

          {/* Word bank preview */}
          <div className="mt-auto flex flex-wrap gap-1 justify-center">
            <div className="bg-white border-2 border-blue-400 text-blue-600 rounded-lg px-2 py-1 text-sm">
              May
            </div>
            <div className="bg-white border-2 border-blue-400 text-blue-600 rounded-lg px-2 py-1 text-sm">
              I
            </div>
            <div className="bg-white border-2 border-blue-400 text-blue-600 rounded-lg px-2 py-1 text-sm">
              ask
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DialogueThumbnail; 
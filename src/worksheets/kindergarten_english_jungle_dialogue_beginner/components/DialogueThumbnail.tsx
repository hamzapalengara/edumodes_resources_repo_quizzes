import React from 'react';

const DialogueThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-lime-100 to-emerald-100 flex items-center justify-center p-4">
      <div className="w-[420px] h-[240px] bg-white rounded-xl shadow-lg p-4">
        <div className="h-full flex flex-col">
          {/* Title */}
          <h1 className="text-xl font-bold text-emerald-600 text-center mb-3">
            The Rabbit and The Tortoise
          </h1>

          {/* Dialogue Preview */}
          <div className="flex-1 flex flex-col gap-2">
            {/* Rabbit's Message */}
            <div className="flex items-start gap-2 justify-end">
              <div className="bg-lime-50 rounded-lg p-2 max-w-[200px]">
                <p className="text-sm">Let's have a race 🏃</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-lime-100 flex items-center justify-center">
                🐰
              </div>
            </div>

            {/* Tortoise's Message */}
            <div className="flex items-start gap-2">
              <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                🐢
              </div>
              <div className="bg-emerald-50 rounded-lg p-2 max-w-[200px]">
                <p className="text-sm">Slow and steady 🐌</p>
              </div>
            </div>
          </div>

          {/* Word Bank Preview */}
          <div className="mt-2">
            <div className="bg-emerald-50 rounded-lg p-2">
              <div className="flex flex-wrap gap-1 justify-center">
                <div className="bg-white px-2 py-1 rounded text-xs border border-emerald-200 text-emerald-600">
                  slow
                </div>
                <div className="bg-white px-2 py-1 rounded text-xs border border-emerald-200 text-emerald-600">
                  and
                </div>
                <div className="bg-white px-2 py-1 rounded text-xs border border-emerald-200 text-emerald-600">
                  steady
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DialogueThumbnail; 
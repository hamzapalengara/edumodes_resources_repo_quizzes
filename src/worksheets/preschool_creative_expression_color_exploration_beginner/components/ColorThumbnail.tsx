import React from 'react';

const ColorThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] overflow-hidden bg-gradient-to-r from-pink-500 to-yellow-500 font-sans relative">
      <div className="w-[420px] h-[240px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white py-3 px-5">
          <h1 className="text-lg font-bold text-center">Fun with Colors: Explore and Play!</h1>
        </div>

        {/* Preview Content */}
        <div className="flex-1 p-5">
          <div className="grid grid-cols-2 gap-4">
            <div className="h-16 bg-red-500 rounded-lg shadow-md transform hover:scale-105 transition-transform" />
            <div className="h-16 bg-blue-500 rounded-lg shadow-md transform hover:scale-105 transition-transform" />
            <div className="h-16 bg-yellow-500 rounded-lg shadow-md transform hover:scale-105 transition-transform" />
            <div className="h-16 bg-green-500 rounded-lg shadow-md transform hover:scale-105 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorThumbnail; 
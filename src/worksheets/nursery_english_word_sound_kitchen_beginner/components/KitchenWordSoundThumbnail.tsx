import React from 'react';

const KitchenWordSoundThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-[#FB923C] to-[#F59E0B] flex items-center justify-center p-4">
      <div className="w-[420px] h-[240px] bg-white rounded-xl shadow-lg relative overflow-hidden">
        {/* Kitchen Frame */}
        <div className="absolute inset-0 border-8 border-[#C2410C] rounded-lg opacity-20" />
        
        {/* Sound Wave Animation */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FB923C] to-transparent animate-pulse" />
          <div className="absolute top-[45%] left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FB923C] to-transparent animate-pulse delay-75" />
          <div className="absolute top-[55%] left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FB923C] to-transparent animate-pulse delay-150" />
        </div>

        {/* Main Content */}
        <div className="relative h-full flex flex-col items-center justify-center px-6 text-center">
          <h1 className="text-2xl font-bold text-[#C2410C] mb-2">
            Match Kitchen Words with Sounds
          </h1>
          
          {/* Interactive Preview */}
          <div className="flex items-center gap-4 mt-4">
            <div className="bg-[#FB923C] text-white px-4 py-2 rounded-lg shadow-md">
              Plate
            </div>
            <div className="text-2xl">↔️</div>
            <div className="bg-[#22C55E] text-white px-4 py-2 rounded-lg shadow-md">
              🔊
            </div>
          </div>

          {/* Kitchen Items */}
          <div className="absolute top-2 right-2 text-2xl">
            🍽️
          </div>
          <div className="absolute bottom-2 left-2 text-2xl">
            🥄
          </div>
          <div className="absolute top-2 left-2 text-2xl">
            🔪
          </div>
          <div className="absolute bottom-2 right-2 text-2xl">
            🥘
          </div>
        </div>
      </div>
    </div>
  );
};

export default KitchenWordSoundThumbnail; 
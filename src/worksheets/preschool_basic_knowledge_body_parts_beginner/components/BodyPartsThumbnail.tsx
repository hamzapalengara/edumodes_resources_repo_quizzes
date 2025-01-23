import React from 'react';
import bodyOutlineSvg from '../assets/body_outline.svg';

const BodyPartsThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden flex items-center justify-center">
      <div className="w-[420px] h-[240px] bg-white rounded-xl shadow-lg p-4 flex flex-col">
        <h2 className="text-xl font-bold text-purple-800 mb-2 text-center">
          Learn Body Parts
        </h2>
        
        <div className="flex-1 flex items-center justify-center">
          <img 
            src={bodyOutlineSvg}
            alt="Body parts learning preview"
            className="h-[140px] w-auto object-contain"
          />
        </div>

        <div className="flex flex-wrap gap-2 justify-center mt-2">
          <span className="px-2 py-1 bg-purple-100 text-purple-600 rounded-full text-xs font-medium">
            Interactive
          </span>
          <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium">
            Audio
          </span>
          <span className="px-2 py-1 bg-green-100 text-green-600 rounded-full text-xs font-medium">
            Preschool
          </span>
        </div>
      </div>
    </div>
  );
};

export default BodyPartsThumbnail; 
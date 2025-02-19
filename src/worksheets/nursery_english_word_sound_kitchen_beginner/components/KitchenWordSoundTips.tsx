import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';

const KitchenWordSoundTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FFF7ED]">
      <WorksheetHeader />
      
      <TouchContainer>
        <div className="px-0 md:px-4">
          <div className="bg-white rounded-lg p-2 md:p-4 mb-4 shadow-md">
            <h1 className="text-xl md:text-2xl font-bold text-center mb-3 text-[#C2410C]">
              Tips for Kitchen Word-Sound Matching
            </h1>
          </div>

          {/* Listening Tips Section */}
          <div className="bg-white rounded-lg p-4 mb-4 shadow-md">
            <h2 className="text-lg font-bold mb-3 text-[#C2410C] flex items-center gap-2">
              <span>🎧</span> Listening Tips
            </h2>
            <ul className="space-y-2 text-[#C2410C]">
              <li className="flex items-start gap-2">
                <span className="text-[#FB923C]">•</span>
                <span>Listen carefully to each sound before making a match</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FB923C]">•</span>
                <span>Click the sound tile multiple times if needed</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FB923C]">•</span>
                <span>Pay attention to the beginning and ending sounds</span>
              </li>
            </ul>
          </div>

          {/* Word Recognition Section */}
          <div className="bg-white rounded-lg p-4 mb-4 shadow-md">
            <h2 className="text-lg font-bold mb-3 text-[#C2410C] flex items-center gap-2">
              <span>📝</span> Word Recognition
            </h2>
            <ul className="space-y-2 text-[#C2410C]">
              <li className="flex items-start gap-2">
                <span className="text-[#FB923C]">•</span>
                <span>Look for familiar letter patterns in kitchen words</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FB923C]">•</span>
                <span>Break longer words into smaller parts (e.g., "kit-chen")</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FB923C]">•</span>
                <span>Notice similar endings in words like "spoon" and "pan"</span>
              </li>
            </ul>
          </div>

          {/* Game Strategies Section */}
          <div className="bg-white rounded-lg p-4 mb-4 shadow-md">
            <h2 className="text-lg font-bold mb-3 text-[#C2410C] flex items-center gap-2">
              <span>🎯</span> Game Strategies
            </h2>
            <ul className="space-y-2 text-[#C2410C]">
              <li className="flex items-start gap-2">
                <span className="text-[#FB923C]">•</span>
                <span>Start with shorter, familiar words like "cup" and "pan"</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FB923C]">•</span>
                <span>Group similar items (e.g., utensils: spoon, fork, knife)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FB923C]">•</span>
                <span>Use the revealed kitchen scene as hints for remaining words</span>
              </li>
            </ul>
          </div>

          {/* Fun Learning Activities Section */}
          <div className="bg-white rounded-lg p-4 mb-4 shadow-md">
            <h2 className="text-lg font-bold mb-3 text-[#C2410C] flex items-center gap-2">
              <span>🎨</span> Fun Learning Activities
            </h2>
            <ul className="space-y-2 text-[#C2410C]">
              <li className="flex items-start gap-2">
                <span className="text-[#FB923C]">•</span>
                <span>Practice saying kitchen words while helping in the kitchen</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FB923C]">•</span>
                <span>Play "I Spy" with kitchen items to reinforce vocabulary</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FB923C]">•</span>
                <span>Draw and label your favorite kitchen items</span>
              </li>
            </ul>
          </div>

          {/* Tips for Parents and Teachers Section */}
          <div className="bg-white rounded-lg p-4 mb-4 shadow-md">
            <h2 className="text-lg font-bold mb-3 text-[#C2410C] flex items-center gap-2">
              <span>👥</span> Tips for Parents and Teachers
            </h2>
            <ul className="space-y-2 text-[#C2410C]">
              <li className="flex items-start gap-2">
                <span className="text-[#FB923C]">•</span>
                <span>Encourage regular practice with kitchen vocabulary during meal preparation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FB923C]">•</span>
                <span>Create a safe environment for hands-on learning with kitchen items</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FB923C]">•</span>
                <span>Celebrate progress and maintain a positive learning atmosphere</span>
              </li>
            </ul>
          </div>
        </div>
      </TouchContainer>
    </div>
  );
};

export default KitchenWordSoundTips; 
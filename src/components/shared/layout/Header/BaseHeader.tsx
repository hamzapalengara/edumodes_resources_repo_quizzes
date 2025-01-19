import React from 'react';

interface BaseHeaderProps {
  gradient?: string;  // Tailwind gradient classes
  children?: React.ReactNode;
}

const BaseHeader: React.FC<BaseHeaderProps> = ({ gradient = '', children }) => {
  return (
    <nav className="border-b print:border-0 bg-white">
      <div className="container mx-auto">
        <div className="px-0 sm:px-4 pt-0 pb-1">
          <div className="flex items-center justify-between">
            {/* Logo Section - Always visible */}
            <div className="flex flex-col min-w-0">
              <div className="flex items-baseline leading-none">
                <span className="text-lg sm:text-xl font-black text-[#EC4899]">E</span>
                <span className="text-base sm:text-lg font-black text-sky-500 -ml-0.5">d</span>
                <span className="text-base sm:text-lg font-black text-indigo-500">u</span>
                <span className="text-lg sm:text-xl font-black text-[#EAB308] ml-0.5">M</span>
                <span className="text-base sm:text-lg font-black text-emerald-500 -ml-0.5">o</span>
                <span className="text-base sm:text-lg font-black text-teal-500">d</span>
                <span className="text-base sm:text-lg font-black text-green-500">e</span>
                <span className="text-base sm:text-lg font-black text-teal-500">s</span>
              </div>
              <a 
                href="https://www.edumodes.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[9px] sm:text-[10px] text-gray-500 hover:text-gray-800 leading-tight truncate"
              >
                www.edumodes.com
              </a>
            </div>

            {/* Additional header content */}
            {children}
          </div>
        </div>
      </div>

      {/* Gradient Bar */}
      {gradient && (
        <div className={`h-1 ${gradient}`} />
      )}
    </nav>
  );
};

export default BaseHeader; 
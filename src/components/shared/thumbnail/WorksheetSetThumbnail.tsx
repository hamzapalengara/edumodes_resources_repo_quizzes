import React from 'react';

interface WorksheetSetThumbnailProps {
  title: string;
  previewContent?: React.ReactNode;
}

const WorksheetSetThumbnail: React.FC<WorksheetSetThumbnailProps> = ({ 
  title,
  previewContent 
}) => {
  return (
    <div 
      className={`
        w-[500px]                /* Fixed outer width */
        h-[375px]                /* Fixed outer height */
        overflow-hidden          /* Prevent content overflow */
        bg-gradient-to-r from-pink-500 to-yellow-500  /* Worksheet theme gradient */
        font-sans               /* System font stack */
        relative                /* For inner positioning */
      `}
    >
      <div 
        className={`
          w-[420px]              /* Fixed inner width */
          h-[240px]              /* Fixed inner height */
          absolute              /* Absolute positioning */
          top-1/2               /* Center vertically */
          left-1/2             /* Center horizontally */
          -translate-x-1/2     /* Offset for centering */
          -translate-y-1/2     /* Offset for centering */
          bg-white             /* White background */
          rounded-2xl          /* 16px border radius */
          shadow-xl            /* Drop shadow */
          overflow-hidden      /* Contain content */
          flex                /* Flexbox layout */
          flex-col            /* Stack children vertically */
        `}
      >
        {/* Header */}
        <div 
          className="
            bg-pink-500
            text-white
            py-3
            px-5
            text-lg
            font-bold
            text-center
            truncate
          "
        >
          {title}
        </div>

        {/* Preview Content */}
        <div className="flex-1 p-5 flex items-center justify-center">
          {previewContent || (
            <div className="text-gray-400 text-center">
              Interactive Worksheet Preview
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorksheetSetThumbnail; 
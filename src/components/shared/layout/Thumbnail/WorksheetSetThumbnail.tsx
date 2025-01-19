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
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-white p-4 border-b">
        <h1 className="text-xl font-bold text-gray-800 text-center">{title}</h1>
      </div>

      {/* Preview Content */}
      <div className="p-6">
        {previewContent}
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white/90 to-transparent p-4">
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-500">EduModes Worksheet</div>
          <div className="text-sm text-gray-500">Preview</div>
        </div>
      </div>
    </div>
  );
};

export default WorksheetSetThumbnail; 
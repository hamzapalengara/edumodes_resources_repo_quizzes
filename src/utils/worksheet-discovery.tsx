import React from 'react';
import { lazy } from 'react';

// Import types
interface WorksheetSet {
  id: string;
  title: string;
  description: string;
  components: {
    Worksheet: React.LazyExoticComponent<React.ComponentType>;
    AnswerKey: React.LazyExoticComponent<React.ComponentType>;
    Tips: React.LazyExoticComponent<React.ComponentType>;
    Thumbnail: React.LazyExoticComponent<React.ComponentType>;
  };
  metadata: {
    grade: string;
    subject: string;
    topic: string;
    difficulty: string;
  };
}

// Import all worksheet files
const worksheetFiles = import.meta.glob('../worksheets/*/components/*Worksheet.tsx', { eager: true });
const answerKeyFiles = import.meta.glob('../worksheets/*/components/*AnswerKey.tsx', { eager: true });
const tipsFiles = import.meta.glob('../worksheets/*/components/*Tips.tsx', { eager: true });
const thumbnailFiles = import.meta.glob('../worksheets/*/components/*Thumbnail.tsx', { eager: true });
const titleFiles = import.meta.glob('../worksheets/*/title.txt', { eager: true, as: 'raw' });
const descriptionFiles = import.meta.glob('../worksheets/*/description.txt', { eager: true, as: 'raw' });

// Default components for missing views
const DefaultAnswerKey: React.FC = () => <div>Answer key not available</div>;
const DefaultTips: React.FC = () => <div>Tips not available</div>;
const DefaultThumbnail: React.FC = () => <div>Thumbnail not available</div>;

export function discoverWorksheets(): WorksheetSet[] {
  const worksheets: WorksheetSet[] = [];
  
  // Get all worksheet files
  const worksheetPaths = Object.keys(worksheetFiles);
  
  // Process each worksheet
  worksheetPaths.forEach((worksheetPath) => {
    // Extract worksheet ID from path (folder name)
    const match = worksheetPath.match(/\.\.\/worksheets\/([^/]+)/);
    if (!match) return;
    
    const id = match[1];
    const [grade, subject, ...rest] = id.split('_');
    const difficulty = rest.pop() || '';
    const topic = rest.join('_');

    try {
      // Find corresponding component files
      const worksheetComponent = worksheetPath;
      const answerKeyComponent = Object.keys(answerKeyFiles).find(path => path.includes(id) && path.endsWith('AnswerKey.tsx'));
      const tipsComponent = Object.keys(tipsFiles).find(path => path.includes(id) && path.endsWith('Tips.tsx'));
      const thumbnailComponent = Object.keys(thumbnailFiles).find(path => path.includes(id) && path.endsWith('Thumbnail.tsx'));
      
      if (!worksheetComponent) {
        console.warn(`No worksheet component found for ${id}`);
        return;
      }

      // Get title and description
      const titlePath = `../worksheets/${id}/title.txt`;
      const descriptionPath = `../worksheets/${id}/description.txt`;
      
      const title = titleFiles[titlePath] || 'Untitled Worksheet';
      const description = descriptionFiles[descriptionPath] || 'No description available';

      // Create lazy components with defaults for missing ones
      const components = {
        Worksheet: lazy(() => import(worksheetComponent)),
        AnswerKey: answerKeyComponent 
          ? lazy(() => import(answerKeyComponent))
          : lazy(() => Promise.resolve({ default: DefaultAnswerKey })),
        Tips: tipsComponent 
          ? lazy(() => import(tipsComponent))
          : lazy(() => Promise.resolve({ default: DefaultTips })),
        Thumbnail: thumbnailComponent 
          ? lazy(() => import(thumbnailComponent))
          : lazy(() => Promise.resolve({ default: DefaultThumbnail }))
      };

      // Add worksheet to collection
      worksheets.push({
        id,
        title,
        description,
        components,
        metadata: {
          grade,
          subject,
          topic,
          difficulty
        }
      });
    } catch (error) {
      console.error(`Error processing worksheet ${id}:`, error);
    }
  });

  return worksheets;
} 
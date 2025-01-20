import { lazy } from 'react';

export interface WorksheetSet {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  grade: string;
  subject: string;
  topic: string;
  difficulty: string;
  components: {
    Worksheet: React.LazyExoticComponent<React.ComponentType>;
    AnswerKey: React.LazyExoticComponent<React.ComponentType>;
    Tips: React.LazyExoticComponent<React.ComponentType>;
    Thumbnail: React.LazyExoticComponent<React.ComponentType>;
  };
}

// This will be populated by Vite's import.meta.glob
const worksheetModules = import.meta.glob('../worksheets/*/entries/index.ts', { eager: true });
const titleFiles = import.meta.glob('../worksheets/*/title.txt', { eager: true, as: 'raw' });
const descriptionFiles = import.meta.glob('../worksheets/*/description.txt', { eager: true, as: 'raw' });
const thumbnailFiles = import.meta.glob('../worksheets/*/thumbnail.png', { eager: true });

// Component name prefixes for each worksheet type
const COMPONENT_PREFIXES: { [key: string]: string } = {
  'preschool_creative_expression_color_exploration_beginner': 'Color',
  'grade2_mathematics_addition_beginner': 'Addition'
};

export function discoverWorksheets(): WorksheetSet[] {
  const worksheets: WorksheetSet[] = [];

  console.log('Found worksheet modules:', Object.keys(worksheetModules));
  console.log('Found title files:', Object.keys(titleFiles));
  console.log('Found description files:', Object.keys(descriptionFiles));
  console.log('Found thumbnail files:', Object.keys(thumbnailFiles));

  Object.keys(worksheetModules).forEach((modulePath) => {
    // Extract worksheet ID from path
    const match = modulePath.match(/worksheets\/([^/]+)\/entries/);
    if (!match) {
      console.warn('No match found for path:', modulePath);
      return;
    }

    const id = match[1];
    console.log('Processing worksheet:', id);
    
    // Get title and description
    const titlePath = `../worksheets/${id}/title.txt`;
    const descriptionPath = `../worksheets/${id}/description.txt`;
    const thumbnailPath = `../worksheets/${id}/thumbnail.png`;
    
    const title = titleFiles[titlePath] || 'Untitled';
    const description = descriptionFiles[descriptionPath] || 'No description available';
    const thumbnailModule = thumbnailFiles[thumbnailPath] as any;
    const thumbnail = thumbnailModule?.default || '';

    // Parse metadata from ID
    const [grade, subject, topic, difficulty] = id.split('_');

    try {
      // Get the module exports
      const module = worksheetModules[modulePath] as any;
      console.log('Module exports:', Object.keys(module));

      const componentPrefix = COMPONENT_PREFIXES[id];
      if (!componentPrefix) {
        throw new Error(`No component prefix defined for worksheet: ${id}`);
      }

      // Create lazy-loaded components
      const components = {
        Worksheet: lazy(() => import(`../worksheets/${id}/components/${componentPrefix}Worksheet.tsx`)),
        AnswerKey: lazy(() => import(`../worksheets/${id}/components/${componentPrefix}AnswerKey.tsx`)),
        Tips: lazy(() => import(`../worksheets/${id}/components/${componentPrefix}Tips.tsx`)),
        Thumbnail: lazy(() => import(`../worksheets/${id}/components/${componentPrefix}Thumbnail.tsx`))
      };

      // Format metadata
      const formattedGrade = formatGrade(grade);
      const formattedSubject = formatMetadata(subject);
      const formattedTopic = formatMetadata(topic);
      const formattedDifficulty = formatMetadata(difficulty);

      worksheets.push({
        id,
        title: title.trim(),
        description: description.trim(),
        thumbnail,
        grade: formattedGrade,
        subject: formattedSubject,
        topic: formattedTopic,
        difficulty: formattedDifficulty,
        components
      });

      console.log('Successfully added worksheet:', id);
    } catch (error) {
      console.error('Error processing worksheet:', id, error);
    }
  });

  console.log('Total worksheets discovered:', worksheets.length);
  return worksheets;
}

function formatGrade(grade: string): string {
  if (grade === 'preschool') return 'Preschool';
  const match = grade.match(/grade(\d+)/i);
  return match ? `Grade ${match[1]}` : grade;
}

function formatMetadata(str: string): string {
  return str
    .split('_')
    .map(word => capitalize(word))
    .join(' ');
}

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
} 
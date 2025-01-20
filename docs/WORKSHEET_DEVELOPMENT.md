# Worksheet Development Guide

## Table of Contents
1. [Getting Started](#getting-started)
2. [Project Structure](#project-structure)
3. [Component Architecture](#component-architecture)
4. [File Specifications](#file-specifications)
5. [Development Process](#development-process)
6. [Dashboard Integration](#dashboard-integration)
7. [Build Configuration](#build-configuration)
8. [Testing & Validation](#testing--validation)
9. [Responsive Design Specifications](#responsive-design-specifications)
10. [Using the Template](#using-the-template)

## Getting Started

### Development Commands

To start development, use the following command in PowerShell:

```powershell
# Start development server with dashboard
npm run dev
```

This will:
- Start the development server at http://localhost:5173
- Load the worksheet development dashboard
- Enable hot module replacement
- Auto-reload on file changes

The development server uses `vite.config.dev.ts` which:
- Loads a dashboard interface for worksheet development
- Shows all available worksheets
- Provides quick access to each worksheet's views (worksheet, answer key, tips, thumbnail)
- Enables real-time preview of changes

### Build Commands

To build a specific worksheet for production:

```powershell
# Build for production
$env:WORKSHEET_ID="your_worksheet_id"; npm run build

# Example
$env:WORKSHEET_ID="grade2_mathematics_addition_beginner"; npm run build
```

The build process (using `vite.config.prod.ts`) will:
1. Compile TypeScript files
2. Bundle and transform modules
3. Generate HTML files:
   - `worksheet.html` - Main interactive worksheet
   - `answer_key.html` - Solutions and explanations
   - `tips.html` - Student guidance
   - `thumbnail.html` - Thumbnail template
4. Create `thumbnail.png`
5. Output all files to `dist/[worksheet_id]/`

### Important Notes
- Development mode uses `vite.config.dev.ts` and loads a dashboard interface
- Production build uses `vite.config.prod.ts` and requires `WORKSHEET_ID` environment variable
- All built files are self-contained
- Production builds are minified and optimized

### Development URLs
During development, access the dashboard at http://localhost:5173
The dashboard provides links to view each worksheet's:
- Main Worksheet
- Answer Key
- Tips
- Thumbnail

## Core Requirements

### 1. Mobile-First Development (REQUIRED)
- All components MUST be developed with mobile-first approach
- Start with smallest supported screen (280px - Galaxy Fold)
- Progressive enhancement for larger screens
- Touch-optimized interactions by default

### 2. Viewport Specifications
```typescript
// Required meta tag for ALL HTML files
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

// Core viewport requirements
const VIEWPORT_REQUIREMENTS = {
  minWidth: 280,  // Galaxy Fold support
  minHeight: 500, // Minimum height
  breakpoints: {
    sm: 320,      // Small mobile
    md: 480,      // Regular mobile
    lg: 768,      // Tablet
    xl: 1024      // Desktop
  }
};
```

### 3. Touch-First Interaction
```typescript
// Core touch specifications
const TOUCH_REQUIREMENTS = {
  minTargetSize: 44,    // Minimum touch target size (pixels)
  minSpacing: 8,        // Minimum space between touch targets
  tapHighlight: 'none', // Disable default tap highlight
  touchAction: 'manipulation' // Optimize touch behavior
};

// Example implementation
const TouchTarget = styled.button`
  min-width: ${TOUCH_REQUIREMENTS.minTargetSize}px;
  min-height: ${TOUCH_REQUIREMENTS.minTargetSize}px;
  margin: ${TOUCH_REQUIREMENTS.minSpacing}px;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
`;
```

### 4. Responsive Typography System
```typescript
// Required typography scale
const TYPOGRAPHY = {
  base: {
    small: 'clamp(14px, 3.5vw, 16px)',
    regular: 'clamp(16px, 4vw, 18px)',
    large: 'clamp(18px, 4.5vw, 20px)'
  },
  heading: {
    small: 'clamp(16px, 4vw, 20px)',
    regular: 'clamp(18px, 4.5vw, 24px)',
    large: 'clamp(20px, 5vw, 28px)'
  }
};
```

### 5. Mobile Layout Guidelines
```typescript
// Core spacing units
const SPACING = {
  xs: '0.5rem',    // 8px
  sm: '0.75rem',   // 12px
  md: '1rem',      // 16px
  lg: '1.5rem',    // 24px
  xl: '2rem'       // 32px
};

// Example responsive container
const ResponsiveContainer = styled.div`
  padding: ${SPACING.sm};
  margin: ${SPACING.xs};
  
  @media (min-width: ${VIEWPORT_REQUIREMENTS.breakpoints.md}px) {
    padding: ${SPACING.md};
    margin: ${SPACING.sm};
  }
`;
```

## Project Structure

### Directory Structure
```
src/
├── components/     # Reusable React components
├── hooks/         # Custom React hooks
├── utils/         # Utility functions
├── styles/        # CSS and styling files
├── assets/        # Static assets
└── worksheets/    # Worksheet components and logic
    ├── templates/ # Base worksheet templates
    └── [grade]_[subject]_[topic]_[difficulty]/  # Individual worksheet folders
        ├── components/
        │   ├── [Prefix]Worksheet.tsx
        │   ├── [Prefix]AnswerKey.tsx
        │   ├── [Prefix]Tips.tsx
        │   └── [Prefix]Thumbnail.tsx
        ├── entries/
        │   └── index.ts
        ├── title.txt
        └── description.txt
```

### Naming Convention
1. **Directory Naming**
   - Use underscores to separate category elements
   - Use lowercase letters and numbers
   - Format: `[grade]_[subject]_[topic]_[level]`
   - Example: `grade2_mathematics_addition_beginner`

2. **Component Naming**
   - Use PascalCase for component files
   - Use descriptive suffixes (View, Container, etc.)
   - Format: `[Purpose]View.tsx`
   - Examples:
     - `WorksheetView.tsx`
     - `AnswerKeyView.tsx`
     - `TipsView.tsx`
     - `ThumbnailView.tsx`

3. **Entry File**
   - Always use `index.ts` for the main entry point
   - Place in the `entries` directory

## Component Architecture

### 1. Main Worksheet Component
```typescript
// WorksheetView.tsx
const WorksheetView: React.FC = () => {
  // State management
  const [score, setScore] = useState(0);
  const [totalQuestions] = useState(10);

  return (
    <div className="min-h-screen bg-gray-50 w-full">
      <WorksheetHeader>
        <div className="text-sm text-gray-600 px-4">
          Score: {score}/{totalQuestions}
        </div>
      </WorksheetHeader>
      <TouchContainer>
        {/* Worksheet content */}
      </TouchContainer>
    </div>
  );
};
```

### 2. Answer Key Component
```typescript
// AnswerKeyView.tsx
const AnswerKeyView: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 w-full">
      <WorksheetHeader>
        <div className="text-sm text-gray-600 px-4">
          Answer Key
        </div>
      </WorksheetHeader>
      <TouchContainer>
        {/* Answer key content */}
      </TouchContainer>
    </div>
  );
};
```

### 3. Tips Component
```typescript
// TipsView.tsx
const TipsView: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 w-full">
      <WorksheetHeader>
        <div className="text-sm text-gray-600 px-4">
          Tips & Guidance
        </div>
      </WorksheetHeader>
      <TouchContainer>
        {/* Tips content */}
      </TouchContainer>
    </div>
  );
};
```

### 4. Thumbnail Component
```typescript
// ThumbnailView.tsx
const ThumbnailView: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] overflow-hidden bg-gradient-to-r from-pink-500 to-yellow-500 font-sans relative">
      <div className="w-[420px] h-[240px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col">
        {/* Thumbnail content */}
      </div>
    </div>
  );
};
```

## File Specifications

### 1. Entry Point (index.tsx)
```typescript
import WorksheetView from '../components/WorksheetView';
import AnswerKeyView from '../components/AnswerKeyView';
import TipsView from '../components/TipsView';
import ThumbnailView from '../components/ThumbnailView';

declare global {
  interface Window {
    WORKSHEET_VIEW: 'worksheet' | 'answer_key' | 'tips' | 'thumbnail';
  }
}

const view = window.WORKSHEET_VIEW || 'worksheet';

const renderView = () => {
  switch (view) {
    case 'answer_key':
      return <AnswerKeyView />;
    case 'tips':
      return <TipsView />;
    case 'thumbnail':
      return <ThumbnailView />;
    default:
      return <WorksheetView />;
  }
};
```

### 2. HTML Templates
Each view has its own HTML file with specific metadata:
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
    <link rel="stylesheet" href="styles.css">
    <script>
      window.WORKSHEET_VIEW = '${view}';
    </script>
  </head>
  <body>
    <div id="root"></div>
    <script src="script.js"></script>
  </body>
</html>
```

### 3. Thumbnail Specifications
- Outer container: 500x375px (4:3 ratio)
- Inner container: 420x240px (centered)
- Pink to yellow gradient background
- White inner container with shadow
- System font stack

## Development Process

### 1. Creating a New Worksheet
1. Create a new folder following the naming convention
2. Create the required component files with the correct prefix
3. Create `entries/index.ts` with the component exports
4. Add `title.txt` and `description.txt`

### 2. Component Development
1. Implement main worksheet functionality
2. Create answer key with solutions
3. Add tips and guidance content
4. Design thumbnail preview

### 3. Testing
1. Test each view independently
2. Verify responsive design
3. Check touch interactions
4. Validate accessibility

## Dashboard Integration

### Worksheet Discovery
The dashboard automatically discovers and displays worksheets based on the following conventions:

1. **Folder Naming Convention**:
   ```
   [grade]_[subject]_[topic]_[difficulty]
   ```
   Example: `preschool_art_color_mixing_beginner`

2. **Component Prefix Generation**:
   - Automatically derived from the topic part of the folder name
   - Each word is capitalized and joined
   - Example: `color_mixing` → `ColorMixing`

3. **Required Files**:
   ```
   ├── components/
   │   ├── [Prefix]Worksheet.tsx    # Main worksheet component
   │   ├── [Prefix]AnswerKey.tsx    # Answer key view
   │   ├── [Prefix]Tips.tsx         # Teaching tips
   │   └── [Prefix]Thumbnail.tsx    # Preview thumbnail
   ├── entries/
   │   └── index.ts                 # Component exports
   ├── title.txt                    # Worksheet title
   └── description.txt              # Worksheet description
   ```

4. **Entry Point Structure** (`entries/index.ts`):
   ```typescript
   import { lazy } from 'react';
   
   export const Worksheet = lazy(() => import('../components/[Prefix]Worksheet'));
   export const AnswerKey = lazy(() => import('../components/[Prefix]AnswerKey'));
   export const Tips = lazy(() => import('../components/[Prefix]Tips'));
   export const Thumbnail = lazy(() => import('../components/[Prefix]Thumbnail'));
   ```

### Metadata Generation
The dashboard automatically generates metadata from the folder name:
- Grade: Formatted from first part (e.g., `preschool` → `Preschool`, `grade2` → `Grade 2`)
- Subject: Formatted from second part (e.g., `art` → `Art`)
- Topic: Formatted from third part (e.g., `color_mixing` → `Color Mixing`)
- Difficulty: Formatted from fourth part (e.g., `beginner` → `Beginner`)

### Example
For a worksheet folder named `preschool_art_color_mixing_beginner`:
1. Component prefix will be `ColorMixing`
2. Required component files:
   - `ColorMixingWorksheet.tsx`
   - `ColorMixingAnswerKey.tsx`
   - `ColorMixingTips.tsx`
   - `ColorMixingThumbnail.tsx`
3. Dashboard metadata:
   - Grade: "Preschool"
   - Subject: "Art"
   - Topic: "Color Mixing"
   - Difficulty: "Beginner"

## Build Configuration

### 1. Development Configuration
```typescript
// vite.config.dev.ts
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: path.resolve('src/index.html')
      }
    }
  }
})
```

### 2. Production Configuration
```typescript
// vite.config.prod.ts
export default defineConfig({
  plugins: [
    react(),
    copyFiles(),
    createHtmlFiles(),
    generateThumbnail()
  ],
  build: {
    rollupOptions: {
      input: path.resolve(`src/worksheets/${WORKSHEET_ID}/entries/index.tsx`),
      output: {
        dir: `dist/${WORKSHEET_ID}`,
        format: 'iife',
        entryFileNames: 'script.js',
        assetFileNames: 'assets/[name][extname]'
      }
    }
  }
})
```

### 3. Build Output
```
dist/[worksheet_id]/
├── worksheet.html
├── answer_key.html
├── tips.html
├── thumbnail.html
├── thumbnail.png
├── script.js
├── styles.css
├── title.txt
└── description.txt
```

### 4. Development Dashboard
The development server provides a dashboard that:
- Lists all available worksheets
- Shows worksheet metadata
- Provides quick access to all views
- Enables real-time preview
- Supports rapid development workflow

## Testing & Validation

### 1. View Testing
- Test each HTML file independently
- Verify correct content rendering
- Check navigation and interactions
- Validate responsive design

### 2. Build Validation
- Verify all files are generated
- Check file sizes and optimization
- Test standalone functionality
- Validate asset paths

### 3. Quality Checklist
- [ ] All views render correctly
- [ ] Responsive design works
- [ ] Touch interactions function
- [ ] Assets load properly
- [ ] No console errors
- [ ] Accessibility standards met

## Best Practices

1. **Component Organization**
   - Keep components focused and single-purpose
   - Use shared components for common elements
   - Maintain consistent styling

2. **State Management**
   - Use React hooks for state
   - Keep state close to where it's used
   - Avoid prop drilling

3. **Styling**
   - Use Tailwind CSS for consistency
   - Follow mobile-first approach
   - Maintain accessibility standards

4. **Performance**
   - Optimize images and assets
   - Minimize bundle size
   - Use code splitting when needed 

## Responsive Design Specifications

### 1. Device Categories
```
Small Mobile:    280px - 320px   (e.g., Galaxy Fold)
Mobile:          321px - 480px   (e.g., iPhone SE)
Large Mobile:    481px - 768px   (e.g., iPad Mini)
Tablet:          769px - 1024px  (e.g., iPad)
```

### 2. WorksheetView Responsiveness
```typescript
// WorksheetView.tsx
const WorksheetView: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 w-full">
      {/* Header - Always full width, adjustable height */}
      <WorksheetHeader className="px-2 sm:px-4 md:px-6">
        {/* Content scales with screen size */}
      </WorksheetHeader>

      {/* Main content area */}
      <TouchContainer>
        <div className="max-w-4xl mx-auto p-3 sm:p-4 md:p-6">
          {/* Problems grid - Adjusts columns based on screen size */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
            {/* Individual problem cards */}
            <div className="bg-white rounded-lg p-3 sm:p-4 shadow-md">
              {/* Problem content scales appropriately */}
              <div className="text-base sm:text-lg md:text-xl">
                {/* Content */}
              </div>
            </div>
          </div>
        </div>
      </TouchContainer>
    </div>
  );
};
```

### 3. AnswerKeyView Responsiveness
```typescript
// AnswerKeyView.tsx
const AnswerKeyView: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 w-full">
      <WorksheetHeader className="px-2 sm:px-4 md:px-6">
        {/* Header content */}
      </WorksheetHeader>

      <TouchContainer>
        <div className="max-w-4xl mx-auto p-3 sm:p-4 md:p-6">
          {/* Solutions grid - Adjusts based on screen size */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
            {/* Solution cards with appropriate scaling */}
            <div className="bg-white rounded-lg p-3 sm:p-4">
              {/* Solution content */}
            </div>
          </div>
        </div>
      </TouchContainer>
    </div>
  );
};
```

### 4. TipsView Responsiveness
```typescript
// TipsView.tsx
const TipsView: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 w-full">
      <WorksheetHeader className="px-2 sm:px-4 md:px-6">
        {/* Header content */}
      </WorksheetHeader>

      <TouchContainer>
        <div className="max-w-4xl mx-auto p-3 sm:p-4 md:p-6">
          {/* Tips content with responsive text sizing */}
          <div className="space-y-4">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
              {/* Title */}
            </h2>
            <div className="text-sm sm:text-base md:text-lg">
              {/* Tips content */}
            </div>
          </div>
        </div>
      </TouchContainer>
    </div>
  );
};
```

### 5. ThumbnailView Specifications
```typescript
// ThumbnailView.tsx - Fixed dimensions, not responsive
const ThumbnailView: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px]">
      {/* Thumbnail maintains fixed dimensions for platform requirements */}
      <div className="w-[420px] h-[240px]">
        {/* Content */}
      </div>
    </div>
  );
};
```

### 6. Touch Interaction Guidelines
1. **Minimum Touch Target Sizes**
   ```css
   /* Buttons and interactive elements */
   .touch-target {
     min-width: 44px;      /* Minimum width for touch targets */
     min-height: 44px;     /* Minimum height for touch targets */
     padding: 12px;        /* Adequate padding for touch areas */
   }
   ```

2. **Touch Event Handling**
   ```typescript
   // Use TouchContainer for proper touch event handling
   <TouchContainer>
     {/* Content with touch interactions */}
   </TouchContainer>
   ```

3. **Spacing Guidelines**
   ```css
   /* Spacing between interactive elements */
   .touch-spacing {
     gap: 8px;           /* Minimum gap on small screens */
     @screen sm {
       gap: 12px;        /* Increased gap on larger screens */
     }
     @screen md {
       gap: 16px;        /* Comfortable spacing on tablets */
     }
   }
   ```

### 7. Font Size Guidelines
```css
/* Base font sizes for different screen sizes */
.text-content {
  /* Small mobile */
  font-size: 14px;
  line-height: 1.4;

  /* Regular mobile */
  @screen sm {
    font-size: 16px;
    line-height: 1.5;
  }

  /* Tablet and larger */
  @screen md {
    font-size: 18px;
    line-height: 1.6;
  }
}
```

### 8. Layout Adjustments
1. **Grid Systems**
   ```typescript
   // Responsive grid layouts
   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
     {/* Grid items */}
   </div>
   ```

2. **Spacing Scale**
   ```css
   /* Consistent spacing scale */
   .spacing-scale {
     --space-unit: 4px;
     padding: var(--space-unit);        /* 4px on smallest screens */
     @screen sm { padding: calc(var(--space-unit) * 2); }  /* 8px */
     @screen md { padding: calc(var(--space-unit) * 3); }  /* 12px */
     @screen lg { padding: calc(var(--space-unit) * 4); }  /* 16px */
   }
   ```

### 9. Testing Requirements
1. **Device Testing**
   - Test on actual devices when possible
   - Use Chrome DevTools device emulation
   - Verify touch interactions work correctly
   - Check for proper spacing and readability

2. **Orientation Testing**
   - Test both portrait and landscape modes
   - Ensure content remains accessible
   - Verify touch targets remain usable

3. **Performance Testing**
   - Check scroll performance
   - Verify touch response times
   - Monitor memory usage
   - Test with slower network conditions

## Mobile-First Testing & Validation

### 1. Required Device Testing Matrix
```typescript
const REQUIRED_TEST_DEVICES = {
  smallMobile: {
    width: 280,
    devices: ['Galaxy Fold', 'Small Android devices'],
    requirements: ['Touch targets', 'Text readability', 'Layout integrity']
  },
  regularMobile: {
    width: 320,
    devices: ['iPhone SE', 'iPhone 12/13/14', 'Pixel 5/6'],
    requirements: ['Interactive elements', 'Content flow', 'Navigation']
  },
  largeMobile: {
    width: 428,
    devices: ['iPhone Pro Max', 'Large Android phones'],
    requirements: ['Spacing optimization', 'Typography scale', 'Touch areas']
  },
  tablet: {
    width: 768,
    devices: ['iPad Mini', 'Galaxy Tab'],
    requirements: ['Layout adaptation', 'Content organization', 'Interactive elements']
  }
};
```

### 2. Mobile Testing Checklist
- [ ] Verify minimum supported width (280px)
- [ ] Test touch interactions on all clickable elements
- [ ] Validate text readability at all breakpoints
- [ ] Check spacing between interactive elements
- [ ] Verify form input usability on mobile
- [ ] Test landscape and portrait orientations
- [ ] Validate keyboard interaction (if applicable)
- [ ] Check gesture handling
- [ ] Verify scroll performance
- [ ] Test with different network conditions

### 3. Performance Requirements
```typescript
const MOBILE_PERFORMANCE_REQUIREMENTS = {
  firstContentfulPaint: '1.8s',
  interactionToNextPaint: '200ms',
  largestContentfulPaint: '2.5s',
  cumulativeLayoutShift: '0.1',
  totalBlockingTime: '200ms'
};
```

### 4. Touch Interaction Testing
```typescript
// Required touch test cases
const TOUCH_TEST_CASES = [
  'Single tap response',
  'Double tap handling',
  'Long press behavior',
  'Swipe gestures',
  'Pinch zoom (if applicable)',
  'Touch and drag',
  'Multi-touch handling'
];

// Example test implementation
const validateTouchInteractions = (element: HTMLElement) => {
  // Implementation of touch validation
};
```

### 5. Mobile-First Development Process
1. **Start Small**
   - Begin with 280px width
   - Design for touch first
   - Implement core functionality

2. **Progressive Enhancement**
   - Add features for larger screens
   - Enhance interactions progressively
   - Optimize layout for each breakpoint

3. **Continuous Testing**
   - Test on real devices
   - Validate touch interactions
   - Verify performance metrics

4. **Documentation**
   - Document mobile-specific features
   - Note device-specific behaviors
   - Record testing results

## Thumbnail Generation

### 1. Overview
Each worksheet set requires a thumbnail image that represents the content. This is automatically generated during the build process by converting the `thumbnail.html` template to a PNG image.

### 2. File Requirements
```
worksheet_[grade]_[subject]_[topic]_[level]/
├── thumbnail.html    # HTML template for thumbnail
└── thumbnail.png     # Auto-generated during build
```

### 3. HTML Template Structure
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Worksheet Preview</title>
    <link rel="stylesheet" href="styles.css">
    <script>
      window.WORKSHEET_VIEW = 'thumbnail';
    </script>
  </head>
  <body>
    <div id="thumbnail-content">
      <div id="root"></div>
    </div>
    <script src="script.js"></script>
  </body>
</html>
```

### 4. Technical Specifications
```typescript
const THUMBNAIL_SPECS = {
  dimensions: {
    width: 500,       // Fixed width
    height: 375,      // Fixed height (4:3 ratio)
    innerWidth: 420,  // Content width
    innerHeight: 240  // Content height
  },
  format: 'png',
  quality: 90,
  deviceScaleFactor: 2  // Retina quality
};
```

### 5. Generation Process
The build process automatically:
1. Builds the React application
2. Generates HTML files including thumbnail.html
3. Launches headless browser (Puppeteer)
4. Renders thumbnail.html
5. Captures screenshot at 2x resolution
6. Saves as thumbnail.png

### 6. Build Integration
```typescript
// vite.config.ts
export default defineConfig({
  plugins: [
    // ... other plugins
    {
      name: 'generate-thumbnails',
      closeBundle: async () => {
        const distDir = path.resolve(__dirname, 'dist');
        await generateWorksheetThumbnails(distDir);
      }
    }
  ]
});
```

### 7. Quality Requirements
- **Dimensions**: Exactly 500x375 pixels (4:3 ratio)
- **Resolution**: 2x for retina displays
- **Format**: PNG with transparency support
- **Quality**:
  - Clear text rendering
  - Sharp edges
  - No blur or pixelation
  - Proper color reproduction
  - File size < 100KB

### 8. Validation Checklist
- [ ] Correct dimensions (500x375)
- [ ] Retina quality (2x resolution)
- [ ] Clear text rendering
- [ ] Proper color reproduction
- [ ] No artifacts or blur
- [ ] Transparent background (if specified)
- [ ] File size optimized (<100KB)
- [ ] Content centered and visible
- [ ] Branding elements present

### 9. Error Handling
The build process includes robust error handling for:
- Missing thumbnail.html
- Rendering failures
- Screenshot capture issues
- File system errors
- Browser launch problems

### 10. Development Workflow
1. **Create Template**
   - Use provided HTML structure
   - Include required elements
   - Style appropriately

2. **Test Layout**
   - Verify dimensions
   - Check content positioning
   - Ensure all elements render

3. **Build Process**
   - Run `npm run build`
   - Check console for generation status
   - Verify thumbnail.png creation

4. **Quality Check**
   - Review generated image
   - Validate against checklist
   - Check file size

5. **Optimization**
   - Compress if needed
   - Adjust content if issues
   - Re-run build if necessary

### 11. Best Practices
1. **Content**
   - Keep design simple and clear
   - Use high contrast colors
   - Include key information only
   - Maintain brand consistency

2. **Performance**
   - Optimize assets
   - Minimize animations
   - Use efficient CSS
   - Avoid unnecessary elements

3. **Testing**
   - Test on different screens
   - Verify retina display
   - Check dark/light modes
   - Validate accessibility

## Using the Template

### Basic Template Location
The basic worksheet template is located in `src/worksheets/templates/basic/`. This template provides a standardized structure that should be followed when creating new worksheets.

### Template Structure
```
templates/basic/
├── components/              # React components
│   ├── BasicWorksheet.tsx  # Main worksheet view
│   ├── BasicAnswerKey.tsx  # Answer key view
│   ├── BasicTips.tsx       # Teaching tips view
│   └── BasicThumbnail.tsx  # Thumbnail preview
├── entries/
│   └── index.tsx           # Main entry point
├── title.txt               # Worksheet title
└── description.txt         # Worksheet description
```

### Creating a New Worksheet
1. Copy the basic template directory
2. Rename it following the convention: `[grade]_[subject]_[topic]_[difficulty]`
3. Rename the component files replacing "Basic" with your topic name in PascalCase
4. Update the imports in `index.tsx` to match your new component names
5. Update `title.txt` and `description.txt` with your worksheet's information
6. Implement your worksheet's functionality in the components

### Key Files and Their Purpose

1. **entries/index.tsx**
   - Main entry point
   - Handles React initialization
   - Manages view switching
   - Implements lazy loading

2. **components/[Prefix]Worksheet.tsx**
   - Main interactive worksheet
   - Contains the core learning activity
   - Uses shared components and layouts

3. **components/[Prefix]AnswerKey.tsx**
   - Shows solutions and explanations
   - Provides answer validation
   - Includes teaching notes if needed

4. **components/[Prefix]Tips.tsx**
   - Contains teaching guidelines
   - Lists learning objectives
   - Provides implementation tips

5. **components/[Prefix]Thumbnail.tsx**
   - Creates worksheet preview
   - Uses standard dimensions (500x375)
   - Shows key worksheet information

### Best Practices
1. Always start with the template
2. Follow the naming conventions
3. Implement all required components
4. Use lazy loading for better performance
5. Include proper TypeScript types
6. Add comprehensive comments
7. Follow the mobile-first approach
8. Use Tailwind CSS for styling

```typescript
// vite.config.ts
const WORKSHEET_ID = process.env.WORKSHEET_ID || process.argv
  .find(arg => arg.startsWith('--worksheet='))
  ?.replace('--worksheet=', '')

export default defineConfig({
  build: {
    rollupOptions: {
      input: path.resolve(`src/worksheets/${WORKSHEET_ID}/entries/index.tsx`),
      output: {
        dir: `dist/${WORKSHEET_ID}`
      }
    }
  }
});
```

### 3. Development Workflow
1. **Initial Setup**
   - Create new worksheet directory
   - Copy base component templates
   - Create required files

2. **Development**
   - Implement worksheet components
   - Add content and interactions
   - Test mobile responsiveness

3. **Build & Validation**
   ```bash
   # Build specific worksheet
   npm run build --worksheet=your_worksheet_id
   
   # Output structure
   dist/
   └── your_worksheet_id/
       ├── thumbnail.html
       ├── thumbnail.png      # Generated automatically
       ├── worksheet.html
       ├── answer_key.html
       └── tips.html
   ```

4. **Testing**
   - Test all generated HTML files
   - Verify thumbnail generation
   - Check mobile responsiveness
   - Validate accessibility

### 4. Best Practices
1. **Worksheet Organization**
   - Keep each worksheet self-contained
   - Follow naming conventions strictly
   - Include all required files

2. **Build Management**
   - Use consistent worksheet IDs
   - Verify builds in isolation
   - Test all generated files

3. **Version Control**
   - Commit worksheet files separately
   - Include clear commit messages
   - Document any special requirements

## Core Layout & Styling
```typescript
// Base layout requirements
const LAYOUT_REQUIREMENTS = {
  background: 'bg-white',    // White background for all pages
  borders: 'border border-gray-200',  // Subtle borders instead of shadows
  borderRadius: 'rounded-lg',
  padding: {
    container: 'p-6',
    contentTop: 'pt-8'      // Extra top padding for content
  }
};

// Example implementation
const ContentContainer = styled.div`
  ${LAYOUT_REQUIREMENTS.background}
  ${LAYOUT_REQUIREMENTS.borders}
  ${LAYOUT_REQUIREMENTS.borderRadius}
  ${LAYOUT_REQUIREMENTS.padding.container}
`;
```

### Header Colors
- Worksheet: `from-pink-500 to-yellow-500`
- Answer Key: `from-green-500 to-emerald-500`
- Tips: `from-amber-500 to-amber-700`

### Important Styling Notes
- Use white backgrounds (`bg-white`) for all main containers
- Prefer subtle borders over shadows for visual separation
- Use `border border-gray-200` for container boundaries
- Maintain consistent padding and spacing

[Rest of documentation continues...] 
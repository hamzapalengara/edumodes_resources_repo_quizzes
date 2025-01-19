# EduModes Worksheet Development Guide

## Overview
This guide outlines the development process for creating interactive educational worksheets using React while maintaining compatibility with the EduModes platform's requirements for standalone HTML output.

## 🎯 Core Requirements

### Output Format Requirements
Each worksheet must be exported as:
- Standalone HTML file
- Self-contained (all CSS/JS bundled)
- iframe-compatible
- Mobile-first design
- No external dependencies when loaded

## 🌟 Mobile-First Development

### 1. Viewport Requirements
```typescript
// Required meta tag in exported HTML
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

// Minimum supported dimensions
const VIEWPORT_MINS = {
  width: 280, // Galaxy Fold support
  height: 500
};
```

### 2. Touch Optimization
```typescript
// Touch target specifications
const TOUCH_SPECS = {
  minSize: 44, // pixels
  spacing: 8   // pixels
};

// Example React component implementation
const TouchTarget = styled.div`
  min-width: ${TOUCH_SPECS.minSize}px;
  min-height: ${TOUCH_SPECS.minSize}px;
  padding: ${TOUCH_SPECS.spacing}px;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
`;
```

### 3. Responsive Typography
```typescript
// Typography scale using clamp
const Typography = {
  base: 'clamp(16px, 4vw, 18px)',
  heading: 'clamp(18px, 5vw, 24px)',
  small: 'clamp(14px, 3vw, 16px)'
};
```

## 📁 Project Structure

### Required Files for Each Worksheet
Each worksheet folder must contain these files:

1. **`worksheet.html`** - Main Interactive Worksheet
   - Contains the interactive content
   - Mobile-first responsive design
   - Touch-optimized interactions
   - Score tracking and progress indicators
   - Proper meta viewport settings
   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
   ```

2. **`answer_key.html`** - Solutions and Explanations
   - Green gradient navigation bar
   - Step-by-step solutions
   - Visual explanations
   - Mobile-responsive layout
   - Standard EduModes branding

3. **`tips.html`** - Student Guidance
   - Orange gradient navigation bar
   - Student-focused help
   - Step-by-step guidance
   - Usage instructions
   - Problem-solving strategies
   - Success tips
   - Achievement goals

4. **`thumbnail.html`** - Thumbnail Template
   - Dimensions: 500x375px (4:3 ratio)
   - Inner content: 420x240px
   - Clean, simple design
   - High contrast for visibility
   - Mobile-grid optimized

5. **`thumbnail.png`** - Generated Preview
   - Auto-generated from thumbnail.html
   - Same dimensions as template
   - Optimized for web display
   - Used in worksheet listings

6. **`title.txt`** - Worksheet Title
   - Maximum 6 words
   - Clear and descriptive
   - No grade/level indicators
   - Used for display and navigation

7. **`description.txt`** - Worksheet Description
   - Maximum 100 words
   - Includes learning objectives
   - Mentions key activities
   - Specifies target audience
   - Used in worksheet listings

### Folder Naming Convention
```
worksheet_[grade]_[subject]_[topic]_[level]-[title]/
```
Example:
```
worksheet_preschool_english_vocabulary_building_beginner-my-first-words-adventure/
```
- Use hyphens (-) to separate title words
- Use underscores (_) to separate category elements

### Component Organization
```
src/
├── components/
│   ├── worksheet/
│   │   ├── base/           # Base worksheet components
│   │   ├── interactive/    # Interactive elements
│   │   └── layout/        # Layout components
│   ├── answer-key/
│   └── tips/
├── hooks/
│   ├── useWorksheet.ts
│   ├── useInteractive.ts
│   └── useTouchEvents.ts
├── utils/
│   ├── export/           # Export utilities
│   └── thumbnail/        # Thumbnail generation
└── styles/
    ├── themes/          # Theme configurations
    └── components/      # Component-specific styles
```

### Output Structure
```
dist/
└── worksheets/
    └── [grade]_[subject]_[topic]_[level]/
        ├── worksheet.html
        ├── answer_key.html
        ├── tips.html
        ├── thumbnail.html
        ├── thumbnail.png
        ├── title.txt
        └── description.txt
```

## 🎨 Theme Configuration

### Subject-Specific Themes
```typescript
export const SubjectThemes = {
  math: {
    primary: '#1e3a8a',    // Blue-900
    secondary: '#5b21b6',  // Purple-900
    gradient: 'from-blue-500 to-purple-700'
  },
  english: {
    primary: '#FF6B6B',    // Custom Red
    secondary: '#4ECDC4',  // Custom Teal
    gradient: 'from-pink-500 to-teal-700'
  },
  science: {
    primary: '#38A169',    // Green-700
    secondary: '#2B6CB0',  // Blue-700
    gradient: 'from-green-500 to-blue-700'
  }
} as const;
```

### Content Type Themes
```typescript
export const ContentThemes = {
  worksheet: {
    primary: '#EC4899',    // Pink
    secondary: '#EAB308',  // Yellow
    gradient: 'from-pink-500 to-yellow-500'
  },
  answerKey: {
    primary: '#22C55E',    // Green
    secondary: '#10B981',  // Emerald
    gradient: 'from-green-500 to-emerald-700'
  },
  tips: {
    primary: '#EAB308',    // Yellow
    secondary: '#F97316',  // Orange
    gradient: 'from-yellow-500 to-orange-500'
  }
} as const;
```

## 🛠 Development Process

### 1. Component Development
```typescript
// Example interactive component structure
interface InteractiveProps {
  touchEnabled?: boolean;
  onInteraction?: (data: InteractionData) => void;
  feedback?: FeedbackType;
}

const InteractiveElement: React.FC<InteractiveProps> = ({
  touchEnabled = true,
  onInteraction,
  feedback
}) => {
  // Implementation
};
```

### 2. Export Process
1. Development in React
2. Build process bundles components
3. Generate standalone HTML
4. Create auxiliary files
5. Generate thumbnail
6. Package for distribution

### 3. Testing Requirements
- Mobile device testing (280px - 428px)
- Touch interaction verification
- Landscape/portrait modes
- iframe functionality
- Standalone HTML validation

## 📦 Build & Export Configuration

### Vite Configuration
```typescript
// vite.config.ts
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        // Ensure all assets are inlined
        inlineDynamicImports: true,
        // Generate standalone HTML
        format: 'iife'
      }
    }
  }
});
```

### Export Script Configuration
```typescript
interface ExportConfig {
  grade: string;
  subject: string;
  topic: string;
  level: string;
  title: string;
  description: string;
}

// Example usage
const exportWorksheet = async (config: ExportConfig) => {
  // Implementation
};
```

## 🎯 Quality Checklist

### Development Phase
- [ ] Components follow mobile-first design
- [ ] Touch interactions implemented
- [ ] Responsive layout verified
- [ ] Theme compliance checked
- [ ] Accessibility requirements met

### Build Phase
- [ ] All assets properly bundled
- [ ] CSS/JS inlined correctly
- [ ] No external dependencies
- [ ] File size optimized
- [ ] Source maps excluded

### Export Phase
- [ ] Correct file structure
- [ ] Standalone HTML verified
- [ ] iframe compatibility tested
- [ ] Thumbnail generated
- [ ] Auxiliary files created

### Testing Phase
- [ ] Mobile device testing
- [ ] Touch interaction verification
- [ ] Cross-browser compatibility
- [ ] Performance benchmarks
- [ ] Accessibility validation

## 📱 Mobile Testing Matrix

### Device Categories
1. **Small Mobile (280px - 320px)**
   - Galaxy Fold
   - Small Android devices

2. **Standard Mobile (321px - 428px)**
   - iPhone SE
   - iPhone 12/13/14
   - Pixel 5/6

3. **Large Mobile/Small Tablet (429px - 768px)**
   - iPad Mini
   - Galaxy Tab

### Orientation Testing
- Portrait mode functionality
- Landscape mode adaptability
- Touch target accessibility
- Keyboard interaction (if applicable)

## 🔄 Development Workflow

1. **Setup**
   - Create new worksheet component
   - Configure theme and layout
   - Implement interactive elements

2. **Development**
   - Mobile-first implementation
   - Touch interaction development
   - Responsive design verification
   - Theme compliance checking

3. **Building**
   - Bundle optimization
   - Asset inlining
   - Standalone HTML generation
   - Auxiliary file creation

4. **Testing**
   - Mobile device testing
   - Touch interaction verification
   - Cross-browser compatibility
   - Performance validation

5. **Export**
   - Generate final files
   - Create thumbnail
   - Package for distribution
   - Documentation update

## 📸 Thumbnail Specifications

### Overview
Each worksheet set requires a single thumbnail that represents the entire set. This thumbnail is used in the worksheet listings and grid views of the Edumodes platform.

### Dimensions
```
Outer Container:
- Width: 500px
- Height: 375px (4:3 aspect ratio)

Inner Container:
- Width: 420px
- Height: 240px
- Centered within outer container
```

### Visual Requirements
1. **Outer Container**
   - Pink to Yellow gradient background (`from-pink-500 to-yellow-500`)
   - Overflow hidden
   - System font stack

2. **Inner Container**
   - White background
   - 16px border radius
   - Drop shadow
   - Centered positioning

3. **Header**
   - Pink background (`bg-pink-500`)
   - White text
   - Bold font weight
   - Truncate long titles
   - Adequate padding (12px vertical, 20px horizontal)

4. **Preview Area**
   - Centered content
   - Fallback placeholder if no preview content
   - Maintains aspect ratio of content

### Implementation
```typescript
// Example usage
<WorksheetSetThumbnail 
  title="Worksheet Title"
  previewContent={<PreviewComponent />}
/>
```

### File Requirements
Each worksheet set should include:
```
worksheet_[grade]_[subject]_[topic]_[level]-[title]/
├── thumbnail.html    # Thumbnail template
└── thumbnail.png     # Generated preview image
```

### Generation Process
1. Render thumbnail component
2. Generate PNG using thumbnail.html as source
3. Maintain exact dimensions and styling
4. Optimize for web display

### Quality Checklist
- [ ] Exact dimensions maintained (500x375)
- [ ] Gradient background visible
- [ ] Text properly truncated
- [ ] Preview content centered
- [ ] Shadow and rounded corners visible
- [ ] No content overflow
- [ ] PNG generated correctly 

## 🔄 Component to File Mapping

### Overview
Each React component corresponds to a specific output file in the worksheet set. Understanding these relationships is crucial for development and maintenance.

### File Relationships
```
1. Worksheet Component → worksheet.html
   ├── Uses WorksheetHeader (Pink-Yellow gradient)
   ├── Contains interactive elements
   └── Includes progress tracking

2. Answer Key Component → answer_key.html
   ├── Uses AnswerKeyHeader (Green gradient)
   ├── Contains solution displays
   └── Includes step-by-step explanations

3. Tips Component → tips.html
   ├── Uses TipsHeader (Orange gradient)
   ├── Contains learning guidance
   └── Includes usage instructions

4. Thumbnail Component → thumbnail.html/png
   ├── Single thumbnail per worksheet set
   ├── Fixed dimensions (500x375)
   └── Represents entire set
```

### Component Responsibilities

1. **Worksheet Components**
   - Handle interactive functionality
   - Manage state and progress
   - Process user input
   - Provide feedback

2. **Answer Key Components**
   - Display solutions clearly
   - Show solution steps
   - Maintain print-friendly layout
   - Include visual explanations

3. **Tips Components**
   - Present learning strategies
   - Provide clear instructions
   - Maintain student-friendly language
   - Include helpful examples

4. **Thumbnail Component**
   - Represent worksheet content
   - Maintain fixed dimensions
   - Support preview generation
   - Follow branding guidelines

### Build Process
Each component type follows a specific build process to generate its corresponding output file:

```typescript
// Build Configuration
{
  entries: {
    worksheet: 'src/entries/worksheet.tsx',
    'answer-key': 'src/entries/answer-key.tsx',
    tips: 'src/entries/tips.tsx',
    thumbnail: 'src/entries/thumbnail.tsx'
  },
  output: {
    dir: 'dist',
    entryFileNames: '[name]/scripts/[name].js',
    assetFileNames: '[name]/[type]/[name][ext]'
  }
}
``` 

## 🚀 Running Development Server and Build

### Development Server
To start the development server for a specific worksheet:

```powershell
# Windows PowerShell
$env:VITE_WORKSHEET_ID="your_worksheet_id"; npm run dev

# Example
$env:VITE_WORKSHEET_ID="grade2_mathematics_addition_beginner"; npm run dev
```

This will start the development server at http://localhost:5173 with hot module replacement enabled.

### Production Build
To build a worksheet for production:

```powershell
# Windows PowerShell
$env:WORKSHEET_ID="your_worksheet_id"; npm run build

# Example
$env:WORKSHEET_ID="grade2_mathematics_addition_beginner"; npm run build
```

The build process will:
1. Compile TypeScript files
2. Bundle and transform modules
3. Generate HTML files (worksheet.html, answer_key.html, tips.html, thumbnail.html)
4. Create the thumbnail image
5. Output all files to `dist/[worksheet_id]/`

### Build Output Structure
After building, you'll find the following files in `dist/[worksheet_id]/`:
```
dist/[worksheet_id]/
├── worksheet.html      # Main interactive worksheet
├── answer_key.html    # Solutions and explanations
├── tips.html         # Student guidance
├── thumbnail.html    # Thumbnail template
├── thumbnail.png     # Generated preview image
├── styles.css       # Bundled styles
└── script.js        # Bundled JavaScript
```

### Important Notes
- For development, use `VITE_WORKSHEET_ID` environment variable
- For production build, use `WORKSHEET_ID` environment variable
- The development server supports hot module replacement
- All built files are self-contained and can be loaded independently
- Production builds are minified and optimized for performance 
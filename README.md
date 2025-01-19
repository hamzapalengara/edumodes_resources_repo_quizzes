# Edumodes Resources Repository

## Overview
This project serves as a resource creation and management tool for the Edumodes web application. It is specifically designed to create, organize, and export interactive educational resources that can be imported into the main Edumodes platform.

## Background
This project represents an evolution from a previous HTML/CSS/JavaScript-based worksheet creation approach. The shift to React was necessitated by:
- Need for more complex interactive elements
- Better management of worksheet state and interactions
- Improved development experience and maintainability
- Ability to create more sophisticated educational features

## Purpose
- **Resource Creation**: Provides tools and interfaces for creating interactive educational resources
- **Resource Organization**: Helps organize and structure educational content
- **Export Compatibility**: Ensures created resources are compatible with Edumodes webapp's import functionality
- **Repository Function**: Acts as a centralized repository for managing educational content before deployment

## Output Format
The project generates **standalone, self-contained HTML files** that:
- Can be loaded independently via iframes in the main Edumodes webapp
- Include all necessary CSS, JavaScript, and assets bundled within
- Don't require external dependencies when loaded
- Maintain full interactivity when imported

## Project Structure
```
src/
├── components/     # Reusable React components
├── hooks/         # Custom React hooks
├── utils/         # Utility functions
├── styles/        # CSS and styling files
├── assets/        # Static assets
└── worksheets/    # Worksheet components and logic
    ├── templates/ # Base worksheet templates
    └── exports/   # Generated standalone worksheet files
```

## Tech Stack
- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Key Libraries**:
  - `@dnd-kit`: Implements drag-and-drop functionality for interactive resource organization
  - `@headlessui/react`: Provides accessible UI components
  - `framer-motion`: Handles animations for interactive elements
  - `react-icons`: Supplies icon sets

## Worksheet Development Process
1. **Creation**: Develop worksheets using React components
2. **Testing**: Test interactivity and features in development environment
3. **Building**: Generate standalone HTML files with all assets bundled
4. **Organization**: Store generated files in structured folders
5. **Export**: Package worksheets for import into Edumodes webapp

## Export Structure
Generated worksheets follow this organization:
```
exports/
├── worksheet-category-1/
│   ├── worksheet1.html
│   └── worksheet2.html
└── worksheet-category-2/
    ├── worksheet3.html
    └── worksheet4.html
```

Each HTML file is:
- Self-contained with all necessary resources
- Ready for iframe implementation
- Properly namespaced to avoid conflicts
- Optimized for performance

## Getting Started

### Prerequisites
- Node.js (Latest LTS version recommended)
- npm or yarn

### Installation
1. Clone the repository
```bash
git clone [repository-url]
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

### Available Scripts
- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run lint`: Run ESLint
- `npm run preview`: Preview production build
- `npm run export`: Generate standalone worksheet files (to be implemented)

## Development Guidelines
- Ensure all resources follow the Edumodes import specifications
- Test worksheet functionality both in development and as standalone files
- Maintain consistent structure and organization
- Document any special requirements or dependencies for specific resource types
- Test worksheets in iframe context before final export

## Integration with Edumodes
The exported standalone worksheets are designed to be:
1. Imported into the Edumodes webapp
2. Loaded via iframes in the appropriate context
3. Fully functional with all interactive elements
4. Independent of the main application's state

## Contributing
1. Create feature branches for new resource types or tools
2. Follow the established coding standards
3. Test resource compatibility before merging
4. Document any new features or resource types
5. Ensure all exports are properly bundled and self-contained

## License
[Specify License]

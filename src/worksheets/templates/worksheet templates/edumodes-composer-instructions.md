# EduModes Worksheet Composer Instructions

## Basic Structure
Please create a new worksheet set with these specifications:

1. Subject: [Subject Name]
2. Grade: [Grade Level]
3. Topic: [Specific Topic]
4. Difficulty: [Beginner/Intermediate/Advanced]

## Folder Structure
Create files in `worksheet_grade{X}_{subject}_{topic}_{difficulty}` folder:
- title.txt (max 6 words)
- description.txt (max 100 words)
- worksheet.html (blue header gradient)
- answer_key.html (green header gradient)
- tips.html (amber header gradient, student-focused help)
- thumbnail.html (with generated PNG)

## Key Requirements
- Follow existing templates from "worksheet templates" folder
- Make content age-appropriate and engaging
- Include interactive elements and visual aids
- Ensure mobile responsiveness
- Generate thumbnail only for this worksheet
- Tips should be student-focused, not teacher-focused

## Optional Preferences
[Any specific requirements for activities, design elements, or special features]

## Example Folder Name
```
worksheet_grade3_mathematics_addition_2digit_beginner
└── Contains:
    ├── title.txt
    ├── description.txt
    ├── worksheet.html
    ├── answer_key.html
    ├── tips.html
    ├── thumbnail.html
    └── thumbnail.png
```

## Visual Assets

### Emoji Libraries
1. **Unicode Emojis (Default)**
   - Built-in emoji support
   - No additional setup required
   - Example: 📐 📦 ⚽ 🎲 🏠 📚

2. **OpenMoji Library**
   ```html
   <!-- Using CDN -->
   <img src="https://openmoji.org/data/color/svg/1F4D6.svg" alt="book">
   ```

3. **Twemoji (Twitter Emoji)**
   ```html
   <!-- Include in head -->
   <script src="https://twemoji.maxcdn.com/v/latest/twemoji.min.js"></script>

   <!-- Initialize in body -->
   <script>
     twemoji.parse(document.body);
   </script>
   ```

### Icon Libraries
1. **Heroicons (Tailwind)**
   ```html
   <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
     <!-- icon path -->
   </svg>
   ```

2. **Phosphor Icons**
   ```html
   <script src="https://unpkg.com/phosphor-icons"></script>
   <i class="ph-book-open"></i>
   ```

3. **Iconify (Recommended)**
   ```html
   <script src="https://unpkg.com/@iconify/iconify"></script>
   <span class="iconify" data-icon="mdi:shape-square-plus"></span>
   ```

### Illustration Resources
1. **unDraw**
   - Free SVG illustrations
   - Customizable colors
   - Access via: https://undraw.co/

2. **OpenPeeps**
   - Character illustrations
   - Mix-and-match system
   - Access via: https://www.openpeeps.com/

## Asset Implementation Guidelines
1. **Performance Best Practices**
   - Use CDN links when possible
   - Optimize SVGs and images
   - Lazy load non-critical assets

2. **Accessibility Requirements**
   - Include alt text for all images
   - Maintain proper contrast ratios
   - Ensure screen reader compatibility

3. **Asset Organization**
   ```
   worksheet_folder/
   ├── assets/
   │   ├── icons/
   │   ├── emojis/
   │   └── illustrations/
   ```

## Header Colors
- Worksheet: `from-blue-500 to-blue-700`
- Answer Key: `from-emerald-500 to-emerald-700`
- Tips: `from-amber-500 to-amber-700`

## Content Guidelines
1. Title (title.txt):
   - Maximum 6 words
   - Clear and descriptive
   - Age-appropriate language

2. Description (description.txt):
   - Maximum 100 words
   - Include learning objectives
   - Mention key activities
   - Specify target audience

3. Tips (tips.html):
   - Student-focused guidance
   - Simple, clear language
   - Helpful hints for activities
   - Encouraging tone

4. Worksheet (worksheet.html):
   - Clear instructions
   - Age-appropriate activities
   - Interactive elements
   - Visual aids and examples
   - Progressive difficulty

5. Answer Key (answer_key.html):
   - Clear solutions
   - Explanations where needed
   - Step-by-step guidance 

## Additional Technical Setup

### Emoji Integration
1. **Basic Setup**
   ```html
   <!-- In head -->
   <script src="https://twemoji.maxcdn.com/v/latest/twemoji.min.js"></script>
   <script src="https://unpkg.com/@iconify/iconify"></script>

   <!-- In body -->
   <script>
     twemoji.parse(document.body);
   </script>
   ```

2. **Usage Examples**
   ```html
   <!-- Unicode Emoji -->
   <span class="emoji">📐</span>
   
   <!-- OpenMoji -->
   <img src="https://openmoji.org/data/color/svg/1F4D6.svg" alt="book">
   
   <!-- Iconify -->
   <span class="iconify" data-icon="mdi:shape-square-plus"></span>
   ```

3. **Styling**
   ```css
   .emoji {
     font-size: 1.5em;
   }
   
   .iconify {
     color: currentColor;
     font-size: 24px;
   }
   ```

### Asset Selection Guidelines
1. Use Unicode emojis for basic symbols
2. Use OpenMoji/Twemoji for consistent styling
3. Use Iconify for specific educational icons
4. Use illustrations for complex concepts

### Performance Considerations
1. Preload critical assets
2. Lazy load non-critical assets
3. Use appropriate image formats
4. Optimize file sizes
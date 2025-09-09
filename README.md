# Should I take this class?

A simple, functional web application that assesses student readiness for advanced math and physics courses, providing personalized recommendations and AP score predictions.

## Features

- **10-question assessment** covering algebra skills, mathematical reasoning, past classes, study habits, and more
- **Intelligent scoring system** with weighted points for different answer choices
- **Personalized recommendations** based on total readiness score
- **AP score predictions** (1-5 scale) with study time estimates
- **Clean, responsive UI** with modern design
- **Study tips and recommendations** tailored to individual responses

## Quick Start

### No Installation Required!

This is a pure HTML, CSS, and JavaScript application that runs directly in your browser.

1. **Open the application**:
   - Simply open `index.html` in any modern web browser
   - Or use a local server (recommended for development)

2. **Using a local server** (optional but recommended):
   ```bash
   # Using Python (if installed)
   python -m http.server 8000
   
   # Using Node.js (if installed)
   npx serve .
   
   # Using PHP (if installed)
   php -S localhost:8000
   ```

3. **Access the application**:
   - Direct file: Open `index.html` in your browser
   - Local server: Navigate to `http://localhost:8000`

### Deployment

Simply upload the files to any web hosting service:
- **Netlify**: Drag and drop the folder
- **Vercel**: Connect your repository
- **GitHub Pages**: Push to a repository and enable Pages
- **Any static hosting**: Upload `index.html`, `styles.css`, and `script.js`

## Assessment Categories

The quiz covers these key areas:

1. **Algebra Skills** - Solving equations, manipulating expressions
2. **Mathematical Reasoning** - Word problems, logic puzzles
3. **Past Classes** - Highest level math completed
4. **Past Performance** - Grades in highest level class
5. **Physics Experience** - Previous physics coursework
6. **Abstract Concepts** - Functions, proofs, vectors
7. **Study Habits** - Hours per week studying
8. **Consistency** - Regular study patterns
9. **Problem Solving** - Approach to difficult problems
10. **Confidence** - Self-assessment of readiness

## Scoring System

- **80+ points**: High readiness (AP 4-5 range)
- **60-79 points**: Good readiness (AP 3-4 range)  
- **40-59 points**: Needs preparation (AP 2-3 range)
- **Below 40**: Not ready yet (AP 1-2 range)

## Technology Stack

- **Frontend**: Pure HTML, CSS, and JavaScript (Vanilla JS)
- **Styling**: Custom CSS with modern design
- **State Management**: JavaScript variables and DOM manipulation
- **Deployment**: Static files (any web hosting service)

## Project Structure

```
├── index.html              # Main HTML file
├── styles.css              # All CSS styling
├── script.js               # JavaScript logic and quiz functionality
└── README.md               # Documentation
```

## Customization

### Adding Questions
Edit the `questions` array in `script.js`:

```javascript
{
  id: 'your_question_id',
  text: 'Your question text?',
  type: 'radio', // or 'slider'
  options: [ // for radio type
    { text: 'Option 1', value: 'opt1', points: 5 },
    { text: 'Option 2', value: 'opt2', points: 10 }
  ]
}
```

### Adjusting Scoring
Modify the `points` arrays in the questions or the scoring logic in `calculateScore()`.

### Styling
Update `styles.css` to customize colors, fonts, and layout.

## Deployment

### Netlify
1. Drag and drop the entire project folder to Netlify
2. Your site is live!

### Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect it's a static site
3. Deploy with one click!

### GitHub Pages
1. Push your code to a GitHub repository
2. Go to Settings > Pages
3. Select source branch and deploy

## Future Enhancements

- User accounts and progress tracking
- More sophisticated scoring algorithms
- Integration with learning management systems
- Mobile app version
- Advanced analytics and reporting

## License

MIT License - feel free to use and modify for your needs.

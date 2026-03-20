# Math Game for 3rd Graders - משחק מתמטיקה לכיתה ג'

A progressive math learning game designed for Israeli 3rd graders with Hebrew and English language support.

## Features

### 🎮 Game Mechanics
- **Star Rating System**: Earn 1-3 stars based on solving speed
  - Fast: 3 stars ⭐⭐⭐
  - Medium: 2 stars ⭐⭐
  - Slow: 1 star ⭐
- **Coin Rewards**: Earn coins based on problem difficulty and stars
  - Easy problems: 5/3/1 coins
  - Medium problems: 8/5/2 coins
  - Hard problems: 12/7/3 coins
- **Progressive Unlocking**: Complete all problems in a category to unlock the next

### 📚 Categories (in order of difficulty)

1. **Addition up to 100** (חיבור עד 100)
2. **Subtraction up to 100** (חיסור עד 100)
3. **Multiplication up to 12** (כפל עד 12)
4. **Addition & Subtraction up to 9999** (חיבור וחיסור עד 9999)
5. **Division up to 99** (חילוק עד 99)
6. **Fractions** (שברים)
7. **Multiplication up to 20** (כפל עד 20)
8. **Word Problems** (בעיות מילוליות) - Real-world scenarios with Israeli context
9. **Place Value** (ערך מקומי) - Understanding digits and their positions
10. **Time & Clock** (שעון וזמן) - Reading time and calculating durations

Each category contains 10 problems with varying difficulty:
- Problems 1-3: Easy
- Problems 4-7: Medium
- Problems 8-10: Hard

### 🌍 Language Support
- Toggle between Hebrew (עברית) and English
- Right-to-left (RTL) support for Hebrew
- Translations stored in `translations.js` for easy modification

### 💾 Local Storage
- Progress automatically saved in browser's localStorage
- Tracks:
  - Total coins and stars
  - Each problem's solved status
  - Best stars per problem
  - Category unlock status

## Setup for GitLab Pages

1. **Create a new GitLab repository**

2. **Push these files to the repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Math game"
   git remote add origin YOUR_GITLAB_REPO_URL
   git push -u origin main
   ```

3. **GitLab Pages will automatically deploy** after the CI pipeline completes

4. **Access your game at:**
   ```
   https://YOUR_USERNAME.gitlab.io/YOUR_REPO_NAME/
   ```

## File Structure

```
├── index.html          # Main HTML structure
├── styles.css          # Styling and responsive design
├── game.js            # Game logic and state management
├── problems.js        # Problem generators for all categories
├── translations.js    # Language translations (Hebrew/English)
├── .gitlab-ci.yml     # GitLab Pages deployment config
└── README.md          # This file
```

## Customization

### Adding New Languages
Edit `translations.js` and add a new language object:

```javascript
const translations = {
    he: { ... },
    en: { ... },
    fr: {  // New language
        title: "Jeu de Mathématiques",
        // ... add all translations
    }
};
```

### Modifying Difficulty
Edit the time thresholds in `problems.js`:

```javascript
function getTimeThresholds(difficulty) {
    const thresholds = {
        1: { excellent: 5, good: 10 },    // Easy
        2: { excellent: 8, good: 15 },    // Medium
        3: { excellent: 12, good: 20 }    // Hard
    };
    return thresholds[difficulty];
}
```

### Changing Coin Rewards
Edit the rewards in `problems.js`:

```javascript
function getCoinReward(difficulty, stars) {
    const baseRewards = {
        1: { 3: 5, 2: 3, 1: 1 },    // Easy
        2: { 3: 8, 2: 5, 1: 2 },    // Medium
        3: { 3: 12, 2: 7, 1: 3 }    // Hard
    };
    return baseRewards[difficulty][stars] || 0;
}
```

### Adding New Problem Types
Add a new generator function in `problems.js`:

```javascript
// Category 7: New problem type
7: [
    // Easy (1-3)
    () => {
        // Your problem logic
        return { question: "...", answer: ..., difficulty: 1 };
    },
    // ... 9 more problem generators
]
```

Then add the category to the HTML in `index.html`.

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile-friendly and responsive design
- Works offline after first load (cached in browser)

## Development

To test locally:
1. Open `index.html` in a web browser
2. No build process required - pure HTML/CSS/JS

## License

Free to use and modify for educational purposes.

## Credits

Designed for Israeli 3rd grade math curriculum.

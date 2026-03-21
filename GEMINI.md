# GEMINI.md

This file provides architectural overview and development context for the Math Game project.

## Project Overview

A progressive math learning game designed for Israeli 1st, 2nd, and 3rd graders. The game features:
- **Multi-grade support**: Content tailored for Grades 1 (Aleph), 2 (Bet), and 3 (Gimel).
- **Gamification**: Star rating system (1-3 stars) based on speed, coin rewards for solving problems, and a virtual house to decorate with earned coins.
- **i18n**: Full support for Hebrew (RTL) and English.
- **Persistence**: Game state and house state are saved to `localStorage` per grade.
- **Portability**: Progress can be exported/imported via URL parameters.

## Architecture

The project is a pure HTML/CSS/JS single-page application (SPA).

### Screens
Managed via CSS `active` class toggling using `showScreen()` in `game.js`:
- `grade-screen`: Grade selection (1st, 2nd, 3rd).
- `home-screen`: Category selection for the chosen grade.
- `category-screen`: 10-problem grid for a selected category.
- `problem-screen`: Active problem with timer and numeric input.
- `result-screen`: Feedback screen showing stars and coins earned.
- `house-screen`: Virtual house/shop managed by `house.js`.

### State Management
State is stored in `localStorage` under keys like `mathGameState_g1` and `mathHouseState_g1`.
- `gameState`: Tracks total coins, total stars, and problem-level progress (solved status, best stars, best time).
- `houseState`: Tracks house level and owned shop items.

### Internationalization (i18n)
- Managed in `translations.js`.
- UI elements use `data-lang` attributes for automatic updates via `updateLanguage()`.
- Code uses the `t(key)` helper for string retrieval.

## Building and Running

### Development
- **No build process required**.
- Open `index.html` directly in any modern web browser.
- All logic runs client-side.

### Deployment
- Designed for GitLab Pages (see `.gitlab-ci.yml` if present, though README mentions it).
- Assets must be served from the root or a relative path as there is no bundler.

## Development Conventions

### Script Load Order
Crucial as scripts depend on global variables:
1. `translations.js`: i18n engine.
2. `problems_g1.js`, `problems_g2.js`, `problems.js`: Problem generators for each grade.
3. `house.js`: Virtual house logic.
4. `game.js`: Main game engine and entry point.

### Adding Problems
Problem generators are objects where keys are category IDs (0-9) and values are arrays of exactly 10 functions.
Each function must return:
```javascript
{
    question: "String or display",
    answer: Number,
    difficulty: 1 | 2 | 3
}
```
- Problems 0-2: Easy (Difficulty 1)
- Problems 3-6: Medium (Difficulty 2)
- Problems 7-9: Hard (Difficulty 3)

### Styling
- Responsive design in `styles.css`.
- Uses CSS variables for consistent coloring (though many colors are hardcoded in `house.js` SVGs).
- RTL support is handled via `dir="rtl"` on the `<html>` tag for Hebrew.

### Virtual House
- Items and tiers are defined in `house.js`.
- Icons are inline SVGs stored in the `ITEM_SVGS` constant.
- Some items are grade-specific (see `grades` property in `SHOP_ITEMS`).

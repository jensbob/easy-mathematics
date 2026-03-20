# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running the Game

No build process — open `index.html` directly in a browser. All logic runs client-side.

## Architecture

Pure HTML/CSS/JS single-page app with four screens managed via CSS `active` class toggling (`showScreen()` in `game.js`):
- `home-screen` — category selection grid
- `category-screen` — 10-problem grid for a selected category
- `problem-screen` — active problem with timer
- `result-screen` — stars/coins earned after solving

**Script load order matters** (defined in `index.html`):
1. `translations.js` — must load first; defines `translations` object, `currentLang`, `t()`, and `updateLanguage()`
2. `problems.js` — defines `problemGenerators` (keyed 0–9 by category), plus `getTimeThresholds()` and `getCoinReward()`
3. `game.js` — depends on both above; manages `gameState`, timer, answer checking, and localStorage persistence

## Key Conventions

**Problem generators** (`problems.js`): Each category key holds an array of exactly 10 generator functions. Each returns `{ question, answer, difficulty }` where `difficulty` is 1/2/3. Problems 0–2 are easy (difficulty 1), 3–6 medium (difficulty 2), 7–9 hard (difficulty 3). Fraction problems may also return `displayQuestion` for rendering.

**State**: Persisted to `localStorage` under key `mathGameState` as JSON. Shape:
```js
{ totalCoins, totalStars, categories: [{ id, unlocked, problems: [{ id, solved, stars, coins, bestTime }] }] }
```
Language preference stored separately under key `lang`.

**i18n**: UI strings use `data-lang` attributes (updated by `updateLanguage()`) or the `t(key)` helper. All translation keys live in `translations.js` under `he` and `en` objects. When adding new UI text, add keys to both language objects and use `data-lang` in HTML or `t()` in JS.

**Category unlocking**: Categories unlock sequentially — completing all 10 problems in category N unlocks category N+1. Only category 0 starts unlocked.

**Score updates**: Re-solving a problem only replaces coins/stars if the new score is higher (`stars > problem.stars`). Old values are subtracted from totals before adding new ones.

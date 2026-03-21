# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Running the Game

No build process — open `index.html` directly in a browser. All logic runs client-side.

---

## Architecture

Pure HTML/CSS/JS single-page app. Screens are toggled via the CSS `active` class using `showScreen()` in `game.js`.

### Screens
| ID | Purpose |
|---|---|
| `grade-screen` | Landing page — grade picker (always shown on load) |
| `home-screen` | Category grid for selected grade |
| `category-screen` | 10-problem grid for a selected category |
| `problem-screen` | Active problem with timer and answer input |
| `result-screen` | Stars/coins earned after solving a problem |
| `house-screen` | House room view + shop (tabs) |

### Script Load Order (defined in `index.html`)
1. `translations.js` — `translations` object, `currentLang`, `t()`, `updateLanguage()`, `UI_SVGS` references
2. `problems_g1.js` — `problemGenerators_g1`, `getTimeThresholds_g1()`
3. `problems_g2.js` — `problemGenerators_g2`, `getTimeThresholds_g2()`
4. `problems.js` — `problemGenerators` (grade 3), `getTimeThresholds()`, `getCoinReward()`
5. `house.js` — `UI_SVGS`, `ITEM_SVGS`, `SHOP_ITEMS`, `HOUSE_TIERS`, house state, render functions
6. `game.js` — `gameState`, grade selection, timer, answer checking, localStorage, URL nav

---

## Multi-Grade System

Three grades (Aleph/1st, Bet/2nd, Gimmel/3rd), each with 9 categories × 10 problems.

### Grade Selection
- `currentGrade` (global in `game.js`) is set by `selectGrade(grade)`
- Grade picker screen always shown on page load — no "remember last grade"
- "Change Grade" button on home screen returns to picker

### Categories per Grade
| # | Grade 1 (Aleph) | Grade 2 (Bet) | Grade 3 (Gimmel) |
|---|---|---|---|
| 0 | Addition up to 10 | Addition up to 20 (review) | Addition up to 100 |
| 1 | Subtraction up to 10 | Subtraction up to 20 (review) | Subtraction up to 100 |
| 2 | Bigger or Smaller? | Addition up to 100 | Basic Fractions |
| 3 | Even and Odd | Subtraction up to 100 | Multiplication up to 12 |
| 4 | Addition up to 20 | Place Value | Time & Clock |
| 5 | Subtraction up to 20 | Multiplication by 2,5,10 | Division (times table ×10) |
| 6 | Skip Counting | Halves and Quarters | Word Problems |
| 7 | Missing Addend | Time | Addition & Subtraction up to 1,000 |
| 8 | Word Problems | Word Problems | Addition up to 9999 |

Grade 1 also has **Category 9: Final Challenge** (mixed problems).
Grade 2 also has **Category 9: Money Problems**.
Grade 3 also has **Category 9: Final Challenge**.

### Category Unlocking
Sequential — completing all 10 problems in category N unlocks N+1. Only category 0 starts unlocked.

---

## State & Persistence

### localStorage Keys
| Key | Contents |
|---|---|
| `mathGameState_g1/g2/g3` | Per-grade game progress |
| `mathHouseState_g1/g2/g3` | Per-grade house/shop state |
| `lang` | Language preference (`he` / `en`) |

### Game State Shape
```js
{
  totalCoins,
  totalStars,
  categories: [{
    id, unlocked,
    problems: [{ id, solved, stars, coins }]
  }]
}
```
`bestTime` is intentionally excluded from the share export (cosmetic only).

### House State Shape
```js
{ houseLevel: 0–3, ownedItems: ['sofa', 'tv', ...] }
```

### Score Updates
Re-solving a problem only replaces coins/stars if the new score is higher (`stars > problem.stars`). Old values are subtracted before adding new ones.

---

## Problem Generators

Each grade's file (`problems_g1.js`, `problems_g2.js`, `problems.js`) exports:
- `problemGenerators_gN` — object keyed `0–8` (and `0–9` for grade 1), each an array of **exactly 10** generator functions
- `getTimeThresholds_gN(difficulty, categoryId?)` — returns `{ excellent, good }` time thresholds in seconds

Each generator returns:
```js
{ question, answer, difficulty }   // difficulty: 1=easy, 2=medium, 3=hard
// Optionally also:
{ displayQuestion }  // for fraction/RTL display variants
```

Problems 0–2 are easy, 3–6 medium, 7–9 hard.

### RTL / Bidi Note
Skip counting problems (Grade 1, cat 4) use `\u2066...\u2069` (LTR Isolate) around number sequences to prevent Unicode bidi reordering mixing the step-size digit into the sequence. The label is now "מה הבא?" / "What comes next?" on line 1, sequence on line 2 (requires `white-space: pre-line` on `.question-box h1`).

### Selecting Generators at Runtime
```js
function getGenerators() {
    if (currentGrade === 1) return problemGenerators_g1;
    if (currentGrade === 2) return problemGenerators_g2;
    return problemGenerators; // grade 3
}
function getThresholds(difficulty, categoryId) {
    if (currentGrade === 1) return getTimeThresholds_g1(difficulty);
    if (currentGrade === 2) return getTimeThresholds_g2(difficulty, categoryId);
    return getTimeThresholds(difficulty, categoryId);
}
```

---

## i18n

- All UI strings live in `translations.js` under `he` and `en` objects
- Static HTML uses `data-lang="key"` attributes; `updateLanguage()` updates them all
- Dynamic JS uses `t('key')` helper
- Language toggle is on the **grade picker screen only** (not on home screen)
- Default language: Hebrew (`he`)
- Grade category names use keys `g1cat0`–`g1cat8`, `g2cat0`–`g2cat8`, `g3cat0`–`g3cat8`
- Home screen title is set programmatically: `t('title') — t('gradeTitle{N}')`

---

## Icons — OpenMoji

**All icons in this project must use OpenMoji.** Never use native emoji characters (⭐, 🪙, etc.) for icons in the UI — always use `getOpenMoji(hex)` or `UI_SVGS.*` instead.

All icons use [OpenMoji](https://openmoji.org) SVGs loaded from CDN:
```
https://openmoji.org/data/color/svg/{HEX}.svg
```

### UI Icons (`UI_SVGS` in `house.js`)
| Key | OpenMoji HEX | Usage |
|---|---|---|
| `coin` | 1FA99 | Coin badge, shop prices, result screen |
| `star` | 2B50 | Stars earned display |
| `house` | 1F3E0 | House button in header |
| `flagEn` | 1F1EC-1F1E7 | UK flag in lang toggle |
| `flagHe` | 1F1EE-1F1F1 | Israel flag in lang toggle |
| `timer` | 23F1 | Timer display on problem screen |
| `grade1` | 1F331 | Seedling — grade 1 card |
| `grade2` | 1F4D6 | Books — grade 2 card |
| `grade3` | 1F3C6 | Trophy — grade 3 card |

`injectUIIcons()` is called at `initGame()` and fills all `.ui-icon-*` placeholder elements in the HTML.

### Shop/House Item Icons (`ITEM_SVGS` in `house.js`)
Generated from `EMOJI_MAP` (34 items). Each renders as `<img class="openmoji-icon">` inside a 52×52px container (`.shop-item-svg` / `.house-item-svg`).

### Icon Sizing (CSS)
```css
.openmoji-icon            /* 24px — default for UI icons */
.house-btn .openmoji-icon /* 28px — house button */
.category-stats .openmoji-icon /* 18px — category card stats */
.shop-item-svg img / .house-item-svg img  /* 100% of 52×52 container */
.shop-upgrade-emoji img / .house-tier-emoji img /* 100% of 48×48 container */
.grade-emoji .openmoji-icon  /* 72px desktop / 56px mobile */
.stars-display .star-side .openmoji-icon  /* 64px desktop / 48px mobile */
.stars-display .star-center .openmoji-icon /* 88px desktop / 64px mobile */
.reward-value .openmoji-icon /* 28px — result screen coin */
```

---

## House & Shop

### House Tiers
| Level | Name | Upgrade Cost |
|---|---|---|
| 0 | Shack | — |
| 1 | Cozy House | 40 🪙 |
| 2 | Nice House | 100 🪙 |
| 3 | Mansion | 200 🪙 |

### Shop Items by Zone (35 total)
Items with a `grades: [n]` field only appear for that grade. Items without `grades` are shared across all grades.

| Zone | All Grades | Grade 1 only | Grade 2 only | Grade 3 only |
|---|---|---|---|---|
| Living | sofa, TV, globe | — | — | — |
| Bedroom | bed, bookshelf | plushy | ball | mirror |
| Kitchen | bubble tea, ice cream | donut | candy | pizza |
| Garden | garden, pool | slide | — | tree |
| Special | robot, trampoline | rocket, kite, bicycle, train | console, car, scooter, skateboard, headphones | phone, laptop, guitar, telescope |
| Animals | cat | hamster | rabbit | dog |

**Total coins to buy everything (per grade) + all upgrades = ~875 🪙**

---

## URL Breadcrumbs

Navigation state is reflected in the URL query string:

| URL | Screen |
|---|---|
| `?` (no params) | Grade picker |
| `?g=1` | Grade 1 home |
| `?g=2&c=4` | Grade 2, category 4 |
| `?g=3&c=2&p=7` | Grade 3, category 2, problem 7 |
| `?g=1&house=1` | House screen |

Browser back/forward is handled via `popstate`. `restoreFromURL()` is called on init.

---

## Share / Copy Progress Feature

Encodes all 3 grades' progress into a compact binary URL parameter (`?s=...`).

### Encoding (v3 compact binary)
- 8-bit version header
- 270 problem values × 2 bits (0=unsolved, 1–3=stars)
- Per grade: 3 house tier bits (unary) + N item ownership bits
- URL-safe base64 (no padding)
- Falls back to legacy JSON v2 format on import

This keeps the URL short enough for QR codes in most cases. If QR fails (URL still too long), a message is shown instead.

### Legacy v2 fallback
Old JSON-encoded shares (base64 of full game state JSON) are still importable.

---

## Coin Economy Summary

| Action | Reward |
|---|---|
| Solve problem (1 star) | 1–3 coins |
| Solve problem (2 stars) | 3–6 coins |
| Solve problem (3 stars) | 5–10 coins |
| Total earnable (all grades complete, all 3 stars) | ~900 coins |
| Total spendable (all items + all upgrades, one grade) | ~875 coins |

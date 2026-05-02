# Vite React Calculator

Minimal calculator built with Vite + React (TypeScript). Enter two numbers, choose an operator, and see the result.

## Features
- Two numeric inputs (stacked)
- Operator buttons: `+`, `-`, `*`, `/`
- Keyboard support: type numbers, press `+ - * /` to set operator, `Enter` to calculate
- Responsive, centered layout

## Quick start

Prerequisites: Node.js (>=16) and npm

Install and run in development:

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Deploying to Vercel
- Build command: `npm run build`
- Output directory: `dist`

You can deploy by connecting your repo in the Vercel dashboard or using the Vercel CLI (`npx vercel`). If Vercel doesn't auto-detect the project, set the build command and output directory as above.

## Usage
- Type numbers into the two inputs.
- Click an operator button or press one of `+ - * /` on the keyboard — the result updates immediately.
- Press `Enter` to compute as well.

## Project structure
- `src/App.tsx` — main calculator UI and logic
- `src/App.css` — styles
- `src/main.tsx` — app entry
# Hono + Vite sample

This sample runs a Hono backend on port 3000 and a Vite dev server that proxies `/api` requests to the backend.

Setup:

1. Install dependencies:
   npm install

2. Run development servers (Hono + Vite):
   npm run dev

- Vite dev server runs (by default) at http://localhost:5173
- Hono server runs at http://localhost:3000
- The Vite dev server proxies /api -> http://localhost:3000 so frontend fetch('/api/hello') works during dev.

Build for production:

1. Build:
   npm run build

2. Build will emit frontend assets via Vite and compile TypeScript to `dist/` (server). You'll need to set up a production server script that serves built assets and runs the server bundle.

# TACAI Site (Next.js 14 + Tailwind)

## Quick Start
```bash
npm i
npm run dev
# open http://localhost:3000
```

## Deploy to Vercel
1. Create a GitHub repo and push this folder.
2. Go to https://vercel.com/import and import the repo.
3. Framework preset: **Next.js**. Build command: `next build`. Output: `.vercel/output` (auto).
4. Click **Deploy**.
5. Add your custom domain in Vercel → Project → Settings → Domains.

## Tailwind
Config is in `tailwind.config.ts`. Global styles in `styles/globals.css`.

## Where to edit content
- Main page: `app/page.tsx`
- Metadata/SEO: `app/layout.tsx`
- Favicon: `public/favicon.ico`
```

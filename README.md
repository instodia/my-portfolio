# SHIVANSHU — PORTFOLIO

A cinematic, modern developer portfolio for **Shivanshu Shukla**: Full-Stack Developer using AI and B.Tech CS (AI & ML) student.

## Run locally

Requires **Node.js 18+**.

```bash
npm install
npm run dev
```

Open the URL printed by Vite (default `http://localhost:8080` or `http://localhost:5173`).

Production build:

```bash
npm run build
npm run preview
```

## Updating content

All portfolio information is managed in one central file: [`src/data/portfolio.ts`](src/data/portfolio.ts).

- **Profile & Links**: `profile`
- **Projects**: `projects`
- **Education & Experience**: `education`, `experience`
- **Skills & Evidence**: `skillCategories`, `skillEvidence`
- **Milestones & Moments**: `achievements`, `certifications`
- **Journey**: `seasons`

## Updating Photos

Place your photo cutout as `pic.png` in the project root, then run:

```bash
npm run images
```

This builds the responsive WebP images and social share preview in `public/assets/`.

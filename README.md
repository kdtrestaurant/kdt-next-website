This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Deploy on GitHub Pages

This project is configured for GitHub Pages (project site) at:

```
https://kdtrestaurant.github.io/kdt-next-website/
```

### 1. Configuration Changes

The following adjustments were added in `next.config.ts`:

- `output: "export"` to enable static export.
- `basePath` and `assetPrefix` set to `/kdt-next-website` so assets and routes work under the project sub-path.
- `images.unoptimized: true` because optimized images are not supported in static export.
- `trailingSlash: true` for more reliable relative links on GitHub Pages.

If you later move to a user/organization site (e.g. `kdtrestaurant.github.io` repo named exactly that) remove `basePath` & `assetPrefix`.

### 2. Build Locally

```bash
npm install
npm run build:gh
# Static site output in ./out
```

Test locally by serving the `out` folder (the base path must be preserved):

```bash
npx serve out
```

Visit `http://localhost:3000/kdt-next-website/` (port may vary) to confirm.

### 3. GitHub Actions Deployment

The workflow file at `.github/workflows/deploy.yml` builds and exports, then publishes `out` to Pages on every push to `main`.

### 4. Enable Pages (First Time Only)

In your repository settings:
1. Go to Settings > Pages.
2. Set Source to `GitHub Actions`.
3. Save.

### 5. Push Changes

```bash
git add .
git commit -m "Configure GitHub Pages deployment"
git push origin main
```

### 6. Limitations & Notes

- Server-side rendering, API routes, and dynamic functions won't run—this is a fully static export.
- Use relative navigation via Next.js `<Link>`; it respects `basePath` automatically.
- For image paths use leading slash (e.g. `/images/foo.png`) so `basePath` prefixes them.
- Remove `trailingSlash` if you prefer clean URLs; ensure all internal links update accordingly.

### 7. Troubleshooting

- 404 on assets: Confirm `assetPrefix` matches the repository name exactly.
- Blank styling: Ensure CSS files are within the exported `out/_next/` structure—rebuild if missing.
- Wrong URL root: Remove `basePath`/`assetPrefix` when deploying to a root user/org site.


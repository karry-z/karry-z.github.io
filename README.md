# Kairui Zhang Academic Website

Personal academic website built with Astro and deployed to GitHub Pages:

https://karry-z.github.io/

## Run Locally

Requirements:

- Node.js
- npm

Install dependencies:

```sh
npm install
```

Start the local dev server:

```sh
npm run dev
```

Astro will print a local URL, usually:

```sh
http://localhost:4321/
```

Check types and Astro diagnostics:

```sh
npm run check
```

Build the static site:

```sh
npm run build
```

Preview the production build locally:

```sh
npm run preview
```

## Project Structure

The codebase is split into content and layout.

```txt
src/
  content/      Content that is manually maintained
  components/   Page and UI implementation
  pages/        Astro routes
  styles/       Global CSS
  i18n.ts       Locale helpers
public/
  assets/       PDFs and other static files
  images/       Profile and project images
```

## Edit Content

English content:

```txt
src/content/content.en.ts
```

Chinese content:

```txt
src/content/content.zh.ts
```

Shared content types:

```txt
src/content/contentTypes.ts
```

Common edits:

- About/profile text: edit `homeContentEn.about` and `homeContentZh.about`
- Selected projects on Home: edit `homeContentEn.selectedProjects.projectIds` and the Chinese equivalent
- News: edit `homeContentEn.news` and `homeContentZh.news`
- Contacts/social links: edit `homeContentEn.contacts` and `homeContentZh.contacts`
- Projects: edit `projectsEn` and `projectsZh`
- CV PDF path: edit `cvContentEn.pdfPath` and `cvContentZh.pdfPath`

Project images should go in:

```txt
public/images/projects/
```

CV PDFs should go in:

```txt
public/assets/pdf/
```

## Edit Layout and UI

Global site shell:

```txt
src/components/site/
```

Home page sections:

```txt
src/components/home/
```

Projects page:

```txt
src/components/projects/
```

CV page:

```txt
src/components/cv/
```

404 page:

```txt
src/components/not-found/
```

Routes are intentionally thin. They only mount page components:

```txt
src/pages/index.astro
src/pages/projects/index.astro
src/pages/cv/index.astro
src/pages/zh/index.astro
src/pages/zh/projects/index.astro
src/pages/zh/cv/index.astro
```

## Edit UI Labels

Site header/footer labels:

```txt
src/components/site/siteConfig.ts
```

Home section labels, section IDs, section backgrounds:

```txt
src/components/home/homeConfig.ts
```

Projects search/filter/sort labels:

```txt
src/components/projects/projectsConfig.ts
```

Project `categories` are free-form strings in content. If a new category should appear as a filter button, add the same string to `projectsConfig.ts` with English and Chinese labels.

Example:

```ts
categories: ["multimodal-learning", "evaluation"]
```

## Deploy

Deployment is handled by GitHub Actions:

```txt
.github/workflows/deploy.yml
```

Pushing to `main` triggers a build and deploys the site to GitHub Pages.

Normal deploy flow:

```sh
npm run check
npm run build
git add -A
git commit -m "Update website"
git push origin main
```

Do not commit `dist/`; GitHub Actions builds it during deployment.

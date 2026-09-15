# Benli Liu — Aviation Photography

A static, responsive aviation photography portfolio built with Astro.

## Run locally

```bash
npm install
npm run dev
```

Open the local address Astro prints in your terminal.

## Create a production build

```bash
npm run build
```

The generated static site is written to `dist/`.

## Add your final photographs

1. Put optimized image files in `public/images/photography/`.
2. Open `src/data/photos.ts`.
3. Add one photo object using the documented example at the top of that file. Point its `image` field to the local file, for example:

```ts
image: '/images/photography/air-canada-777-atl.jpg'
```

WebP or AVIF is preferred, though high-quality JPG files also work well. For full-width display, export images at roughly 2000–3000 pixels on the long edge.

## Add or edit photo metadata

All Home, Gallery, and detail-page photography content lives in `src/data/photos.ts`. Each entry supports:

- `id`: permanent unique internal identifier
- `slug`: permanent, human-readable URL identifier
- `title`
- `aircraftType`
- `registration`
- `airline`
- `airport`
- `location`
- `date`: use `YYYY-MM-DD`
- `camera`
- `lens`
- `image`
- `alt`: a concise image description
- `featured`
- `description`: optional supporting text
- `orientation`: optional `landscape` or `portrait`; defaults to landscape

Copy the documented example to add a photograph. Astro automatically creates a detail page at `/gallery/your-slug`. Keep a published slug unchanged so existing links remain stable.

To remove a photograph, delete its single object from `src/data/photos.ts` and remove its corresponding file from `public/images/photography/`. No page or component edits are required.

## Update external links

Replace the placeholder GitHub, LinkedIn, email, and Aircraft Spotter Radar links in:

- `src/pages/about.astro`
- `src/components/RadarSection.astro`

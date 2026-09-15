const base = `${import.meta.env.BASE_URL.replace(/\/$/, '')}/`;

/** Prefix an internal URL with Astro's deployment base path. */
export function withBase(path: string): string {
  if (/^(?:[a-z]+:)?\/\//i.test(path) || path.startsWith('#')) return path;
  return `${base}${path.replace(/^\/+/, '')}`;
}

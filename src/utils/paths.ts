/** Build an internal URL that respects Astro's configured deployment base. */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const normalizedPath = path.replace(/^\/+/, '');
  return normalizedPath ? `${base}/${normalizedPath}` : `${base || ''}/`;
}

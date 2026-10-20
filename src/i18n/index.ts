import en, { type Dict } from './en';
import { langInfo, type Lang } from './langs';

export * from './langs';
export type { Dict };

// Each language file exports a full Dict. Missing keys fall back to English.
const modules = import.meta.glob<{ default: Partial<Dict> }>(['./*.ts', '!./index.ts', '!./langs.ts', '!./en.ts'], { eager: true });
const dicts: Record<string, Partial<Dict>> = {};
for (const [path, mod] of Object.entries(modules)) {
  const code = path.slice(2, -3);
  if (mod.default && typeof mod.default === 'object') dicts[code] = mod.default;
}

function merge<T>(base: T, over: unknown): T {
  if (Array.isArray(base) || typeof base !== 'object' || base === null) return (over ?? base) as T;
  const out: Record<string, unknown> = { ...(base as Record<string, unknown>) };
  if (over && typeof over === 'object') {
    for (const [k, v] of Object.entries(over)) out[k] = merge((base as Record<string, unknown>)[k], v);
  }
  return out as T;
}

const cache = new Map<string, Dict>();
export function t(lang: Lang): Dict {
  if (!cache.has(lang)) cache.set(lang, lang === 'en' ? en : merge(en, dicts[lang]));
  return cache.get(lang)!;
}

const TZ = 'Asia/Bangkok';

export function formatDate(d: Date, lang: Lang, opts: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short', year: 'numeric' }) {
  return new Intl.DateTimeFormat(langInfo(lang).locale, { timeZone: TZ, ...opts }).format(d);
}

export function isoDate(d: Date) {
  return d.toISOString().slice(0, 10);
}

export function daysSince(d: Date, now = new Date()) {
  return Math.floor((now.getTime() - d.getTime()) / 86_400_000);
}

/** Guides older than this are flagged as being re-checked. */
export const FRESH_DAYS = 90;

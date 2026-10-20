const TZ = 'Asia/Bangkok';

export function formatDate(d: Date, opts: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short', year: 'numeric' }) {
  return new Intl.DateTimeFormat('en-GB', { timeZone: TZ, ...opts }).format(d);
}

/** Thai Buddhist Era year. */
export function buddhistYear(d: Date) {
  const y = Number(new Intl.DateTimeFormat('en-GB', { timeZone: TZ, year: 'numeric' }).format(d));
  return y + 543;
}

export function isoDate(d: Date) {
  return d.toISOString().slice(0, 10);
}

export function daysSince(d: Date, now = new Date()) {
  return Math.floor((now.getTime() - d.getTime()) / 86_400_000);
}

/** Guides older than this are flagged as being re-checked. */
export const FRESH_DAYS = 90;

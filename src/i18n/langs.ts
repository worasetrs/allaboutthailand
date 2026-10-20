// Order matches the language menu.
export const LANGS = [
  { code: 'en', flag: 'GB', name: 'English', hreflang: 'en', locale: 'en-GB' },
  { code: 'nl', flag: 'NL', name: 'Nederlands', hreflang: 'nl', locale: 'nl-NL' },
  { code: 'de', flag: 'DE', name: 'Deutsch', hreflang: 'de', locale: 'de-DE' },
  { code: 'sv', flag: 'SE', name: 'Svenska', hreflang: 'sv', locale: 'sv-SE' },
  { code: 'fi', flag: 'FI', name: 'Suomi', hreflang: 'fi', locale: 'fi-FI' },
  { code: 'no', flag: 'NO', name: 'Norsk', hreflang: 'nb', locale: 'nb-NO' },
  { code: 'fr', flag: 'FR', name: 'Français', hreflang: 'fr', locale: 'fr-FR' },
  { code: 'da', flag: 'DK', name: 'Dansk', hreflang: 'da', locale: 'da-DK' },
  { code: 'th', flag: 'TH', name: 'ไทย', hreflang: 'th', locale: 'th-TH-u-ca-gregory' },
  { code: 'zh', flag: 'CN', name: '中文', hreflang: 'zh-Hans', locale: 'zh-CN' },
  { code: 'ru', flag: 'RU', name: 'Русский', hreflang: 'ru', locale: 'ru-RU' },
] as const;

export type Lang = (typeof LANGS)[number]['code'];
export const DEFAULT_LANG: Lang = 'en';
export const LANG_CODES = LANGS.map((l) => l.code) as Lang[];

export function langInfo(code: Lang) {
  return LANGS.find((l) => l.code === code)!;
}

export function langPaths() {
  return LANG_CODES.map((lang) => ({ params: { lang } }));
}

/** Prefix a site path (starting and ending with "/") with the language. */
export function href(lang: Lang, path = '/') {
  return `/${lang}${path}`;
}

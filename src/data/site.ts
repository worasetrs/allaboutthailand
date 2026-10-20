export const SITE = {
  name: 'All About Thailand',
  tagline: 'The practical guide to Thailand for foreigners',
  description:
    'Visas, entry rules, money, safety, culture and news for foreigners in Thailand, written in plain English and linked to official sources.',
};

export const NAV = [
  { href: '/', label: 'Home', icon: 'home' },
  { href: '/guides/', label: 'Guides', icon: 'book' },
  { href: '/news/', label: 'News', icon: 'news' },
  { href: '/essentials/', label: 'Essentials', icon: 'kit' },
  { href: '/search/', label: 'Search', icon: 'search' },
] as const;

export const DESKTOP_NAV = [
  { href: '/guides/', label: 'Guides' },
  { href: '/news/', label: 'News' },
  { href: '/visit/', label: 'Regions' },
  { href: '/essentials/', label: 'Essentials' },
  { href: '/calendar/', label: 'Calendar' },
];

export const EMERGENCY = [
  { label: 'Tourist Police', note: 'English-speaking, 24 hours', number: '1155' },
  { label: 'Police', note: 'Crime and accidents', number: '191' },
  { label: 'Ambulance & medical', note: 'National emergency medical', number: '1669' },
  { label: 'Fire', note: 'Fire and rescue', number: '199' },
];

export const PATHS: Record<string, { title: string; blurb: string; tag: string }> = {
  'first-trip': { title: 'First trip', tag: 'Travel', blurb: 'Arrival card, SIM, money and getting around on day one.' },
  visa: { title: 'Visas & entry', tag: 'Immigration', blurb: 'Visa exemption, DTV, extensions, 90-day reports and TM30.' },
  living: { title: 'Living here', tag: 'Expat', blurb: 'Renting, healthcare and everyday admin.' },
  work: { title: 'Working & remote work', tag: 'Work', blurb: 'What you can and cannot do on each visa.' },
  retire: { title: 'Retiring', tag: 'Retirement', blurb: 'Retirement visa rules and financial requirements.' },
  culture: { title: 'Culture & law', tag: 'Culture', blurb: 'Etiquette, temples and laws visitors often break by accident.' },
};

export const CATEGORY_LABEL: Record<string, string> = {
  immigration: 'Visa & Immigration',
  advisory: 'Travel advisory',
  economy: 'Economy',
  events: 'Events',
  transport: 'Transport',
  safety: 'Safety',
};

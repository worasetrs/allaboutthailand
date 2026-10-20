export const SITE = { name: 'All About Thailand' };

export const EMERGENCY_NUMBERS = ['1155', '191', '1669', '199'] as const;

export const PATH_KEYS = ['first-trip', 'visa', 'living', 'work', 'retire', 'culture'] as const;

export const CATEGORY_KEYS = ['immigration', 'advisory', 'economy', 'events', 'transport', 'safety'] as const;

export const CURRENCIES = ['USD', 'EUR', 'GBP', 'SEK', 'NOK', 'DKK', 'CNY', 'RUB', 'JPY', 'KRW', 'INR', 'AUD', 'SGD', 'MYR', 'CAD', 'CHF'];

/** Default converter currency per language. */
export const DEFAULT_CURRENCY: Record<string, string> = {
  en: 'USD', nl: 'EUR', de: 'EUR', sv: 'SEK', fi: 'EUR', no: 'NOK', fr: 'EUR', da: 'DKK', th: 'USD', zh: 'CNY', ru: 'RUB',
};

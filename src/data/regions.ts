// Region text lives in src/i18n/<lang>.ts under regions.list.<slug>.
export const REGION_SLUGS = ['bangkok', 'north', 'northeast', 'central', 'east', 'south'] as const;
export type RegionSlug = (typeof REGION_SLUGS)[number];
export const REGION_THAI: Record<RegionSlug, string> = {
  bangkok: 'กรุงเทพมหานคร',
  north: 'ภาคเหนือ',
  northeast: 'ภาคอีสาน',
  central: 'ภาคกลาง',
  east: 'ภาคตะวันออก',
  south: 'ภาคใต้',
};

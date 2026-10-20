// Public holidays follow the official calendars published for 2026 and 2027.
// Festivals marked holiday: false are not days off.
export type CalendarEntry = {
  date: string; // ISO yyyy-mm-dd
  end?: string;
  name: string;
  holiday: boolean;
  note?: string;
};

export const CALENDAR: CalendarEntry[] = [
  { date: '2026-10-23', name: 'King Chulalongkorn Memorial Day', holiday: true, note: 'Government offices and banks closed.' },
  { date: '2026-11-24', name: 'Loy Krathong', holiday: false, note: 'Full-moon festival. Float a krathong on rivers and lakes; some calendars list 25 Nov.' },
  { date: '2026-11-24', name: 'Yi Peng (Chiang Mai)', holiday: false, note: 'Lanterns over Chiang Mai, around the Loy Krathong full moon. Sky-lantern releases need permits.' },
  { date: '2026-12-05', name: "King Bhumibol's Birthday, National Day and Father's Day", holiday: true, note: 'Falls on a Saturday.' },
  { date: '2026-12-07', name: "Substitution day for 5 December", holiday: true, note: 'Most calendars list Monday 7 December. Check with your bank or employer.' },
  { date: '2026-12-10', name: 'Constitution Day', holiday: true },
  { date: '2026-12-31', name: "New Year's Eve", holiday: true },
  { date: '2027-01-01', name: "New Year's Day", holiday: true },
  { date: '2027-02-06', name: 'Chinese New Year', holiday: false, note: 'Big celebrations in Yaowarat (Bangkok Chinatown). Not a national day off.' },
  { date: '2027-02-21', name: 'Makha Bucha Day', holiday: true, note: 'Buddhist holy day. Alcohol sales are usually banned.' },
  { date: '2027-02-22', name: 'Substitution day for Makha Bucha', holiday: true },
  { date: '2027-04-06', name: 'Chakri Memorial Day', holiday: true },
  { date: '2027-04-13', end: '2027-04-15', name: 'Songkran (Thai New Year)', holiday: true, note: 'Nationwide water festival. Expect heavy travel and closed offices.' },
  { date: '2027-05-01', name: 'National Labour Day', holiday: true, note: 'Banks and private companies. Substitution day Monday 3 May.' },
  { date: '2027-05-04', name: 'Coronation Day', holiday: true },
  { date: '2027-05-20', name: 'Visakha Bucha Day', holiday: true, note: 'Buddhist holy day. Alcohol sales are usually banned.' },
  { date: '2027-06-03', name: "Queen Suthida's Birthday", holiday: true },
  { date: '2027-07-18', name: 'Asalha Bucha Day', holiday: true, note: 'Alcohol sales are usually banned.' },
  { date: '2027-07-19', name: 'Buddhist Lent Day (substitution)', holiday: true },
  { date: '2027-07-28', name: "King Vajiralongkorn's Birthday", holiday: true },
  { date: '2027-08-12', name: "Queen Mother's Birthday and Mother's Day", holiday: true },
  { date: '2027-10-13', name: 'King Bhumibol Memorial Day', holiday: true },
  { date: '2027-10-23', name: 'King Chulalongkorn Memorial Day', holiday: true, note: 'Falls on a Saturday. Substitution day Monday 25 October.' },
  { date: '2027-12-05', name: "King Bhumibol's Birthday, National Day and Father's Day", holiday: true, note: 'Falls on a Sunday. Substitution day Monday 6 December.' },
  { date: '2027-12-10', name: 'Constitution Day', holiday: true },
  { date: '2027-12-31', name: "New Year's Eve", holiday: true },
];

export const CALENDAR_SOURCES = [
  { name: 'Ministry of Foreign Affairs: 2026 holidays', url: 'https://image.mfa.go.th/mfa/0/xzhwNrdFsC/Holiday_2026/Holiday_2026.pdf' },
  { name: 'Time Out Bangkok: 2027 public holidays', url: 'https://www.timeout.com/bangkok/news/the-thailand-2027-public-holidays-092326' },
  { name: 'Bank of Thailand: financial institution holidays', url: 'https://www.bot.or.th/en/financial-institutions-holiday.html' },
];

export const SEASONS = [
  { name: 'Cool season', months: 'Nov – Feb', note: 'Dry and pleasant. Peak travel season.' },
  { name: 'Hot season', months: 'Mar – May', note: 'Up to 40°C inland. Songkran in April.' },
  { name: 'Rainy season', months: 'Jun – Oct', note: 'Afternoon storms, green landscapes, fewer crowds. The Gulf islands get most rain Oct – Dec.' },
];

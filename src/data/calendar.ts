// Public holidays follow the official calendars published for 2026 and 2027.
// Names and notes are translated in src/i18n/<lang>.ts under calendar.names / calendar.notes.
export type CalendarEntry = {
  date: string; // ISO yyyy-mm-dd
  end?: string;
  name: string; // key in calendar.names
  note?: string; // key in calendar.notes
  holiday: boolean;
};

export const CALENDAR: CalendarEntry[] = [
  { date: '2026-10-23', name: 'chulalongkorn', note: 'closed', holiday: true },
  { date: '2026-11-24', name: 'loyKrathong', note: 'loy', holiday: false },
  { date: '2026-11-24', name: 'yiPeng', note: 'yiPeng', holiday: false },
  { date: '2026-12-05', name: 'fathersDay', note: 'saturday', holiday: true },
  { date: '2026-12-07', name: 'substitution', note: 'dec7', holiday: true },
  { date: '2026-12-10', name: 'constitution', holiday: true },
  { date: '2026-12-31', name: 'newYearsEve', holiday: true },
  { date: '2027-01-01', name: 'newYear', holiday: true },
  { date: '2027-02-06', name: 'chineseNewYear', note: 'cny', holiday: false },
  { date: '2027-02-21', name: 'makhaBucha', note: 'alcohol', holiday: true },
  { date: '2027-02-22', name: 'substitution', holiday: true },
  { date: '2027-04-06', name: 'chakri', holiday: true },
  { date: '2027-04-13', end: '2027-04-15', name: 'songkran', note: 'songkran', holiday: true },
  { date: '2027-05-01', name: 'labour', note: 'labour', holiday: true },
  { date: '2027-05-04', name: 'coronation', holiday: true },
  { date: '2027-05-20', name: 'visakhaBucha', note: 'alcohol', holiday: true },
  { date: '2027-06-03', name: 'queenSuthida', holiday: true },
  { date: '2027-07-18', name: 'asalhaBucha', note: 'alcohol', holiday: true },
  { date: '2027-07-19', name: 'lent', holiday: true },
  { date: '2027-07-28', name: 'kingBirthday', holiday: true },
  { date: '2027-08-12', name: 'motherDay', holiday: true },
  { date: '2027-10-13', name: 'rama9Memorial', holiday: true },
  { date: '2027-10-23', name: 'chulalongkorn', note: 'oct25', holiday: true },
  { date: '2027-12-05', name: 'fathersDay', note: 'dec6', holiday: true },
  { date: '2027-12-10', name: 'constitution', holiday: true },
  { date: '2027-12-31', name: 'newYearsEve', holiday: true },
];

export const CALENDAR_SOURCES = [
  { name: 'Ministry of Foreign Affairs: 2026 holidays', url: 'https://image.mfa.go.th/mfa/0/xzhwNrdFsC/Holiday_2026/Holiday_2026.pdf' },
  { name: 'Time Out Bangkok: 2027 public holidays', url: 'https://www.timeout.com/bangkok/news/the-thailand-2027-public-holidays-092326' },
  { name: 'Bank of Thailand: financial institution holidays', url: 'https://www.bot.or.th/en/financial-institutions-holiday.html' },
];

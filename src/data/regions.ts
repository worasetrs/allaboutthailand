export type Region = {
  slug: string;
  name: string;
  thai: string;
  intro: string;
  bestTime: string;
  gateways: string;
  places: { name: string; why: string }[];
  tips: string[];
};

export const REGIONS: Region[] = [
  {
    slug: 'bangkok',
    name: 'Bangkok',
    thai: 'กรุงเทพมหานคร',
    intro: 'The capital and the arrival point for most visitors: royal temples by the river, malls and markets, and some of the best street food in Asia.',
    bestTime: 'November to February. March to May is very hot.',
    gateways: 'Suvarnabhumi (BKK) and Don Mueang (DMK) airports. Krung Thep Aphiwat Central Terminal for long-distance trains.',
    places: [
      { name: 'Rattanakosin Island', why: 'The Grand Palace, Wat Pho and Wat Phra Kaew, a short walk apart.' },
      { name: 'Chao Phraya River', why: 'Ride the Chao Phraya Express Boat past Wat Arun for a few dozen baht.' },
      { name: 'Yaowarat (Chinatown)', why: 'Evening street food along Yaowarat Road.' },
      { name: 'Chatuchak Weekend Market', why: 'More than 10,000 stalls, open Saturday and Sunday.' },
    ],
    tips: [
      'Dress for temples: shoulders and knees covered. The Grand Palace enforces this at the gate.',
      'Use the BTS Skytrain and MRT to avoid traffic at rush hour.',
      'Ignore anyone who says the Grand Palace is closed today and offers a tuk-tuk tour. It is a well-known scam.',
    ],
  },
  {
    slug: 'north',
    name: 'North',
    thai: 'ภาคเหนือ',
    intro: 'Mountains, old Lanna temples, cooler nights and a slower pace. Chiang Mai is the base for most trips.',
    bestTime: 'November to February. February to April is burning season with poor air quality.',
    gateways: 'Chiang Mai (CNX) and Chiang Rai (CEI) airports. Overnight train from Bangkok to Chiang Mai.',
    places: [
      { name: 'Chiang Mai Old City', why: 'More than 30 temples inside the old moat, and the Sunday Walking Street.' },
      { name: 'Doi Suthep', why: 'Hilltop temple with views over Chiang Mai.' },
      { name: 'Chiang Rai', why: 'The White Temple (Wat Rong Khun) and the Blue Temple.' },
      { name: 'Pai', why: 'Mountain town reached by a road with 762 curves.' },
    ],
    tips: [
      'Check the AQI before visiting in March and April. Smoke from crop burning is often hazardous.',
      'Choose elephant sanctuaries that do not offer rides or shows.',
    ],
  },
  {
    slug: 'northeast',
    name: 'Northeast (Isan)',
    thai: 'ภาคอีสาน',
    intro: 'The largest and least-visited region: Khmer temple ruins, the Mekong River and the food that gave Thailand som tam and larb.',
    bestTime: 'November to February.',
    gateways: 'Udon Thani (UTH), Khon Kaen (KKC) and Ubon Ratchathani (UBP) airports.',
    places: [
      { name: 'Phanom Rung', why: 'An 11th-century Khmer temple on an extinct volcano in Buriram.' },
      { name: 'Khao Yai National Park', why: 'Wildlife, waterfalls and wineries about three hours from Bangkok.' },
      { name: 'Nong Khai', why: 'Mekong riverside town and Friendship Bridge to Laos.' },
    ],
    tips: ['English is less common. The phrases on the Essentials page help a lot here.'],
  },
  {
    slug: 'central',
    name: 'Central',
    thai: 'ภาคกลาง',
    intro: 'The historic heartland: former royal capitals, the River Kwai and floating markets within day-trip distance of Bangkok.',
    bestTime: 'November to February.',
    gateways: 'Trains and minivans from Bangkok.',
    places: [
      { name: 'Ayutthaya', why: 'UNESCO-listed ruins of the old capital, 80 km north of Bangkok.' },
      { name: 'Kanchanaburi', why: 'The Death Railway, the River Kwai bridge and Erawan Falls.' },
      { name: 'Sukhothai', why: 'The first Thai capital, best explored by bicycle.' },
    ],
    tips: ['Ayutthaya is an easy day trip by train from Krung Thep Aphiwat or Hua Lamphong.'],
  },
  {
    slug: 'east',
    name: 'East',
    thai: 'ภาคตะวันออก',
    intro: 'The closest beaches to Bangkok, from busy Pattaya to quiet islands near the Cambodian border.',
    bestTime: 'November to April.',
    gateways: 'U-Tapao (UTP) airport. Buses from Ekkamai and Suvarnabhumi.',
    places: [
      { name: 'Pattaya', why: 'Big resort city two hours from Bangkok.' },
      { name: 'Koh Samet', why: 'The nearest island beach to Bangkok.' },
      { name: 'Koh Chang', why: 'Jungle-covered island with long beaches.' },
    ],
    tips: ['Koh Samet charges a national park entry fee on arrival.'],
  },
  {
    slug: 'south',
    name: 'South',
    thai: 'ภาคใต้',
    intro: 'Two coasts with opposite weather: the Andaman Sea (Phuket, Krabi) and the Gulf of Thailand (Koh Samui, Koh Phangan, Koh Tao).',
    bestTime: 'Andaman coast: November to April. Gulf coast: January to September.',
    gateways: 'Phuket (HKT), Krabi (KBV), Samui (USM) and Surat Thani (URT) airports.',
    places: [
      { name: 'Phuket', why: 'Thailand’s largest island, with Old Town and many beaches.' },
      { name: 'Krabi and Railay', why: 'Limestone cliffs, rock climbing and island hopping.' },
      { name: 'Koh Samui and Koh Tao', why: 'Gulf islands. Koh Tao is a popular place to learn to dive.' },
    ],
    tips: [
      'Red flags on the Andaman beaches from May to October mean dangerous rip currents. Do not swim.',
      'Several governments advise against travel to Yala, Pattani, Narathiwat and parts of Songkhla. Check your own government’s advice.',
    ],
  },
];

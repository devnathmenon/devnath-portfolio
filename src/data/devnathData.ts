export interface Achievement {
  id: string;
  titleMl: string;
  titleEn: string;
  tournament: string;
  organizer: string;
  awardMl: string;
  awardEn: string;
  role: string;
  details: string;
  imgUrl?: string;
}

export interface Milestone {
  yearOrAge: string;
  titleMl: string;
  titleEn: string;
  team: string;
  description: string;
  badge: string;
  highlight?: boolean;
}

export const KERALA_PROFILE = {
  nameMl: "ദേവ്നാഥ് മേനോൻ",
  nameEn: "Devnath Menon",
  titleMl: "യു.എ.ഇ. യൂത്ത് ക്രിക്കറ്റ് നായകൻ & ഓൾറൗണ്ടർ",
  titleEn: "UAE Youth Cricket Captain & All-Rounder",
  heritageTag: "കേരളീയ പാരമ്പര്യം • തനിമയാർന്ന ക്രിക്കറ്റ് പ്രതിഭ",
  dob: "May 9",
  teams: [
    { nameMl: "ഡി.പി.എസ്. ഷാർജ", nameEn: "DPS Sharjah", role: "School Captain & Opening Batsman" },
    { nameMl: "ക്രിക്കറ്റ്സ് സ്‌പെറോ അക്കാദമി", nameEn: "Kricket's Spero Academy (Dubai)", role: "Academy Captain & #4 All-Rounder" },
    { nameMl: "യങ് ടാലന്റ് അക്കാദമി", nameEn: "Young Talent Academy", role: "Early Career (Trained from Age 6)" }
  ],
  coaches: [
    { name: "Vikram Dutt", role: "Head Coach, DPS Sharjah" },
    { name: "Sony Cheruvathur", role: "Head Coach, Kricket's Spero Academy" },
    { name: "L. Sivaramakrishnan", role: "Spin Mentor, Cricket Drome Chennai (Former Indian Leg-Spinner)" }
  ],
  idol: "Sachin Tendulkar",
  ambitionMl: "യു.എ.ഇ ദേശീയ ക്രിക്കറ്റ് ടീമിൽ കളിക്കുക എന്ന ലക്ഷ്യം",
  ambitionEn: "Represent UAE National Cricket Team across all age categories",
  quoteMl: "സ്കൂളിലും അക്കാദമിയിലും കഠിനാധ്വാനം ചെയ്തു കളിക്കുന്നു. എല്ലാ മത്സരങ്ങളിലും ക്രിക്കറ്റ് ദൈവമായ സച്ചിൻ ടെണ്ടുൽക്കറെ മാതൃകയാക്കി മുന്നേറുകയാണ് എൻ്റെ ലക്ഷ്യം.",
  quoteEn: "I train hard and play hard too. I idolise Sachin Tendulkar and follow his way of trying to improve with every match.",
  pressHeadline: "Devnath stands tall in school cricket scenario",
  pressAuthor: "K. R. Nayar, Chief Cricket Writer",
  gulfNewsUrl: "https://gulfnews.com/sport/devnath-stands-tall-in-school-cricket-scenario-1.1816908",
  cricinfoUrl: "https://www.espncricinfo.com/cricketers/devnath-menon-1258084"
};

export const KERALA_STATS = [
  {
    val: "12 Wkts",
    labelMl: "നാഷണൽ സ്കൂൾസ് ലീഗ് മികച്ച വിക്കറ്റ് വേട്ടക്കാരൻ",
    labelEn: "Leading Wicket-Taker in NSL",
    sub: "NSL Tournament Top Bowler"
  },
  {
    val: "U-16 Title",
    labelMl: "ശ്യാം ഭാട്ടിയ U-16 മികച്ച ബൗളർ & ട്രോഫി",
    labelEn: "Shyam Bhatia U-16 Best Bowler",
    sub: "Inter-Academy Championship"
  },
  {
    val: "Skyline Cup",
    labelMl: "സ്കൈലൈൻ യൂണിവേഴ്സിറ്റി ചാമ്പ്യൻ നായകൻ",
    labelEn: "Skyline University Cup Champion",
    sub: "DPS Sharjah School Title"
  },
  {
    val: "30 Days",
    labelMl: "ചെന്നൈ സ്പിൻ ട്രെയിനിങ് ക്യാമ്പ് (ശിവരാമകൃഷ്ണൻ)",
    labelEn: "Chennai Spin Camp under Sivaramakrishnan",
    sub: "Cricket Drome Chennai"
  }
];

export const KERALA_HERO_ASSETS = {
  mainVideo: "/assets/Dev_cricket.mp4",
  mainPortrait: "/assets/PHOTO-2026-06-18-18-12-57(4).jpg",
  trophyPic: "/assets/PHOTO-2026-06-18-18-03-11.jpg",
  spinPic: "/assets/PHOTO-2026-06-18-18-12-57(3).jpg"
};

export const KERALA_ACHIEVEMENTS: Achievement[] = [
  {
    id: "1",
    titleMl: "4-ാമത് ശ്യാം ഭാട്ടിയ ക്രിക്കറ്റ് ഫോർ കെയർ U-16 ടൂർണമെന്റ്",
    titleEn: "4th Shyam Bhatia Cricket for Care U-16 Tournament",
    tournament: "Inter-Academy Championship",
    organizer: "Dubai Cricket Council",
    awardMl: "മികച്ച ബൗളർ & ചാമ്പ്യൻ ട്രോഫി",
    awardEn: "Best Bowler of Tournament & Champion Trophy",
    role: "Captain (Kricket's Spero Academy)",
    details: "Captained Kricket's Spero Academy to championship victory and won the tournament's prestigious Best Bowler award.",
    imgUrl: "/assets/PHOTO-2026-06-18-18-03-11.jpg"
  },
  {
    id: "2",
    titleMl: "നാഷണൽ സ്കൂൾസ് ലീഗ് (NSL) ക്രിക്കറ്റ് ടൂർണമെന്റ്",
    titleEn: "National Schools League (NSL) Cricket",
    tournament: "NSL UAE Championship",
    organizer: "Sport360 / UAE Cricket",
    awardMl: "12 വിക്കറ്റ് & 2nd MVP (മികച്ച താരം)",
    awardEn: "Leading Wicket-Taker (12 Wkts) & 2nd MVP",
    role: "All-Rounder (DPS Sharjah)",
    details: "Top bowler of the tournament capturing 12 wickets, 2 Man of the Match awards, and 2nd Most Valuable Player overall.",
    imgUrl: "/assets/PHOTO-2026-06-18-18-03-11(1).jpg"
  },
  {
    id: "3",
    titleMl: "സ്കൈലൈൻ യൂണിവേഴ്സിറ്റി ഇന്റർ സ്കൂൾ ടൂർണമെന്റ്",
    titleEn: "Skyline University Inter-School Tournament",
    tournament: "Skyline Cup",
    organizer: "Skyline University College",
    awardMl: "തുടർച്ചയായ മാൻ ഓഫ് ദി മാച്ച് & വിജയികൾ",
    awardEn: "Multiple Man of the Match & Winner Trophy",
    role: "Captain & Opener (DPS Sharjah)",
    details: "Led DPS Sharjah to tournament victory with outstanding opening batting and tight off-spin bowling spells.",
    imgUrl: "/assets/PHOTO-2026-06-18-18-03-11(2).jpg"
  },
  {
    id: "4",
    titleMl: "MGS വിഷൻ കപ്പ് ഇന്റർ സ്കൂൾ ചാമ്പ്യൻഷിപ്പ്",
    titleEn: "MGS Vision Cup Inter-School Championship",
    tournament: "MGS Vision Cup",
    organizer: "Sharjah Cricket Council",
    awardMl: "റണ്ണേഴ്സ് അപ്പ് ട്രോഫി & ക്യാപ്റ്റൻസി",
    awardEn: "Runners-Up Trophy & Leadership",
    role: "Captain (DPS Sharjah)",
    details: "Guided school team to the final in Sharjah under Sharjah Cricket Council.",
    imgUrl: "/assets/PHOTO-2026-06-18-18-03-11(3).jpg"
  }
];

export const GALLERY_PHOTOS = [
  { url: "/assets/PHOTO-2026-06-18-18-12-57(4).jpg", captionMl: "നായകൻ ദേവ്നാഥ് മേനോൻ (Captain Devnath)", tag: "Captain" },
  { url: "/assets/PHOTO-2026-06-18-18-03-11.jpg", captionMl: "ട്രോഫിയുമായി ചാമ്പ്യൻ ടീം (U-16 Title Trophy)", tag: "Trophy" },
  { url: "/assets/PHOTO-2026-06-18-18-12-57(3).jpg", captionMl: "ഓഫ്-സ്പിൻ മികച്ച ബൗളിംഗ് സ്പെൽ (Spin Attack)", tag: "Bowling" },
  { url: "/assets/PHOTO-2026-06-18-18-03-11(1).jpg", captionMl: "ബാറ്റിംഗ് പ്രകടനം (Batting Performance)", tag: "Batting" },
  { url: "/assets/PHOTO-2026-06-18-18-12-57(2).jpg", captionMl: "മാൻ ഓഫ് ദി മാച്ച് പുരസ്കാരം (Match Winner)", tag: "Award" },
  { url: "/assets/PHOTO-2026-06-18-18-12-57.jpg", captionMl: "സ്കൂൾ ലീഗ് വിജയാഘോഷം (DPS Sharjah Victory)", tag: "Victory" },
  { url: "/assets/maxresdefault.jpg", captionMl: "ഗ്രൗണ്ടിലെ പോരാട്ടവീര്യം (Match Action)", tag: "Action" }
];

export const KERALA_TIMELINE: Milestone[] = [
  {
    yearOrAge: "6-ാം വയസ്സിൽ",
    titleMl: "യങ് ടാലന്റ് അക്കാദമിയിൽ തുടക്കം",
    titleEn: "Grassroots Foundation",
    team: "Young Talent Academy",
    description: "Started cricket coaching under Shehzad Altaf, forming strong batting and bowling technique.",
    badge: "ആരംഭം"
  },
  {
    yearOrAge: "10-ാം വയസ്സിൽ",
    titleMl: "അബുദാബിയിൽ ആദ്യ നേട്ടങ്ങൾ",
    titleEn: "First Major Silverware",
    team: "Young Talent Academy",
    description: "Won Best Batsman and 2x Man of the Match at Interface Gulf Cup in Abu Dhabi.",
    badge: "മികച്ച ബാറ്റ്സ്മാൻ"
  },
  {
    yearOrAge: "ചെന്നൈ ക്യാമ്പ്",
    titleMl: "ശിവരാമകൃഷ്ണന് കീഴിൽ സ്പിൻ പയറ്റി തെളിഞ്ഞ്",
    titleEn: "Specialist Spin Masterclass",
    team: "Cricket Drome, Chennai",
    description: "Trained for 30 days in Chennai under former Indian leg-spinner L. Sivaramakrishnan to perfect off-spin technique.",
    badge: "സ്പിൻ ക്യാമ്പ്",
    highlight: true
  },
  {
    yearOrAge: "NSL സീസൺ",
    titleMl: "12 വിക്കറ്റുകളോടെ ടോപ് ബൗളർ",
    titleEn: "NSL Wickets Leader",
    team: "DPS Sharjah",
    description: "Dominated the National Schools League as the leading wicket-taker with 12 wickets and 2nd MVP.",
    badge: "12 വിക്കറ്റ്"
  },
  {
    yearOrAge: "U-16 ചാമ്പ്യൻ",
    titleMl: "ഇരട്ട ക്യാപ്റ്റൻസിയും കിരീടധാരണവും",
    titleEn: "Dual Captaincy & U-16 Champion",
    team: "DPS Sharjah & Kricket's Spero",
    description: "Captained Kricket's Spero Academy to Shyam Bhatia U-16 title (Best Bowler award) and led DPS Sharjah to Skyline Cup.",
    badge: "ചാമ്പ്യൻ നായകൻ",
    highlight: true
  }
];

export const KERALA_WISHES = [
  { id: "1", name: "ഉണ്ണികൃഷ്ണൻ മേനോൻ", location: "തൃശ്ശൂർ, കേരളം (Thrissur)", comment: "ദേവ്നാഥ് മോന് എല്ലാവിധ ആശംസകളും! ഭാരതത്തിന്റെ കായിക പ്രതിഭയായി യു.എ.ഇയിൽ തിളങ്ങുന്നത് കാണുമ്പോൾ ഒത്തിരി സന്തോഷം.", time: "2 hrs ago", likes: 34 },
  { id: "2", name: "Suresh Nair", location: "Kochi, Kerala", comment: "Outstanding off-spin bowling and captaincy! Proud of your achievements at DPS Sharjah and Kricket's Spero.", time: "4 hrs ago", likes: 28 },
  { id: "3", name: "ആതിര പി.", location: "തിരുവനന്തപുരം (Trivandrum)", comment: "സച്ചിൻ ടെണ്ടുൽക്കറെ മാതൃകയാക്കിയുള്ള ഈ യാത്രയിൽ എല്ലാ വിജയങ്ങളും ഉണ്ടാകട്ടെ. ബിഗ് സല്യൂട്ട്!", time: "1 day ago", likes: 42 }
];

// ─── Images ──────────────────────────────────────────────────────────────────
export const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1632300951015-42d7df909581?w=1600&h=900&fit=crop&auto=format',
  heroAerial: 'https://images.unsplash.com/photo-1758304481749-56fe042af8ef?w=1600&h=900&fit=crop&auto=format',
  volunteer: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=900&h=600&fit=crop&auto=format',
  volunteerAlt: 'https://images.unsplash.com/photo-1628717341663-0007b0ee2597?w=900&h=600&fit=crop&auto=format',
  soccer: 'https://images.unsplash.com/photo-1544333323-ec9ed3218dd1?w=700&h=480&fit=crop&auto=format',
  soccerHero: 'https://images.unsplash.com/photo-1603291697926-7e5822ed1ac5?w=1200&h=600&fit=crop&auto=format',
  baseball: 'https://images.unsplash.com/photo-1490326149782-dd42fa59bd9f?w=700&h=480&fit=crop&auto=format',
  basketball: 'https://images.unsplash.com/photo-1597102522249-a45dd33e8855?w=700&h=480&fit=crop&auto=format',
  swim: 'https://images.unsplash.com/photo-1651614158095-b98b6c1da74b?w=700&h=480&fit=crop&auto=format',
  summerCamp: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=700&h=480&fit=crop&auto=format',
  tennis: 'https://images.unsplash.com/photo-1533222481259-ce20eda1e20b?w=700&h=480&fit=crop&auto=format',
  boardGroup: 'https://images.unsplash.com/photo-1545379537-5d1275c630fe?w=600&h=400&fit=crop&auto=format',
  newsTurf: 'https://images.unsplash.com/photo-1634241007705-b8bea7240837?w=800&h=500&fit=crop&auto=format',
  newsCamp: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=800&h=500&fit=crop&auto=format',
  newsVolunteer: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&h=500&fit=crop&auto=format',
  newsSoccer: 'https://images.unsplash.com/photo-1767902012345-bd31f0ba76d7?w=800&h=500&fit=crop&auto=format',
  newsSwim: 'https://images.unsplash.com/photo-1651614158095-b98b6c1da74b?w=800&h=500&fit=crop&auto=format',
  sportsComplex: 'https://images.unsplash.com/photo-1758304481804-bc6599801700?w=1200&h=700&fit=crop&auto=format',
}

// ─── Programs ─────────────────────────────────────────────────────────────────
export interface Program {
  id: string
  name: string
  img: string
  ageGroup: string
  sport: string
  season: string
  status: 'Open' | 'Closing Soon' | 'Full' | 'Coming Soon'
  description: string
  longDescription: string
  schedule: string
  location: string
  fee: string
  minAge: number
  maxAge: number
  coach: string
}

export const PROGRAMS: Program[] = [
  {
    id: 'youth-soccer',
    name: 'Youth Soccer',
    img: IMAGES.soccer,
    ageGroup: 'Youth (5–14)',
    sport: 'Soccer',
    season: 'Spring & Fall',
    status: 'Open',
    description: 'Develop skills, teamwork, and a love for the game in a fun, supportive environment.',
    longDescription: 'Our Youth Soccer program welcomes players of all skill levels. From beginner clinics to competitive travel leagues, we meet players where they are and help them grow. Coaches are background-checked and trained in positive youth development.',
    schedule: 'Saturdays 9:00 AM – 12:00 PM\nWeekday practice: Tue & Thu 5:00 PM – 7:00 PM',
    location: 'Greenfield Sports Complex — Field 1 & 2',
    fee: '$85 / season',
    minAge: 5,
    maxAge: 14,
    coach: 'Coach Marcus Rivera',
  },
  {
    id: 'little-league',
    name: 'Little League Baseball',
    img: IMAGES.baseball,
    ageGroup: 'Youth (6–16)',
    sport: 'Baseball',
    season: 'Spring',
    status: 'Open',
    description: "America's pastime, taught with patience and a whole lot of team spirit.",
    longDescription: 'Little League Baseball provides a structured, fun environment for young athletes to learn the fundamentals of baseball. Divisions are organized by age and skill, ensuring every player gets meaningful playing time.',
    schedule: 'Games: Saturdays & Sundays\nPractice: Mondays & Wednesdays 5:30 PM',
    location: 'Riverside Memorial Ballpark — Fields A & B',
    fee: '$75 / season',
    minAge: 6,
    maxAge: 16,
    coach: 'Coach Darnell Thompson',
  },
  {
    id: 'youth-basketball',
    name: 'Youth Basketball',
    img: IMAGES.basketball,
    ageGroup: 'Youth (7–15)',
    sport: 'Basketball',
    season: 'Winter',
    status: 'Closing Soon',
    description: 'From first dribbles to game-day strategy — our courts are where players shine.',
    longDescription: 'Youth Basketball teaches ball-handling, passing, shooting, and sportsmanship across five age-based divisions. Weekend leagues run January through March with playoff weekends that families love.',
    schedule: 'Games: Sundays 10:00 AM – 4:00 PM\nPractice: Fridays 5:00 PM – 7:00 PM',
    location: 'Riverside Community Gymnasium',
    fee: '$90 / season',
    minAge: 7,
    maxAge: 15,
    coach: 'Coach Angela Brooks',
  },
  {
    id: 'swim-lessons',
    name: 'Swim Lessons',
    img: IMAGES.swim,
    ageGroup: 'All Ages (3+)',
    sport: 'Swimming',
    season: 'Year-Round',
    status: 'Open',
    description: 'Group and private swim lessons for all ages and skill levels — from splash to stroke.',
    longDescription: 'Our certified swim instructors offer progressive levels from water acclimation to competitive strokes. Small class sizes ensure personalized attention. Session one begins in January and sessions run every six weeks throughout the year.',
    schedule: 'Mon / Wed / Fri — Multiple time slots\n7:00 AM · 10:00 AM · 4:30 PM · 6:00 PM',
    location: 'Riverside Aquatic Center — Indoor Pool',
    fee: 'From $120 / 8-week session',
    minAge: 3,
    maxAge: 99,
    coach: 'Head Instructor Lisa Nakamura',
  },
  {
    id: 'summer-camp',
    name: 'Summer Adventure Camp',
    img: IMAGES.summerCamp,
    ageGroup: 'Youth (6–12)',
    sport: 'Multi-Sport',
    season: 'Summer',
    status: 'Open',
    description: 'Eight weeks of outdoor adventures, STEM, arts, and sports — friends made for life.',
    longDescription: 'Summer Adventure Camp is our flagship program, running eight weeks from late June through mid-August. Campers rotate through outdoor sports, nature exploration, creative arts, and STEM activities. Extended care available.',
    schedule: 'Mon – Fri  7:30 AM – 5:30 PM\n(Extended care until 6:30 PM available)',
    location: 'Riverside Park & Recreation Center',
    fee: '$225 / week · Sibling discount available',
    minAge: 6,
    maxAge: 12,
    coach: 'Camp Director Priya Patel',
  },
  {
    id: 'tennis',
    name: 'Recreational Tennis',
    img: IMAGES.tennis,
    ageGroup: 'All Ages',
    sport: 'Tennis',
    season: 'Year-Round',
    status: 'Coming Soon',
    description: 'Clinics and open play for all skill levels. Rackets, coaching, and great company guaranteed.',
    longDescription: 'Whether you have never held a racket or you are a seasoned club player, our tennis program has a spot for you. Junior clinics, adult beginner lessons, league play, and social open courts are all on offer throughout the year.',
    schedule: 'Clinics: Saturdays 8:00 AM – 10:00 AM\nOpen Play: Daily 6:00 AM – 9:00 PM',
    location: 'Oak Park Tennis Complex — 8 Courts',
    fee: 'Clinics from $45 / 4-week block',
    minAge: 4,
    maxAge: 99,
    coach: 'Head Pro Jordan Walsh',
  },
]

// ─── Events ───────────────────────────────────────────────────────────────────
export interface Event {
  id: number
  month: string
  day: string
  title: string
  location: string
  time: string
  description: string
  tag: string
  tagColor: string
}

export const EVENTS: Event[] = [
  {
    id: 1,
    month: 'AUG',
    day: '17',
    title: 'Fall Season Registration Opens',
    location: 'Recreation Center — 400 Oak Ave',
    time: '9:00 AM – 5:00 PM',
    description: 'Register for fall soccer, flag football, and cross-country. Walk-ins welcome.',
    tag: 'Registration',
    tagColor: '#2563EB',
  },
  {
    id: 2,
    month: 'AUG',
    day: '24',
    title: 'Community Fun Run 5K',
    location: 'Riverside Park — Main Entrance',
    time: '8:00 AM Start',
    description: 'Lace up and join hundreds of neighbors for our annual community Fun Run. All paces welcome!',
    tag: 'Community',
    tagColor: '#F97316',
  },
  {
    id: 3,
    month: 'SEP',
    day: '07',
    title: 'Volunteer Orientation Night',
    location: 'Council HQ — Room 12',
    time: '6:30 PM – 8:00 PM',
    description: 'Meet our programs team, learn about coaching roles, and sign up for the season.',
    tag: 'Volunteer',
    tagColor: '#16A34A',
  },
  {
    id: 4,
    month: 'SEP',
    day: '14',
    title: 'Opening Day — Fall Soccer',
    location: 'Greenfield Sports Complex',
    time: 'All Day',
    description: 'Kick off the fall season with games across all age divisions. Food, music, and family fun.',
    tag: 'Sports',
    tagColor: '#2563EB',
  },
  {
    id: 5,
    month: 'SEP',
    day: '21',
    title: 'Board of Directors Meeting',
    location: 'Council HQ — Main Chamber',
    time: '7:00 PM',
    description: 'Public session — all community members are welcome to attend and observe.',
    tag: 'Governance',
    tagColor: '#7C3AED',
  },
]

// ─── News ─────────────────────────────────────────────────────────────────────
export interface NewsArticle {
  id: string
  date: string
  dateIso: string
  category: string
  title: string
  excerpt: string
  img: string
  featured?: boolean
  body?: string
}

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 'new-turf-field',
    date: 'August 5, 2026',
    dateIso: '2026-08-05',
    category: 'Announcement',
    title: 'New All-Weather Turf Field Coming to Riverside Park in 2027',
    excerpt: 'The Council secured $1.2M in county grants to fund a new artificial turf field, expanding year-round programming for over 800 registered athletes.',
    img: IMAGES.newsTurf,
    featured: true,
    body: 'After two years of planning and grant-writing, Riverside Recreation Council is thrilled to announce a $1.2 million county infrastructure grant to build a new all-weather artificial turf field at Riverside Park. Construction begins in March 2027, with an expected opening for the fall 2027 season.',
  },
  {
    id: 'summer-camp-2026',
    date: 'July 28, 2026',
    dateIso: '2026-07-28',
    category: 'Programs',
    title: 'Summer Camp 2026 Wraps Up Its Most Successful Season Ever',
    excerpt: 'Over 340 campers participated in eight weeks of outdoor adventures, STEM activities, and sports clinics. Read highlights from counselors and families.',
    img: IMAGES.newsCamp,
    body: 'Summer Camp 2026 welcomed 340 campers across eight weeks — a 22% increase over last year. Highlights included a new robotics track, an overnight camping night, and a final-week talent show that had families cheering.',
  },
  {
    id: 'volunteer-spotlight-maria',
    date: 'July 14, 2026',
    dateIso: '2026-07-14',
    category: 'Community',
    title: "Volunteer of the Month: Coach Maria Delgado",
    excerpt: "After six years coaching youth basketball, Maria's dedication to mentoring young athletes has made her an irreplaceable part of our community.",
    img: IMAGES.newsVolunteer,
    body: 'Coach Maria Delgado has been coaching Youth Basketball since 2020. In six seasons she has mentored over 200 young players, many of whom have gone on to compete at the high school level.',
  },
  {
    id: 'fall-soccer-preview',
    date: 'July 7, 2026',
    dateIso: '2026-07-07',
    category: 'Sports',
    title: 'Fall Soccer Season Preview: What to Expect',
    excerpt: 'With registration numbers at an all-time high, the fall soccer season is shaping up to be the biggest in council history. Here is everything families need to know.',
    img: IMAGES.newsSoccer,
  },
  {
    id: 'swim-lessons-expansion',
    date: 'June 22, 2026',
    dateIso: '2026-06-22',
    category: 'Programs',
    title: 'Swim Lessons Expand to Saturday Mornings',
    excerpt: 'By popular request, swim lessons are now available on Saturday mornings beginning September. Register early — space is limited.',
    img: IMAGES.newsSwim,
  },
]

// ─── Board Members ─────────────────────────────────────────────────────────────
export const BOARD_MEMBERS = [
  { name: 'Sandra Hollis', title: 'President', initials: 'SH', color: '#2563EB' },
  { name: 'Raymond Ortiz', title: 'Vice President', initials: 'RO', color: '#16A34A' },
  { name: 'Keiko Tanaka', title: 'Treasurer', initials: 'KT', color: '#F97316' },
  { name: 'David Chen', title: 'Secretary', initials: 'DC', color: '#7C3AED' },
  { name: 'Maria Delgado', title: 'Programs Director', initials: 'MD', color: '#2563EB' },
  { name: 'James Okoye', title: 'Facilities Director', initials: 'JO', color: '#16A34A' },
]

// ─── FAQ ──────────────────────────────────────────────────────────────────────
export const FAQ = [
  {
    q: 'How do I register for a program?',
    a: 'Click "Register" in the top navigation bar, choose your program, and complete the online registration form. Payment is accepted via credit card or check at the Recreation Center office.',
  },
  {
    q: 'What is your refund policy?',
    a: 'Full refunds are available up to 14 days before the program start date. Refunds within 14 days are issued as credit toward future programs. No refunds after the season begins.',
  },
  {
    q: 'How can I become a volunteer coach?',
    a: 'Visit the Volunteer section, complete the interest form, and attend an orientation session. All coaches must pass a background check and complete a short safety training before their first practice.',
  },
  {
    q: 'Are financial assistance programs available?',
    a: 'Yes. The Riverside Recreation Scholarship Fund offers partial and full fee waivers for qualifying families. Contact our office to request a confidential application.',
  },
  {
    q: 'Can my child participate if they have never played before?',
    a: 'Absolutely. All our youth programs welcome first-timers. Coaches are trained to work with beginners, and we group players by age and experience wherever possible.',
  },
]

// ─── Sponsors ─────────────────────────────────────────────────────────────────
export const SPONSORS = [
  { name: 'Riverside Bank', abbr: 'RB', color: '#2563EB' },
  { name: 'Greenfield Hardware', abbr: 'GH', color: '#16A34A' },
  { name: 'Peak Physical Therapy', abbr: 'PPT', color: '#F97316' },
  { name: 'Oakwood Pediatrics', abbr: 'OP', color: '#2563EB' },
  { name: 'Sunrise Insurance', abbr: 'SI', color: '#16A34A' },
  { name: "Tony's Pizza & Grill", abbr: 'TPG', color: '#F97316' },
  { name: 'Valley Dental Group', abbr: 'VDG', color: '#7C3AED' },
  { name: 'Riverside Printing Co.', abbr: 'RPC', color: '#2563EB' },
]

import { IMAGES } from '../constants/images';

export { IMAGES } from '../constants/images';

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
    location: 'Pennsbury Park — Main Entrance',
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
    title: 'New All-Weather Turf Field Coming to Pennsbury Park in 2027',
    excerpt: 'The Council secured $1.2M in county grants to fund a new artificial turf field, expanding year-round programming for over 800 registered athletes.',
    img: IMAGES.newsTurf,
    featured: true,
    body: 'After two years of planning and grant-writing, Pennsbury Recreation Council is thrilled to announce a $1.2 million county infrastructure grant to build a new all-weather artificial turf field at Pennsbury Park. Construction begins in March 2027, with an expected opening for the fall 2027 season.',
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
    a: 'Yes. The Pennsbury Recreation Scholarship Fund offers partial and full fee waivers for qualifying families. Contact our office to request a confidential application.',
  },
  {
    q: 'Can my child participate if they have never played before?',
    a: 'Absolutely. All our youth programs welcome first-timers. Coaches are trained to work with beginners, and we group players by age and experience wherever possible.',
  },
]

// ─── Sponsors ─────────────────────────────────────────────────────────────────
export const SPONSORS = [
  { name: 'Pennsbury Bank', abbr: 'RB', color: '#2563EB' },
  { name: 'Greenfield Hardware', abbr: 'GH', color: '#16A34A' },
  { name: 'Peak Physical Therapy', abbr: 'PPT', color: '#F97316' },
  { name: 'Oakwood Pediatrics', abbr: 'OP', color: '#2563EB' },
  { name: 'Sunrise Insurance', abbr: 'SI', color: '#16A34A' },
  { name: "Tony's Pizza & Grill", abbr: 'TPG', color: '#F97316' },
  { name: 'Valley Dental Group', abbr: 'VDG', color: '#7C3AED' },
  { name: 'Pennsbury Printing Co.', abbr: 'RPC', color: '#2563EB' },
]

import type { FaqItem } from '../../../shared/components/faq-accordion/faq-accordion.component';
import type {
  AboutBoardMember,
  AboutCtaContent,
  AboutFaqContent,
  AboutHeroContent,
  AboutHistoryContent,
  AboutMissionContent,
  AboutTimelineItem
} from '../models/about.model';

export const ABOUT_HERO: AboutHeroContent = {
  heading: 'About Us',
  subtitle: 'Serving Riverside families for over 30 years',
  imageUrl: 'assets/images/hero/home-photo-1632300951015-42d7df909581.jpeg',
  breadcrumbs: [
    { label: 'Home', route: ['/'] },
    { label: 'About' }
  ]
};

export const ABOUT_MISSION: AboutMissionContent = {
  eyebrow: 'Our Mission',
  headingLine1: 'Recreation for',
  headingLine2: 'Every Riverside Resident',
  paragraphs: [
    'The Riverside Recreation Council is a nonprofit organization dedicated to enriching community life by providing accessible, high-quality recreational programs for children, adults, and seniors.',
    'We believe that physical activity, creative play, and community connection are essential to a healthy and vibrant city. Our programs are designed to be inclusive, affordable, and welcoming to every family regardless of background or ability.'
  ],
  imageUrl: 'assets/images/hero/volunteer-placeholder.svg',
  imageAlt: 'Volunteer helping at a community event'
};

export const ABOUT_HISTORY: AboutHistoryContent = {
  eyebrow: 'Our History',
  heading: 'Three Decades of Community',
  summary:
    'Founded in 1994 by a small group of parents and coaches, Riverside Recreation Council started with a single youth soccer league and 48 registered players. Today we run 18 programs and serve over 2,400 participants each year.'
};

export const ABOUT_TIMELINE: AboutTimelineItem[] = [
  { year: '1994', event: 'Founded with one soccer league and 48 players.' },
  { year: '2001', event: 'Opened Riverside Aquatic Center and launched swim lessons.' },
  { year: '2008', event: 'Reached 1,000 registered participants for the first time.' },
  { year: '2015', event: 'Launched Summer Adventure Camp with 80 campers in the first season.' },
  { year: '2022', event: 'Secured $800K grant for new Greenfield Sports Complex lighting.' },
  { year: '2026', event: '$1.2M turf field grant announced. 2,400+ athletes enrolled.' }
];

export const ABOUT_BOARD_MEMBERS: AboutBoardMember[] = [
  {
    id: 'sandra-hollis',
    name: 'Sandra Hollis',
    title: 'President',
    initials: 'SH',
    color: '#2563EB'
  },
  {
    id: 'raymond-ortiz',
    name: 'Raymond Ortiz',
    title: 'Vice President',
    initials: 'RO',
    color: '#16A34A'
  },
  {
    id: 'keiko-tanaka',
    name: 'Keiko Tanaka',
    title: 'Treasurer',
    initials: 'KT',
    color: '#F97316'
  },
  {
    id: 'david-chen',
    name: 'David Chen',
    title: 'Secretary',
    initials: 'DC',
    color: '#7C3AED'
  },
  {
    id: 'maria-delgado',
    name: 'Maria Delgado',
    title: 'Programs Director',
    initials: 'MD',
    color: '#2563EB'
  },
  {
    id: 'james-okoye',
    name: 'James Okoye',
    title: 'Facilities Director',
    initials: 'JO',
    color: '#16A34A'
  }
];

export const ABOUT_FAQ_CONTENT: AboutFaqContent = {
  eyebrow: 'FAQ',
  heading: 'Frequently Asked Questions'
};

export const ABOUT_FAQ_ITEMS: FaqItem[] = [
  {
    q: 'How do I register for a program?',
    a: 'Click "Register" in the top navigation bar, choose your program, and complete the online registration form. Payment is accepted via credit card or check at the Recreation Center office.'
  },
  {
    q: 'What is your refund policy?',
    a: 'Full refunds are available up to 14 days before the program start date. Refunds within 14 days are issued as credit toward future programs. No refunds after the season begins.'
  },
  {
    q: 'How can I become a volunteer coach?',
    a: 'Visit the Volunteer section, complete the interest form, and attend an orientation session. All coaches must pass a background check and complete a short safety training before their first practice.'
  },
  {
    q: 'Are financial assistance programs available?',
    a: 'Yes. The Pennsbury Recreation Scholarship Fund offers partial and full fee waivers for qualifying families. Contact our office to request a confidential application.'
  },
  {
    q: 'Can my child participate if they have never played before?',
    a: 'Absolutely. All our youth programs welcome first-timers. Coaches are trained to work with beginners, and we group players by age and experience wherever possible.'
  }
];

export const ABOUT_CTA: AboutCtaContent = {
  heading: 'Ready to Get Involved?',
  body: "Browse our programs, register your family, or reach out - we'd love to hear from you.",
  primaryLabel: 'Browse Programs',
  primaryRoute: ['/programs'],
  secondaryLabel: 'Contact Us',
  secondaryRoute: ['/contact']
};
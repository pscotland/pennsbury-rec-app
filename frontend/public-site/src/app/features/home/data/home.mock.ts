import { Event } from '../../../core/models/event.model';
import { Sponsor } from '../../../core/models/sponsor.model';

export interface HomeStat {
  value: string;
  label: string;
}

export interface HomeHeroContent {
  badge: string;
  heading: string;
  headingAccent: string;
  subtitle: string;
  imageUrl: string;
}

export interface HomeVolunteerContent {
  imageUrl: string;
  imageAlt: string;
  headingLine1: string;
  headingLine2: string;
  body: string;
  opportunities: string[];
  statTitle: string;
  statText: string;
}

export interface HomeContactItem {
  icon: string;
  label: string;
  value: string;
  iconColor: string;
}

export const HOME_HERO: HomeHeroContent = {
  badge: 'Riverside Recreation Council',
  heading: 'Where Every Family',
  headingAccent: 'Belongs',
  subtitle:
    'Connecting Riverside families through quality recreational programs, sports leagues, and community events for all ages and skill levels.',
  imageUrl: 'assets/images/hero/home-photo-1632300951015-42d7df909581.jpeg'
};

export const HOME_STATS: HomeStat[] = [
  { value: '2,400+', label: 'Registered Athletes' },
  { value: '18', label: 'Programs' },
  { value: '340+', label: 'Volunteers' },
  { value: '30 yrs', label: 'Serving Riverside' }
];

export const HOME_EVENTS: Event[] = [
  {
    id: 'fall-registration-2026',
    title: 'Fall Season Registration Opens',
    description: 'Register for fall soccer, flag football, and cross-country. Walk-ins welcome.',
    startDate: '2026-08-17',
    time: '9:00 AM - 5:00 PM',
    location: 'Recreation Center - 400 Oak Ave',
    tags: [{ label: 'Registration', color: '#2563EB' }]
  },
  {
    id: 'fun-run-5k-2026',
    title: 'Community Fun Run 5K',
    description:
      'Lace up and join hundreds of neighbors for our annual community Fun Run. All paces welcome.',
    startDate: '2026-08-24',
    time: '8:00 AM Start',
    location: 'Riverside Park - Main Entrance',
    tags: [{ label: 'Community', color: '#F97316' }]
  },
  {
    id: 'volunteer-orientation-2026',
    title: 'Volunteer Orientation Night',
    description: 'Meet our programs team, learn about coaching roles, and sign up for the season.',
    startDate: '2026-09-07',
    time: '6:30 PM - 8:00 PM',
    location: 'Council HQ - Room 12',
    tags: [{ label: 'Volunteer', color: '#16A34A' }]
  }
];

export const HOME_VOLUNTEER: HomeVolunteerContent = {
  imageUrl: 'assets/images/hero/volunteer-placeholder.svg',
  imageAlt: 'Community volunteers at a Riverside recreation event',
  headingLine1: 'Be the Reason',
  headingLine2: 'Kids Show Up',
  body:
    'Our programs thrive because of community members who give their time as coaches, field marshals, and event helpers. No experience necessary - just enthusiasm and heart.',
  opportunities: [
    'Coach or assistant coach a youth team',
    'Help at registration and events',
    'Join our Board of Directors',
    'Mentor young athletes after school'
  ],
  statTitle: '340+ Active Volunteers',
  statText: 'Giving 12,000+ hours each year'
};

export const HOME_SPONSORS: Sponsor[] = [
  { id: 'riverside-bank', name: 'Riverside Bank', color: '#2563EB', abbreviation: 'RB' },
  { id: 'greenfield-hardware', name: 'Greenfield Hardware', color: '#16A34A', abbreviation: 'GH' },
  { id: 'peak-physical-therapy', name: 'Peak Physical Therapy', color: '#F97316', abbreviation: 'PPT' },
  { id: 'oakwood-pediatrics', name: 'Oakwood Pediatrics', color: '#2563EB', abbreviation: 'OP' },
  { id: 'sunrise-insurance', name: 'Sunrise Insurance', color: '#16A34A', abbreviation: 'SI' },
  { id: 'tonys-pizza-grill', name: "Tony's Pizza & Grill", color: '#F97316', abbreviation: 'TPG' },
  { id: 'valley-dental-group', name: 'Valley Dental Group', color: '#7C3AED', abbreviation: 'VDG' },
  { id: 'riverside-printing', name: 'Riverside Printing Co.', color: '#2563EB', abbreviation: 'RPC' }
];

export const HOME_CONTACT_ITEMS: HomeContactItem[] = [
  {
    icon: 'pi-map-marker',
    label: 'Address',
    value: '400 Oak Avenue, Riverside, CA 92501',
    iconColor: '#2563EB'
  },
  {
    icon: 'pi-phone',
    label: 'Phone',
    value: '(951) 555-0182',
    iconColor: '#16A34A'
  },
  {
    icon: 'pi-envelope',
    label: 'Email',
    value: 'info@riversiderec.org',
    iconColor: '#F97316'
  },
  {
    icon: 'pi-clock',
    label: 'Office Hours',
    value: 'Mon-Fri 8AM-6PM | Sat 9AM-2PM',
    iconColor: '#7C3AED'
  }
];

export const HOME_MAP_ADDRESS = '400 Oak Avenue, Riverside CA 92501';
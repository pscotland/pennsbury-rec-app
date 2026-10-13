import { IMAGES } from '../../../core/models';

export const PROGRAM_AGE_OPTIONS = [
  'All Ages',
  'Youth (5–14)',
  'Youth (6–16)',
  'Youth (7–15)',
  'All Ages (3+)',
  'Youth (6–12)'
] as const;

export const PROGRAM_SPORT_OPTIONS = [
  'All Sports',
  'Soccer',
  'Baseball',
  'Basketball',
  'Swimming',
  'Multi-Sport',
  'Tennis'
] as const;

export const PROGRAM_SEASON_OPTIONS = [
  'All Seasons',
  'Spring',
  'Spring & Fall',
  'Summer',
  'Winter',
  'Year-Round'
] as const;

export const PROGRAMS_HERO = {
  imageUrl: IMAGES.heroAerial,
  heading: 'Programs',
  subtitle: 'Find the right program for every age and season',
  breadcrumbs: [
    { label: 'Home', route: ['/'] },
    { label: 'Programs' }
  ]
};

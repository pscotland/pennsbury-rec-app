import { IMAGES } from '../../../core/models';
import { Program } from '../models/program.model';

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
    location: 'Pennsbury Memorial Ballpark — Fields A & B',
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
    location: 'Pennsbury Community Gymnasium',
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
    location: 'Pennsbury Aquatic Center — Indoor Pool',
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
    location: 'Pennsbury Park & Recreation Center',
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
];

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

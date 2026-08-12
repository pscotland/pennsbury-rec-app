import type { BreadcrumbItem } from '../../../shared/components/breadcrumb/breadcrumb.component';

export interface AboutHeroContent {
  heading: string;
  subtitle: string;
  imageUrl: string;
  breadcrumbs: BreadcrumbItem[];
}

export interface AboutMissionContent {
  eyebrow: string;
  headingLine1: string;
  headingLine2: string;
  paragraphs: string[];
  imageUrl: string;
  imageAlt: string;
}

export interface AboutHistoryContent {
  eyebrow: string;
  heading: string;
  summary: string;
}

export interface AboutTimelineItem {
  year: string;
  event: string;
}

export interface AboutBoardMember {
  id: string;
  name: string;
  title: string;
  initials: string;
  color: string;
}

export interface AboutFaqContent {
  eyebrow: string;
  heading: string;
}

export interface AboutCtaContent {
  heading: string;
  body: string;
  primaryLabel: string;
  primaryRoute: string[];
  secondaryLabel: string;
  secondaryRoute: string[];
}
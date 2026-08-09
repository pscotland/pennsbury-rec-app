export interface PublicNavItem {
  label: string;
  commands: readonly string[];
  exact?: boolean;
}

export const PUBLIC_ROUTE_SEGMENTS = {
  home: '',
  about: 'about',
  programs: 'programs',
  news: 'news',
  contact: 'contact',
  adminLogin: 'admin-login'
} as const;

export const PUBLIC_PRIMARY_NAV: readonly PublicNavItem[] = [
  { label: 'Home', commands: ['/'], exact: true },
  { label: 'About', commands: ['/', PUBLIC_ROUTE_SEGMENTS.about] },
  { label: 'Programs', commands: ['/', PUBLIC_ROUTE_SEGMENTS.programs] },
  { label: 'News', commands: ['/', PUBLIC_ROUTE_SEGMENTS.news] },
  { label: 'Contact', commands: ['/', PUBLIC_ROUTE_SEGMENTS.contact] }
];

export const PUBLIC_ACTION_LINKS = {
  register: ['/', PUBLIC_ROUTE_SEGMENTS.programs] as const,
  adminLogin: ['/', PUBLIC_ROUTE_SEGMENTS.adminLogin] as const
};

export type NewsCategory = 'Announcement' | 'Programs' | 'Community' | 'Sports';

export interface Announcement {
  id: string;
  title: string;
  summary: string;
  publishedAt: string;
  isFeatured: boolean;
  category?: NewsCategory;
  imageUrl?: string;
  bodyPreview?: string;
}

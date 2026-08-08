export type ProgramStatus = 'Open' | 'Closing Soon' | 'Full' | 'Coming Soon';

export interface Program {
  id: string;
  name: string;
  description: string;
  season: string;
  registrationOpen: boolean;
  status: ProgramStatus;
  imageUrl?: string;
  ageGroup?: string;
  tags?: string[];
}

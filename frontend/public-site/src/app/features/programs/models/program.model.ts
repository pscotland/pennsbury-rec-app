export type ProgramStatus = 'Open' | 'Closing Soon' | 'Full' | 'Coming Soon';

export interface Program {
  id: string;
  name: string;
  img: string;
  imageUrl?: string;
  ageGroup: string;
  sport: string;
  season: string;
  status: ProgramStatus;
  description: string;
  longDescription: string;
  schedule: string;
  location: string;
  fee: string;
  minAge: number;
  maxAge: number;
  coach: string;
  registrationOpen?: boolean;
  tags?: string[];
}

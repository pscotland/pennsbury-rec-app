export interface EventTag {
  label: string;
  color: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  startDate: string;
  time?: string;
  location: string;
  tags?: EventTag[];
}

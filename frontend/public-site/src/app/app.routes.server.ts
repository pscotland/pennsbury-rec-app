import { RenderMode, ServerRoute } from '@angular/ssr';
import { PROGRAMS } from './features/programs/data/programs.mock';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'programs/:id',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return PROGRAMS.map((p) => ({ id: p.id }));
    }
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];


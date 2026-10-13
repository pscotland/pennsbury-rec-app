import { RenderMode, ServerRoute } from '@angular/ssr';
import { PROGRAMS } from './core/models';

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


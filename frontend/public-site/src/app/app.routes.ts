import { Routes } from '@angular/router';
import { PublicLayoutComponent } from './layouts/public-layout/public-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./features/home/home.component').then((m) => m.HomeComponent)
      },
      {
        path: 'about',
        loadComponent: () => import('./features/about/about.component').then((m) => m.AboutComponent)
      },
      {
        path: 'programs',
        loadComponent: () => import('./features/programs/programs.component').then((m) => m.ProgramsComponent)
      },
      {
        path: 'news',
        loadComponent: () => import('./features/news/news.component').then((m) => m.NewsComponent)
      },
      {
        path: 'contact',
        loadComponent: () => import('./features/contact/contact.component').then((m) => m.ContactComponent)
      }
    ]
  }
];

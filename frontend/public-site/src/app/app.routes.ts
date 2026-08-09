import { Routes } from '@angular/router';
import { PublicLayoutComponent } from './layouts/public-layout/public-layout.component';
import { PUBLIC_ROUTE_SEGMENTS } from './core/constants/public-navigation.constants';

export const routes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      {
        path: PUBLIC_ROUTE_SEGMENTS.home,
        loadComponent: () => import('./features/home/home.component').then((m) => m.HomeComponent)
      },
      {
        path: PUBLIC_ROUTE_SEGMENTS.about,
        loadComponent: () => import('./features/about/about.component').then((m) => m.AboutComponent)
      },
      {
        path: PUBLIC_ROUTE_SEGMENTS.programs,
        loadComponent: () => import('./features/programs/programs.component').then((m) => m.ProgramsComponent)
      },
      {
        path: PUBLIC_ROUTE_SEGMENTS.news,
        loadComponent: () => import('./features/news/news.component').then((m) => m.NewsComponent)
      },
      {
        path: PUBLIC_ROUTE_SEGMENTS.contact,
        loadComponent: () => import('./features/contact/contact.component').then((m) => m.ContactComponent)
      }
    ]
  }
];

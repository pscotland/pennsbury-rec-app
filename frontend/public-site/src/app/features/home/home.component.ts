import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { UpcomingEventsComponent } from './components/upcoming-events/upcoming-events.component';
import { VolunteerComponent } from './components/volunteer/volunteer.component';
import { SponsorsComponent } from './components/sponsors/sponsors.component';
import { ContactPreviewComponent } from './components/contact-preview/contact-preview.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    UpcomingEventsComponent,
    VolunteerComponent,
    SponsorsComponent,
    ContactPreviewComponent
  ],
  template: `
    <section>
      <app-hero></app-hero>
      <app-upcoming-events></app-upcoming-events>
      <app-volunteer></app-volunteer>
      <app-sponsors></app-sponsors>
      <app-contact-preview></app-contact-preview>
    </section>
  `,
  styles: []
})
export class HomeComponent {}

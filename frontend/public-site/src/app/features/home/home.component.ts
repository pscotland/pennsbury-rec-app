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
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {}

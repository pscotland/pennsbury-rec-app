import { Component } from '@angular/core';
import { AboutBoardComponent } from './components/about-board/about-board.component';
import { AboutCtaComponent } from './components/about-cta/about-cta.component';
import { AboutFaqComponent } from './components/about-faq/about-faq.component';
import { AboutHeroComponent } from './components/about-hero/about-hero.component';
import { AboutHistoryComponent } from './components/about-history/about-history.component';
import { AboutMissionComponent } from './components/about-mission/about-mission.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    AboutHeroComponent,
    AboutMissionComponent,
    AboutHistoryComponent,
    AboutBoardComponent,
    AboutFaqComponent,
    AboutCtaComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {}

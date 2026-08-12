import { Component, inject } from '@angular/core';
import { PageHeroComponent } from '../../../../shared/components/page-hero/page-hero.component';
import { AboutService } from '../../services/about.service';

@Component({
  selector: 'app-about-hero',
  standalone: true,
  imports: [PageHeroComponent],
  templateUrl: './about-hero.component.html',
  styleUrl: './about-hero.component.scss'
})
export class AboutHeroComponent {
  private readonly aboutService = inject(AboutService);

  protected readonly hero = this.aboutService.hero;
}
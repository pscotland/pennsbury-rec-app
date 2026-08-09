import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AppButtonComponent } from '../../../../shared/components/app-button/app-button.component';
import { StatTickerComponent } from '../../../../shared/components/stat-ticker/stat-ticker.component';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [AppButtonComponent, StatTickerComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent {
  private readonly homeService = inject(HomeService);

  protected readonly hero = this.homeService.hero;
  protected readonly stats = this.homeService.stats;
  protected readonly programsRoute = ['/programs'];
  protected readonly contactRoute = ['/contact'];
}

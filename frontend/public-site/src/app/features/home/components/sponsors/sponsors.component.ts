import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { SponsorCardComponent } from '../../../../shared/cards/sponsor-card/sponsor-card.component';
import { EmptyStateComponent } from '../../../../shared/components/empty-state/empty-state.component';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-sponsors',
  standalone: true,
  imports: [SponsorCardComponent, EmptyStateComponent],
  templateUrl: './sponsors.component.html',
  styleUrl: './sponsors.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SponsorsComponent {
  private readonly homeService = inject(HomeService);

  protected readonly sponsors = this.homeService.sponsors;
  protected readonly isLoading = this.homeService.isLoading;
  protected readonly hasSponsors = computed(() => this.sponsors().length > 0);
}

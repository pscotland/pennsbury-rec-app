import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { EventCardComponent } from '../../../../shared/cards/event-card/event-card.component';
import { EmptyStateComponent } from '../../../../shared/components/empty-state/empty-state.component';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-upcoming-events',
  standalone: true,
  imports: [SectionHeaderComponent, EventCardComponent, EmptyStateComponent],
  templateUrl: './upcoming-events.component.html',
  styleUrl: './upcoming-events.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UpcomingEventsComponent {
  private readonly homeService = inject(HomeService);

  protected readonly events = this.homeService.upcomingEvents;
  protected readonly isLoading = this.homeService.isLoading;
  protected readonly hasEvents = computed(() => this.events().length > 0);
}

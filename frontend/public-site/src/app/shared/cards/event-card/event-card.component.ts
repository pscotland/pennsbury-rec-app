import { Component, input, computed } from '@angular/core';
import { Event } from '../../../core/models/event.model';
import { AppBadgeComponent } from '../../components/app-badge/app-badge.component';

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [AppBadgeComponent],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.scss'
})
export class EventCardComponent {
  readonly event = input.required<Event>();

  protected readonly parsedDate = computed(() => new Date(this.event().startDate));
  protected readonly monthLabel = computed(() =>
    this.parsedDate().toLocaleString('en-US', { month: 'short' }).toUpperCase()
  );
  protected readonly dayLabel = computed(() => this.parsedDate().getDate().toString());
}

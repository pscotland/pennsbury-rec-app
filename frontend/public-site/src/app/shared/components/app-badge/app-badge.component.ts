import { Component, input, computed } from '@angular/core';
import { TagModule } from 'primeng/tag';

export type BadgeType = 'status' | 'category' | 'label' | 'event-tag';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [TagModule],
  templateUrl: './app-badge.component.html',
  styleUrl: './app-badge.component.scss'
})
export class AppBadgeComponent {
  readonly type = input<BadgeType>('label');
  readonly value = input.required<string>();

  protected readonly slug = computed(() =>
    this.value().toLowerCase().replace(/\s+/g, '-')
  );
}

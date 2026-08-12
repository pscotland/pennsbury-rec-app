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
  readonly color = input<string | null>(null);

  protected readonly slug = computed(() =>
    this.value().toLowerCase().replace(/\s+/g, '-')
  );

  protected readonly eventTagBackground = computed(() => {
    if (this.type() !== 'event-tag' || !this.color()) {
      return null;
    }

    return this.toAlphaColor(this.color()!, 0.16);
  });

  protected readonly eventTagColor = computed(() => {
    if (this.type() !== 'event-tag' || !this.color()) {
      return null;
    }

    return this.color();
  });

  private toAlphaColor(hex: string, alpha: number): string {
    const normalized = hex.trim().replace('#', '');
    const isShortHex = normalized.length === 3;
    const isLongHex = normalized.length === 6;

    if (!isShortHex && !isLongHex) {
      return hex;
    }

    const expanded = isShortHex
      ? normalized.split('').map((ch) => ch + ch).join('')
      : normalized;

    const r = Number.parseInt(expanded.slice(0, 2), 16);
    const g = Number.parseInt(expanded.slice(2, 4), 16);
    const b = Number.parseInt(expanded.slice(4, 6), 16);

    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
}

import { Component, input, computed } from '@angular/core';
import { Sponsor } from '../../../core/models/sponsor.model';

@Component({
  selector: 'app-sponsor-card',
  standalone: true,
  templateUrl: './sponsor-card.component.html',
  styleUrl: './sponsor-card.component.scss'
})
export class SponsorCardComponent {
  readonly sponsor = input.required<Sponsor>();

  protected readonly abbr = computed(() => {
    const custom = this.sponsor().abbreviation;
    if (custom) return custom;
    return this.sponsor().name
      .split(' ')
      .map((w) => w[0])
      .join('')
      .slice(0, 3)
      .toUpperCase();
  });

  protected readonly color = computed(() => this.sponsor().color ?? '#2563eb');
}

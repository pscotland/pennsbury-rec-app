import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppBadgeComponent } from '../app-badge/app-badge.component';

@Component({
  selector: 'app-section-header',
  standalone: true,
  imports: [RouterLink, AppBadgeComponent],
  templateUrl: './section-header.component.html',
  styleUrl: './section-header.component.scss'
})
export class SectionHeaderComponent {
  readonly eyebrow = input<string | null>(null);
  readonly heading = input.required<string>();
  readonly sub = input<string | null>(null);
  readonly ctaLabel = input<string | null>(null);
  readonly ctaRoute = input<string[] | null>(null);
  readonly alignment = input<'left' | 'center'>('left');
}

import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppButtonComponent } from '../app-button/app-button.component';
import { StatTickerComponent, StatItem } from '../stat-ticker/stat-ticker.component';
import { BreadcrumbComponent, BreadcrumbItem } from '../breadcrumb/breadcrumb.component';

export interface HeroCta {
  label: string;
  route?: string[];
  href?: string;
  variant?: 'primary' | 'primary-hero' | 'ghost';
}

@Component({
  selector: 'app-page-hero',
  standalone: true,
  imports: [RouterLink, AppButtonComponent, StatTickerComponent, BreadcrumbComponent],
  templateUrl: './page-hero.component.html',
  styleUrl: './page-hero.component.scss'
})
export class PageHeroComponent {
  readonly variant = input<'home' | 'interior'>('interior');
  readonly imageUrl = input<string | null>(null);
  readonly heading = input.required<string>();
  readonly headingAccent = input<string | null>(null);
  readonly subtitle = input<string | null>(null);
  readonly ctaPrimary = input<HeroCta | null>(null);
  readonly ctaSecondary = input<HeroCta | null>(null);
  readonly stats = input<StatItem[]>([]);
  readonly breadcrumbs = input<BreadcrumbItem[]>([]);
  readonly badge = input<string | null>(null);
}

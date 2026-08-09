import { Component, input } from '@angular/core';

@Component({
  selector: 'app-empty-state',
  standalone: true,
  templateUrl: './empty-state.component.html',
  styleUrl: './empty-state.component.scss'
})
export class EmptyStateComponent {
  readonly emoji = input('🔍');
  readonly heading = input('No results found');
  readonly body = input<string | null>(null);
  readonly ctaLabel = input<string | null>(null);
  readonly ctaFn = input<(() => void) | null>(null);
}

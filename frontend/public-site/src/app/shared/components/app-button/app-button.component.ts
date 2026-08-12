import { Component, input, output, computed } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { RouterLink } from '@angular/router';

export type ButtonVariant =
  | 'primary'
  | 'primary-hero'
  | 'secondary'
  | 'ghost'
  | 'success'
  | 'outline'
  | 'link';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [RouterLink, NgTemplateOutlet],
  templateUrl: './app-button.component.html',
  styleUrl: './app-button.component.scss'
})
export class AppButtonComponent {
  readonly variant = input<ButtonVariant>('primary');
  readonly loading = input(false);
  readonly disabled = input(false);
  readonly type = input<'button' | 'submit' | 'reset'>('button');
  readonly routerLink = input<string[] | null>(null);
  readonly ariaLabel = input<string | null>(null);

  readonly clicked = output<MouseEvent>();

  protected readonly hostClass = computed(() => [
    'app-btn',
    `app-btn--${this.variant()}`
  ]);
}

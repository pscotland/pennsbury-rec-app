import { Component, input } from '@angular/core';

export interface StatItem {
  value: string;
  label: string;
}

@Component({
  selector: 'app-stat-ticker',
  standalone: true,
  templateUrl: './stat-ticker.component.html',
  styleUrl: './stat-ticker.component.scss'
})
export class StatTickerComponent {
  readonly stats = input<StatItem[]>([]);
}

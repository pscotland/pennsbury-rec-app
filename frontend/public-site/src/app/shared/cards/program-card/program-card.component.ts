import { Component, input, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Program } from '../../../core/models/program.model';
import { AppBadgeComponent } from '../../components/app-badge/app-badge.component';
import { AppButtonComponent } from '../../components/app-button/app-button.component';

@Component({
  selector: 'app-program-card',
  standalone: true,
  imports: [RouterLink, AppBadgeComponent, AppButtonComponent],
  templateUrl: './program-card.component.html',
  styleUrl: './program-card.component.scss'
})
export class ProgramCardComponent {
  readonly program = input.required<Program>();

  protected readonly detailRoute = computed(() => ['/programs', this.program().id]);
}

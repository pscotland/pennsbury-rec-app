import { Component, input, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Program } from '../../models/program.model';
import { AppBadgeComponent } from '../../../../shared/components/app-badge/app-badge.component';
import { AppButtonComponent } from '../../../../shared/components/app-button/app-button.component';

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

import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AppBadgeComponent } from '../../../../shared/components/app-badge/app-badge.component';
import { AppButtonComponent } from '../../../../shared/components/app-button/app-button.component';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-volunteer',
  standalone: true,
  imports: [AppBadgeComponent, AppButtonComponent],
  templateUrl: './volunteer.component.html',
  styleUrl: './volunteer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VolunteerComponent {
  private readonly homeService = inject(HomeService);

  protected readonly volunteer = this.homeService.volunteer;
  protected readonly contactRoute = ['/contact'];
}

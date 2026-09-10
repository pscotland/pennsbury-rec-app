import { Component, inject } from '@angular/core';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { AboutService } from '../../services/about.service';

@Component({
  selector: 'app-about-mission',
  standalone: true,
  imports: [SectionHeaderComponent],
  templateUrl: './about-mission.component.html',
  styleUrl: './about-mission.component.scss'
})
export class AboutMissionComponent {
  private readonly aboutService = inject(AboutService);

  protected readonly mission = this.aboutService.mission;
  protected readonly missionHeading =
    `${this.mission.headingLine1} ${this.mission.headingLine2}`;
}
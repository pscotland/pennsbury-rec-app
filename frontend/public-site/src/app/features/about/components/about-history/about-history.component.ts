import { Component, inject } from '@angular/core';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { AboutService } from '../../services/about.service';

@Component({
  selector: 'app-about-history',
  standalone: true,
  imports: [SectionHeaderComponent],
  templateUrl: './about-history.component.html',
  styleUrl: './about-history.component.scss'
})
export class AboutHistoryComponent {
  private readonly aboutService = inject(AboutService);

  protected readonly history = this.aboutService.history;
  protected readonly timeline = this.aboutService.timeline;
}
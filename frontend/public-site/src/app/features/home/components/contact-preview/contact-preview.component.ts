import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AppButtonComponent } from '../../../../shared/components/app-button/app-button.component';
import { InfoCardComponent } from '../../../../shared/components/info-card/info-card.component';
import { MapPlaceholderComponent } from '../../../../shared/components/map-placeholder/map-placeholder.component';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-contact-preview',
  standalone: true,
  imports: [SectionHeaderComponent, InfoCardComponent, MapPlaceholderComponent, AppButtonComponent],
  templateUrl: './contact-preview.component.html',
  styleUrl: './contact-preview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactPreviewComponent {
  private readonly homeService = inject(HomeService);

  protected readonly contactItems = this.homeService.contactItems;
  protected readonly mapAddress = this.homeService.mapAddress;
  protected readonly contactRoute = ['/contact'];
}

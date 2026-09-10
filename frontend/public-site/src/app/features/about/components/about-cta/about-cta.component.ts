import { Component, inject } from '@angular/core';
import { AppButtonComponent } from '../../../../shared/components/app-button/app-button.component';
import { AboutService } from '../../services/about.service';

@Component({
  selector: 'app-about-cta',
  standalone: true,
  imports: [AppButtonComponent],
  templateUrl: './about-cta.component.html',
  styleUrl: './about-cta.component.scss'
})
export class AboutCtaComponent {
  private readonly aboutService = inject(AboutService);

  protected readonly cta = this.aboutService.cta;
}
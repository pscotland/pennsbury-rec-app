import { Component, inject } from '@angular/core';
import { FaqAccordionComponent } from '../../../../shared/components/faq-accordion/faq-accordion.component';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { AboutService } from '../../services/about.service';

@Component({
  selector: 'app-about-faq',
  standalone: true,
  imports: [SectionHeaderComponent, FaqAccordionComponent],
  templateUrl: './about-faq.component.html',
  styleUrl: './about-faq.component.scss'
})
export class AboutFaqComponent {
  private readonly aboutService = inject(AboutService);

  protected readonly faqContent = this.aboutService.faqContent;
  protected readonly faqItems = this.aboutService.faqItems;
}
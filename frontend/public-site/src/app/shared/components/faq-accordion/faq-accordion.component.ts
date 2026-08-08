import { Component, input } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';

export interface FaqItem {
  q: string;
  a: string;
}

@Component({
  selector: 'app-faq-accordion',
  standalone: true,
  imports: [AccordionModule],
  templateUrl: './faq-accordion.component.html',
  styleUrl: './faq-accordion.component.scss'
})
export class FaqAccordionComponent {
  readonly items = input<FaqItem[]>([]);
}

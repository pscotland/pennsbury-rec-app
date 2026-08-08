import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { PUBLIC_PRIMARY_NAV } from '../../core/constants/public-navigation.constants';

interface SocialLink {
  label: string;
  iconClass: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  protected readonly quickLinks = PUBLIC_PRIMARY_NAV;
  protected readonly currentYear = new Date().getFullYear();
  protected readonly socialLinks: readonly SocialLink[] = [
    { label: 'Facebook', iconClass: 'pi pi-facebook' },
    { label: 'Twitter', iconClass: 'pi pi-twitter' },
    { label: 'Instagram', iconClass: 'pi pi-instagram' },
    { label: 'LinkedIn', iconClass: 'pi pi-linkedin' }
  ];
}

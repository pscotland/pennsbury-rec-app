import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { PUBLIC_PRIMARY_NAV } from '../../core/constants/public-navigation.constants';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  protected readonly quickLinks = PUBLIC_PRIMARY_NAV;
}

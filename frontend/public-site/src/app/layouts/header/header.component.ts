import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import {
  PUBLIC_ACTION_LINKS,
  PUBLIC_PRIMARY_NAV
} from '../../core/constants/public-navigation.constants';
import { MobileNavComponent } from '../mobile-nav/mobile-nav.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MobileNavComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  protected readonly primaryNav = PUBLIC_PRIMARY_NAV;
  protected readonly registerCommands = PUBLIC_ACTION_LINKS.register;
  protected readonly adminLoginCommands = PUBLIC_ACTION_LINKS.adminLogin;
  protected readonly mobileNavOpen = signal(false);

  protected toggleMobileNav(): void {
    this.mobileNavOpen.update((isOpen) => !isOpen);
  }

  protected updateMobileNavState(isOpen: boolean): void {
    this.mobileNavOpen.set(isOpen);
  }
}

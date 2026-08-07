import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';

import {
  PublicNavItem,
  PUBLIC_ACTION_LINKS,
  PUBLIC_PRIMARY_NAV
} from '../../core/constants/public-navigation.constants';

interface HeaderMenuItem extends MenuItem {
  exact?: boolean;
  mobileOnly?: boolean;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ButtonModule, MenubarModule, MenuModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  protected readonly primaryNav = PUBLIC_PRIMARY_NAV;
  protected readonly registerCommands = PUBLIC_ACTION_LINKS.register;
  protected readonly adminLoginCommands = PUBLIC_ACTION_LINKS.adminLogin;

  protected readonly menuItems: HeaderMenuItem[] = [
    ...this.primaryNav.map((item) => this.toMenuItem(item)),
    { separator: true, mobileOnly: true },
    {
      label: 'Admin Login',
      routerLink: this.adminLoginCommands,
      icon: 'pi pi-lock',
      mobileOnly: true
    },
    {
      label: 'Register',
      routerLink: this.registerCommands,
      icon: 'pi pi-user-plus',
      mobileOnly: true
    }
  ];

  protected readonly desktopMenuItems = this.menuItems.filter((item) => !item.mobileOnly);

  private toMenuItem(item: PublicNavItem): HeaderMenuItem {
    return {
      label: item.label,
      routerLink: item.commands,
      exact: item.exact
    };
  }
}

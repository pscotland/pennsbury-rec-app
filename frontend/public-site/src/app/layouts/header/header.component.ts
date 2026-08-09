import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';

import {
  PublicNavItem,
  PUBLIC_ACTION_LINKS,
  PUBLIC_PRIMARY_NAV
} from '../../core/constants/public-navigation.constants';
import { MobileNavComponent } from '../mobile-nav/mobile-nav.component';

interface HeaderMenuItem extends MenuItem {
  exact?: boolean;
  group: 'primary' | 'action';
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ButtonModule, MenubarModule, MobileNavComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  protected readonly registerCommands = PUBLIC_ACTION_LINKS.register;
  protected readonly adminLoginCommands = PUBLIC_ACTION_LINKS.adminLogin;

  protected readonly menuItems: HeaderMenuItem[] = [
    ...PUBLIC_PRIMARY_NAV.map((item) => this.toMenuItem(item)),
    {
      label: 'Admin Login',
      routerLink: this.adminLoginCommands,
      icon: 'pi pi-lock',
      group: 'action'
    },
    {
      label: 'Register',
      routerLink: this.registerCommands,
      icon: 'pi pi-user-plus',
      group: 'action'
    }
  ];

  protected readonly primaryItems = this.menuItems.filter((item) => item.group === 'primary');

  private toMenuItem(item: PublicNavItem): HeaderMenuItem {
    return {
      label: item.label,
      routerLink: item.commands,
      exact: item.exact,
      group: 'primary'
    };
  }
}

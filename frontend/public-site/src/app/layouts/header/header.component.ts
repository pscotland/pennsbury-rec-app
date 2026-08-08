import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { MenubarModule } from 'primeng/menubar';

import {
  PublicNavItem,
  PUBLIC_ACTION_LINKS,
  PUBLIC_PRIMARY_NAV
} from '../../core/constants/public-navigation.constants';

interface HeaderMenuItem extends MenuItem {
  exact?: boolean;
  group: 'primary' | 'action';
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ButtonModule, MenubarModule, DrawerModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  protected readonly registerCommands = PUBLIC_ACTION_LINKS.register;
  protected readonly adminLoginCommands = PUBLIC_ACTION_LINKS.adminLogin;
  protected mobileDrawerVisible = false;

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
  protected readonly actionItems = this.menuItems.filter((item) => item.group === 'action');

  protected openMobileDrawer(): void {
    this.mobileDrawerVisible = true;
  }

  protected closeMobileDrawer(): void {
    this.mobileDrawerVisible = false;
  }

  protected onMobileDrawerVisibleChange(visible: boolean): void {
    this.mobileDrawerVisible = visible;
  }

  private toMenuItem(item: PublicNavItem): HeaderMenuItem {
    return {
      label: item.label,
      routerLink: item.commands,
      exact: item.exact,
      group: 'primary'
    };
  }
}

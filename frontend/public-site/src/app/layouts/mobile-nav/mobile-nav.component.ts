import { Component, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';

import { PublicNavItem } from '../../core/constants/public-navigation.constants';

@Component({
  selector: 'app-mobile-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ButtonModule, DrawerModule],
  templateUrl: './mobile-nav.component.html',
  styleUrl: './mobile-nav.component.scss'
})
export class MobileNavComponent {
  readonly open = input.required<boolean>();
  readonly links = input.required<readonly PublicNavItem[]>();
  readonly registerCommands = input.required<readonly string[]>();
  readonly adminLoginCommands = input.required<readonly string[]>();
  readonly openChange = output<boolean>();

  protected onDrawerVisibleChange(isOpen: boolean): void {
    this.openChange.emit(isOpen);
  }

  protected closeDrawer(): void {
    this.openChange.emit(false);
  }
}

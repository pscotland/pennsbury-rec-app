import { Component, ElementRef, HostListener, inject, input, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';

@Component({
  selector: 'app-mobile-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ButtonModule, DrawerModule],
  templateUrl: './mobile-nav.component.html',
  styleUrl: './mobile-nav.component.scss'
})
export class MobileNavComponent {
  readonly primaryItems = input.required<readonly MenuItem[]>();
  readonly adminLoginCommands = input.required<readonly string[]>();
  readonly registerCommands = input.required<readonly string[]>();

  protected readonly drawerVisible = signal(false);
  private readonly hostRef = inject(ElementRef<HTMLElement>);

  protected openDrawer(): void {
    this.drawerVisible.set(true);
  }

  protected closeDrawer(): void {
    this.drawerVisible.set(false);
  }

  protected onVisibleChange(visible: boolean): void {
    this.drawerVisible.set(visible);

    if (!visible) {
      // Return focus to hamburger after close for keyboard users.
      this.focusMenuButton();
    }
  }

  @HostListener('document:keydown.escape')
  protected onEscapePress(): void {
    if (this.drawerVisible()) {
      this.closeDrawer();
    }
  }

  private focusMenuButton(): void {
    const host = this.hostRef.nativeElement as HTMLElement;
    const button = host.querySelector('button[aria-label="Open navigation menu"]') as HTMLButtonElement | null;
    button?.focus();
  }
}

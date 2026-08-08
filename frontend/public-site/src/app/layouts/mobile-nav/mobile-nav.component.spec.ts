import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { MenuItem } from 'primeng/api';

import { MobileNavComponent } from './mobile-nav.component';

describe('MobileNavComponent', () => {
  let component: MobileNavComponent;
  let fixture: ComponentFixture<MobileNavComponent>;

  const primaryItems: readonly MenuItem[] = [
    { label: 'Home', routerLink: ['/'], exact: true },
    { label: 'About', routerLink: ['/about'] }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileNavComponent],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(MobileNavComponent);
    fixture.componentRef.setInput('primaryItems', primaryItems);
    fixture.componentRef.setInput('adminLoginCommands', ['/admin-login']);
    fixture.componentRef.setInput('registerCommands', ['/programs']);
    fixture.detectChanges();
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('opens and closes the drawer state', () => {
    fixture.nativeElement.querySelector('button').click();
    fixture.detectChanges();
    expect((component as any).drawerVisible()).toBe(true);

    (component as any).closeDrawer();
    fixture.detectChanges();
    expect((component as any).drawerVisible()).toBe(false);
  });
});

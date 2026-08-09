import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [provideRouter([]), provideAnimationsAsync()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render all major home sections', () => {
    const el: HTMLElement = fixture.nativeElement;

    expect(el.querySelector('app-hero')).toBeTruthy();
    expect(el.querySelector('app-upcoming-events')).toBeTruthy();
    expect(el.querySelector('app-volunteer')).toBeTruthy();
    expect(el.querySelector('app-sponsors')).toBeTruthy();
    expect(el.querySelector('app-contact-preview')).toBeTruthy();
  });

  it('should render primary CTA links for programs and contact', () => {
    const links = Array.from(fixture.nativeElement.querySelectorAll('a')) as HTMLAnchorElement[];
    const hrefs = links.map((link) => link.getAttribute('href') ?? '');

    expect(hrefs.some((href) => href.includes('/programs'))).toBe(true);
    expect(hrefs.some((href) => href.includes('/contact'))).toBe(true);
  });

  it('should render upcoming events and sponsors from mock data', () => {
    const el: HTMLElement = fixture.nativeElement;

    expect(el.querySelectorAll('app-event-card').length).toBe(3);
    expect(el.querySelectorAll('app-sponsor-card').length).toBeGreaterThan(0);
  });
});

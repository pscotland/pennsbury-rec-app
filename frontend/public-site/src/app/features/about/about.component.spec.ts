import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { ABOUT_BOARD_MEMBERS, ABOUT_FAQ_ITEMS } from './data/about.mock';
import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutComponent],
      providers: [provideRouter([]), provideAnimationsAsync()]
    }).compileComponents();

    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render all major about sections', () => {
    const el: HTMLElement = fixture.nativeElement;

    expect(el.querySelector('app-about-hero')).toBeTruthy();
    expect(el.querySelector('app-about-mission')).toBeTruthy();
    expect(el.querySelector('app-about-history')).toBeTruthy();
    expect(el.querySelector('app-about-board')).toBeTruthy();
    expect(el.querySelector('app-about-faq')).toBeTruthy();
    expect(el.querySelector('app-about-cta')).toBeTruthy();
  });

  it('should render board members and faq content from mock data', () => {
    const text = fixture.nativeElement.textContent ?? '';

    expect(text).toContain(ABOUT_BOARD_MEMBERS[0].name);
    expect(text).toContain(ABOUT_BOARD_MEMBERS[ABOUT_BOARD_MEMBERS.length - 1].name);
    expect(text).toContain(ABOUT_FAQ_ITEMS[0].q);
  });

  it('should include CTA links for programs and contact', () => {
    const links = Array.from(fixture.nativeElement.querySelectorAll('a')) as HTMLAnchorElement[];
    const hrefs = links.map((link) => link.getAttribute('href') ?? '');

    expect(hrefs.some((href) => href.includes('/programs'))).toBe(true);
    expect(hrefs.some((href) => href.includes('/contact'))).toBe(true);
  });

  it('should not render a community impact section', () => {
    const text = fixture.nativeElement.textContent ?? '';

    expect(text).not.toContain('Community Impact');
  });
});

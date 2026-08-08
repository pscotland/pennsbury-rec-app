import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { PageHeroComponent } from './page-hero.component';

describe('PageHeroComponent', () => {
  let component: PageHeroComponent;
  let fixture: ComponentFixture<PageHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageHeroComponent],
      providers: [provideRouter([]), provideAnimationsAsync()]
    }).compileComponents();

    fixture = TestBed.createComponent(PageHeroComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('heading', 'Welcome to Riverside Recreation');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

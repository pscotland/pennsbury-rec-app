import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppBadgeComponent } from './app-badge.component';

describe('AppBadgeComponent', () => {
  let component: AppBadgeComponent;
  let fixture: ComponentFixture<AppBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppBadgeComponent],
      providers: [provideAnimationsAsync()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppBadgeComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('value', 'Open');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppInputComponent } from './app-input.component';

describe('AppInputComponent', () => {
  let component: AppInputComponent;
  let fixture: ComponentFixture<AppInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppInputComponent],
      providers: [provideAnimationsAsync()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

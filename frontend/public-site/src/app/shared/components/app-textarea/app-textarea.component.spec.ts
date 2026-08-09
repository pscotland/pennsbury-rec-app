import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppTextareaComponent } from './app-textarea.component';

describe('AppTextareaComponent', () => {
  let component: AppTextareaComponent;
  let fixture: ComponentFixture<AppTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppTextareaComponent],
      providers: [provideAnimationsAsync()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppCheckboxComponent } from './app-checkbox.component';

describe('AppCheckboxComponent', () => {
  let component: AppCheckboxComponent;
  let fixture: ComponentFixture<AppCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppCheckboxComponent],
      providers: [provideAnimationsAsync()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppCheckboxComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('label', 'Remember me');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

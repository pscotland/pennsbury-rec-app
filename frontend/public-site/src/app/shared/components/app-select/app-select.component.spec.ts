import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppSelectComponent } from './app-select.component';

describe('AppSelectComponent', () => {
  let component: AppSelectComponent;
  let fixture: ComponentFixture<AppSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppSelectComponent],
      providers: [provideAnimationsAsync()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

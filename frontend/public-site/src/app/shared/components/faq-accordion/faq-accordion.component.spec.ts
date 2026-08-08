import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FaqAccordionComponent } from './faq-accordion.component';

describe('FaqAccordionComponent', () => {
  let component: FaqAccordionComponent;
  let fixture: ComponentFixture<FaqAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaqAccordionComponent],
      providers: [provideAnimationsAsync()]
    }).compileComponents();

    fixture = TestBed.createComponent(FaqAccordionComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('items', [{ q: 'How do I register?', a: 'Visit our programs page.' }]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

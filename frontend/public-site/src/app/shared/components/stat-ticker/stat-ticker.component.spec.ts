import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StatTickerComponent } from './stat-ticker.component';

describe('StatTickerComponent', () => {
  let component: StatTickerComponent;
  let fixture: ComponentFixture<StatTickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatTickerComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(StatTickerComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('stats', [{ value: '500+', label: 'Members' }]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ProgramCardComponent } from './program-card.component';
import { Program } from '../../../core/models/program.model';

const mockProgram: Program = {
  id: '1',
  name: 'Soccer',
  img: 'https://images.unsplash.com/photo-1544333323-ec9ed3218dd1',
  ageGroup: 'Youth (5–14)',
  sport: 'Soccer',
  season: 'Fall',
  status: 'Open',
  description: 'Fun soccer program',
  longDescription: 'Extended description of soccer program.',
  schedule: 'Saturdays 9am',
  location: 'Main Field',
  fee: '$85 / season',
  minAge: 5,
  maxAge: 14,
  coach: 'Coach Marcus',
  registrationOpen: true
};

describe('ProgramCardComponent', () => {
  let component: ProgramCardComponent;
  let fixture: ComponentFixture<ProgramCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramCardComponent],
      providers: [provideRouter([]), provideAnimationsAsync()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProgramCardComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('program', mockProgram);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

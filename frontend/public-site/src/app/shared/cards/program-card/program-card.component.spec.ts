import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ProgramCardComponent } from './program-card.component';
import { Program } from '../../../core/models/program.model';

const mockProgram: Program = {
  id: '1',
  name: 'Soccer',
  description: 'Fun soccer program',
  season: 'Fall',
  registrationOpen: true,
  status: 'Open'
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

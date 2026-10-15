import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ProgramsComponent } from './programs.component';

describe('ProgramsComponent', () => {
  let component: ProgramsComponent;
  let fixture: ComponentFixture<ProgramsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramsComponent],
      providers: [provideRouter([]), provideAnimationsAsync()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display all programs initially', () => {
    expect(component.filteredPrograms().length).toBe(component.totalProgramsCount());
    expect(component.filteredPrograms().length).toBeGreaterThan(0);
  });

  it('should filter programs by search query', () => {
    component.onSearchChange('soccer');
    fixture.detectChanges();
    const filtered = component.filteredPrograms();
    expect(filtered.length).toBeGreaterThan(0);
    expect(filtered.every((p) =>
      p.name.toLowerCase().includes('soccer') ||
      p.description.toLowerCase().includes('soccer') ||
      p.sport.toLowerCase().includes('soccer')
    )).toBe(true);
  });

  it('should filter programs by sport', () => {
    component.onSportChange('Basketball');
    fixture.detectChanges();
    const filtered = component.filteredPrograms();
    expect(filtered.every((p) => p.sport === 'Basketball')).toBe(true);
  });

  it('should filter programs by age group', () => {
    component.onAgeChange('Youth (5–14)');
    fixture.detectChanges();
    const filtered = component.filteredPrograms();
    expect(filtered.every((p) => p.ageGroup === 'Youth (5–14)')).toBe(true);
  });

  it('should filter programs by season', () => {
    component.onSeasonChange('Winter');
    fixture.detectChanges();
    const filtered = component.filteredPrograms();
    expect(filtered.every((p) => p.season.includes('Winter'))).toBe(true);
  });

  it('should show empty state when no programs match', () => {
    component.onSearchChange('nonexistent-program-xyz');
    fixture.detectChanges();
    expect(component.filteredPrograms().length).toBe(0);
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.empty-results-card')).toBeTruthy();
  });

  it('should reset filters when clearFilters is called', () => {
    component.onSearchChange('soccer');
    component.onSportChange('Soccer');
    expect(component.hasFilters()).toBe(true);

    component.clearFilters();
    expect(component.search()).toBe('');
    expect(component.sportFilter()).toBe('All Sports');
    expect(component.hasFilters()).toBe(false);
    expect(component.filteredPrograms().length).toBe(component.totalProgramsCount());
  });
});


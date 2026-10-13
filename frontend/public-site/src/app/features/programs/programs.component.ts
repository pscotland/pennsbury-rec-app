import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ProgramService } from '../../core/services/program.service';
import { ProgramCardComponent } from '../../shared/cards/program-card/program-card.component';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { EmptyStateComponent } from '../../shared/components/empty-state/empty-state.component';
import {
  PROGRAM_AGE_OPTIONS,
  PROGRAM_SPORT_OPTIONS,
  PROGRAM_SEASON_OPTIONS,
  PROGRAMS_HERO
} from './data/programs.mock';

@Component({
  selector: 'app-programs',
  standalone: true,
  imports: [
    FormsModule,
    InputTextModule,
    ButtonModule,
    ProgramCardComponent,
    PageHeroComponent,
    EmptyStateComponent
  ],
  templateUrl: './programs.component.html',
  styleUrl: './programs.component.scss'
})
export class ProgramsComponent {
  private readonly programService = inject(ProgramService);

  readonly hero = PROGRAMS_HERO;
  readonly ageOptions = PROGRAM_AGE_OPTIONS;
  readonly sportOptions = PROGRAM_SPORT_OPTIONS;
  readonly seasonOptions = PROGRAM_SEASON_OPTIONS;

  readonly search = signal('');
  readonly ageFilter = signal<string>('All Ages');
  readonly sportFilter = signal<string>('All Sports');
  readonly seasonFilter = signal<string>('All Seasons');

  readonly totalProgramsCount = computed(() => this.programService.programs().length);

  readonly filteredPrograms = computed(() => {
    const q = this.search().trim().toLowerCase();
    const age = this.ageFilter();
    const sport = this.sportFilter();
    const season = this.seasonFilter();

    return this.programService.programs().filter((p) => {
      const matchSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.sport.toLowerCase().includes(q);
      const matchAge = age === 'All Ages' || p.ageGroup === age;
      const matchSport = sport === 'All Sports' || p.sport === sport;
      const matchSeason = season === 'All Seasons' || p.season.includes(season);
      return matchSearch && matchAge && matchSport && matchSeason;
    });
  });

  readonly hasFilters = computed(() => {
    return (
      this.search().trim() !== '' ||
      this.ageFilter() !== 'All Ages' ||
      this.sportFilter() !== 'All Sports' ||
      this.seasonFilter() !== 'All Seasons'
    );
  });

  onSearchChange(value: string): void {
    this.search.set(value);
  }

  onAgeChange(value: string): void {
    this.ageFilter.set(value);
  }

  onSportChange(value: string): void {
    this.sportFilter.set(value);
  }

  onSeasonChange(value: string): void {
    this.seasonFilter.set(value);
  }

  clearFilters = (): void => {
    this.search.set('');
    this.ageFilter.set('All Ages');
    this.sportFilter.set('All Sports');
    this.seasonFilter.set('All Seasons');
  };
}


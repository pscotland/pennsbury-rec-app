import { Injectable, computed, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Program } from '../models/program.model';
import { PROGRAMS } from '../data/programs.mock';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {
  private readonly http = inject(HttpClient);
  private readonly programsState = signal<Program[]>(PROGRAMS);
  private readonly loadingState = signal<boolean>(false);

  readonly programs = computed(() => this.programsState());
  readonly isLoading = computed(() => this.loadingState());

  getPrograms(): Observable<Program[]> {
    return of(this.programsState());
  }

  getProgramById(id: string): Program | undefined {
    return this.programsState().find((p) => p.id === id);
  }

  getProgramById$(id: string): Observable<Program | undefined> {
    return of(this.getProgramById(id));
  }

  getRelatedPrograms(currentId: string, limit = 3): Program[] {
    return this.programsState()
      .filter((p) => p.id !== currentId)
      .slice(0, limit);
  }
}

import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs/operators';
import { ProgramService } from '../../../../core/services/program.service';
import { AppBadgeComponent } from '../../../../shared/components/app-badge/app-badge.component';

export interface DetailCardItem {
  icon: string;
  label: string;
  val: string;
  color: string;
}

@Component({
  selector: 'app-program-detail',
  standalone: true,
  imports: [RouterLink, AppBadgeComponent],
  templateUrl: './program-detail.component.html',
  styleUrl: './program-detail.component.scss'
})
export class ProgramDetailComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly programService = inject(ProgramService);

  readonly programId = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('id')))
  );

  readonly program = computed(() => {
    const id = this.programId();
    if (!id) return undefined;
    return this.programService.getProgramById(id);
  });

  readonly relatedPrograms = computed(() => {
    const p = this.program();
    if (!p) return [];
    return this.programService.getRelatedPrograms(p.id, 3);
  });

  readonly detailGridItems = computed<DetailCardItem[]>(() => {
    const p = this.program();
    if (!p) return [];

    const ageRangeStr = `Ages ${p.minAge}–${p.maxAge === 99 ? 'Adult' : p.maxAge}`;

    return [
      { icon: 'pi pi-calendar', label: 'Season', val: p.season, color: '#2563EB' },
      { icon: 'pi pi-clock', label: 'Schedule', val: p.schedule, color: '#16A34A' },
      { icon: 'pi pi-map-marker', label: 'Location', val: p.location, color: '#F97316' },
      { icon: 'pi pi-users', label: 'Age Range', val: ageRangeStr, color: '#7C3AED' }
    ];
  });

  readonly coachInitials = computed(() => {
    const p = this.program();
    if (!p || !p.coach) return '';
    const cleanName = p.coach.replace(/^(Coach|Head Instructor|Camp Director|Head Pro)\s+/i, '').trim();
    const parts = cleanName.split(' ');
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return p.coach
      .split(' ')
      .filter((w) => /^[A-Z]/.test(w))
      .slice(0, 2)
      .map((w) => w[0])
      .join('');
  });

  readonly primaryLocation = computed(() => {
    const p = this.program();
    if (!p) return '';
    return p.location.split(' — ')[0];
  });
}

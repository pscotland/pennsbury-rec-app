import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, provideRouter } from '@angular/router';
import { of } from 'rxjs';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ProgramDetailComponent } from './program-detail.component';

describe('ProgramDetailComponent', () => {
  let component: ProgramDetailComponent;
  let fixture: ComponentFixture<ProgramDetailComponent>;

  const setupTest = async (paramId: string | null) => {
    await TestBed.configureTestingModule({
      imports: [ProgramDetailComponent],
      providers: [
        provideRouter([]),
        provideAnimationsAsync(),
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of(convertToParamMap(paramId ? { id: paramId } : {}))
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ProgramDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  };

  describe('with valid program id', () => {
    beforeEach(async () => {
      await setupTest('youth-soccer');
    });

    it('should create and load program details', () => {
      expect(component).toBeTruthy();
      expect(component.program()?.id).toBe('youth-soccer');
      expect(component.program()?.name).toBe('Youth Soccer');
    });

    it('should render detail grid items and coach initials', () => {
      const items = component.detailGridItems();
      expect(items.length).toBe(4);
      expect(items.find((i) => i.label === 'Season')?.val).toBe('Spring & Fall');
      expect(component.coachInitials()).toBe('MR');
    });

    it('should render related programs excluding current program', () => {
      const related = component.relatedPrograms();
      expect(related.length).toBeLessThanOrEqual(3);
      expect(related.some((p) => p.id === 'youth-soccer')).toBe(false);
    });
  });

  describe('with invalid program id', () => {
    beforeEach(async () => {
      await setupTest('non-existent-program');
    });

    it('should display graceful not found state', () => {
      expect(component.program()).toBeUndefined();
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('.not-found-card')).toBeTruthy();
      expect(compiled.querySelector('.not-found-title')?.textContent).toContain('Program Not Found');
    });
  });

  describe('status-based call-to-action buttons', () => {
    it('should display Full button when status is Full', async () => {
      TestBed.resetTestingModule();
      await setupTest('tennis'); // tennis is 'Coming Soon'
      expect(component.program()?.status).toBe('Coming Soon');
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('.btn-notify')).toBeTruthy();
    });
  });
});

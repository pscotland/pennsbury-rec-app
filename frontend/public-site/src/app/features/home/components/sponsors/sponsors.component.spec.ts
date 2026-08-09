import { signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HOME_SPONSORS } from '../../data/home.mock';
import { HomeService } from '../../services/home.service';
import { SponsorsComponent } from './sponsors.component';

describe('SponsorsComponent', () => {
  let fixture: ComponentFixture<SponsorsComponent>;

  const setup = async (serviceOverride?: Partial<HomeService>) => {
    await TestBed.configureTestingModule({
      imports: [SponsorsComponent],
      providers: [
        {
          provide: HomeService,
          useValue: {
            sponsors: signal(HOME_SPONSORS),
            isLoading: signal(false),
            ...serviceOverride
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SponsorsComponent);
    fixture.detectChanges();
  };

  it('should render sponsor cards from service data', async () => {
    await setup();

    expect(fixture.nativeElement.querySelectorAll('app-sponsor-card').length).toBe(HOME_SPONSORS.length);
  });

  it('should render empty state when no sponsors are available', async () => {
    await setup({
      sponsors: signal([])
    });

    expect(fixture.nativeElement.querySelector('app-empty-state')).toBeTruthy();
  });
});

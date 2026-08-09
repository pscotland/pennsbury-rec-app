import { signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { HOME_EVENTS } from '../../data/home.mock';
import { HomeService } from '../../services/home.service';
import { UpcomingEventsComponent } from './upcoming-events.component';

describe('UpcomingEventsComponent', () => {
  let fixture: ComponentFixture<UpcomingEventsComponent>;

  const setup = async (serviceOverride?: Partial<HomeService>) => {
    await TestBed.configureTestingModule({
      imports: [UpcomingEventsComponent],
      providers: [
        provideRouter([]),
        provideAnimationsAsync(),
        {
          provide: HomeService,
          useValue: {
            upcomingEvents: signal(HOME_EVENTS.slice(0, 3)),
            isLoading: signal(false),
            ...serviceOverride
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(UpcomingEventsComponent);
    fixture.detectChanges();
  };

  it('should render event cards from service data', async () => {
    await setup();

    expect(fixture.nativeElement.querySelectorAll('app-event-card').length).toBe(3);
  });

  it('should render empty state when no events are available', async () => {
    await setup({
      upcomingEvents: signal([])
    });

    expect(fixture.nativeElement.querySelector('app-empty-state')).toBeTruthy();
  });
});

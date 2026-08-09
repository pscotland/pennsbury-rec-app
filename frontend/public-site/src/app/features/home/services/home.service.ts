import { Injectable, computed, signal } from '@angular/core';
import {
  HOME_CONTACT_ITEMS,
  HOME_EVENTS,
  HOME_HERO,
  HOME_MAP_ADDRESS,
  HOME_SPONSORS,
  HOME_STATS,
  HOME_VOLUNTEER
} from '../data/home.mock';

@Injectable({ providedIn: 'root' })
export class HomeService {
  private readonly loadingState = signal(false);
  private readonly eventsState = signal(HOME_EVENTS);
  private readonly sponsorsState = signal(HOME_SPONSORS);

  readonly isLoading = this.loadingState.asReadonly();
  readonly upcomingEvents = computed(() => this.eventsState().slice(0, 3));
  readonly sponsors = computed(() => this.sponsorsState());

  readonly hero = HOME_HERO;
  readonly stats = HOME_STATS;
  readonly volunteer = HOME_VOLUNTEER;
  readonly contactItems = HOME_CONTACT_ITEMS;
  readonly mapAddress = HOME_MAP_ADDRESS;
}
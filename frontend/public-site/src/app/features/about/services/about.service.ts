import { Injectable, computed, signal } from '@angular/core';
import {
  ABOUT_BOARD_MEMBERS,
  ABOUT_CTA,
  ABOUT_FAQ_CONTENT,
  ABOUT_FAQ_ITEMS,
  ABOUT_HERO,
  ABOUT_HISTORY,
  ABOUT_MISSION,
  ABOUT_TIMELINE
} from '../data/about.mock';

@Injectable({ providedIn: 'root' })
export class AboutService {
  private readonly boardMembersState = signal(ABOUT_BOARD_MEMBERS);
  private readonly faqItemsState = signal(ABOUT_FAQ_ITEMS);

  readonly boardMembers = computed(() => this.boardMembersState());
  readonly faqItems = computed(() => this.faqItemsState());

  readonly hero = ABOUT_HERO;
  readonly mission = ABOUT_MISSION;
  readonly history = ABOUT_HISTORY;
  readonly timeline = ABOUT_TIMELINE;
  readonly faqContent = ABOUT_FAQ_CONTENT;
  readonly cta = ABOUT_CTA;
}
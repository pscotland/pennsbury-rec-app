import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NewsCardComponent } from './news-card.component';
import { Announcement } from '../../../core/models/announcement.model';

const mockArticle: Announcement = {
  id: '1',
  title: 'Summer Programs Now Open',
  summary: 'Registration for summer programs is now available.',
  publishedAt: '2026-06-01',
  isFeatured: false,
  category: 'Announcement'
};

describe('NewsCardComponent', () => {
  let component: NewsCardComponent;
  let fixture: ComponentFixture<NewsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsCardComponent],
      providers: [provideRouter([]), provideAnimationsAsync()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewsCardComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('article', mockArticle);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Announcement } from '../../../core/models/announcement.model';
import { AppBadgeComponent } from '../../components/app-badge/app-badge.component';
import { AppButtonComponent } from '../../components/app-button/app-button.component';

@Component({
  selector: 'app-news-card',
  standalone: true,
  imports: [RouterLink, DatePipe, AppBadgeComponent, AppButtonComponent],
  templateUrl: './news-card.component.html',
  styleUrl: './news-card.component.scss'
})
export class NewsCardComponent {
  readonly article = input.required<Announcement>();
  readonly featured = input(false);
}

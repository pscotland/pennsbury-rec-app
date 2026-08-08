import { Component, input, computed } from '@angular/core';
import { TitleCasePipe } from '@angular/common';

export type SocialPlatform = 'facebook' | 'twitter' | 'instagram' | 'youtube' | 'linkedin';

const PLATFORM_ICONS: Record<SocialPlatform, string> = {
  facebook: 'pi-facebook',
  twitter: 'pi-twitter',
  instagram: 'pi-instagram',
  youtube: 'pi-youtube',
  linkedin: 'pi-linkedin'
};

@Component({
  selector: 'app-social-icon-button',
  standalone: true,
  imports: [TitleCasePipe],
  templateUrl: './social-icon-button.component.html',
  styleUrl: './social-icon-button.component.scss'
})
export class SocialIconButtonComponent {
  readonly platform = input.required<SocialPlatform>();
  readonly href = input('#');

  protected readonly iconClass = computed(() => `pi ${PLATFORM_ICONS[this.platform()] ?? 'pi-external-link'}`);
}

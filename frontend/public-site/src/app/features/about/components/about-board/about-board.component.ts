import { Component, inject } from '@angular/core';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import type { AboutBoardMember } from '../../models/about.model';
import { AboutService } from '../../services/about.service';

@Component({
  selector: 'app-about-board',
  standalone: true,
  imports: [SectionHeaderComponent],
  templateUrl: './about-board.component.html',
  styleUrl: './about-board.component.scss'
})
export class AboutBoardComponent {
  private readonly aboutService = inject(AboutService);

  protected readonly boardMembers = this.aboutService.boardMembers;

  protected avatarBackground(member: AboutBoardMember): string {
    return `linear-gradient(135deg, ${this.toAlphaColor(member.color, 0.12)} 0%, ${this.toAlphaColor(member.color, 0.24)} 100%)`;
  }

  protected avatarBorderColor(member: AboutBoardMember): string {
    return this.toAlphaColor(member.color, 0.3);
  }

  private toAlphaColor(hex: string, alpha: number): string {
    const normalized = hex.trim().replace('#', '');
    const isShortHex = normalized.length === 3;
    const isLongHex = normalized.length === 6;

    if (!isShortHex && !isLongHex) {
      return hex;
    }

    const expanded = isShortHex
      ? normalized
          .split('')
          .map((ch) => ch + ch)
          .join('')
      : normalized;

    const r = Number.parseInt(expanded.slice(0, 2), 16);
    const g = Number.parseInt(expanded.slice(2, 4), 16);
    const b = Number.parseInt(expanded.slice(4, 6), 16);

    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
}
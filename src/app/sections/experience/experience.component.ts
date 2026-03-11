/**
 * Experience Component
 * ====================
 * Vertical timeline layout showcasing work experience.
 * Features a glowing timeline node and detailed role cards.
 */
import { Component } from '@angular/core';
import { EXPERIENCE, ExperienceEntry } from '../../shared/portfolio.data';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  /** Work experience entries from centralized data */
  experience: ExperienceEntry[] = EXPERIENCE;
}

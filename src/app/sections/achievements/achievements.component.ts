/**
 * Achievements Component
 * ======================
 * Displays awards and certifications with gold accent styling.
 */
import { Component } from '@angular/core';
import { ACHIEVEMENTS, Achievement } from '../../shared/portfolio.data';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrl: './achievements.component.css'
})
export class AchievementsComponent {
  achievements: Achievement[] = ACHIEVEMENTS;
}

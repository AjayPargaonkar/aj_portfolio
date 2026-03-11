/**
 * Skills Component
 * ================
 * Displays technical skills organized by category in a responsive card grid.
 * Each category shows a collection of skill tags with hover animations.
 */
import { Component } from '@angular/core';
import { SKILLS, SkillCategory } from '../../shared/portfolio.data';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  /** Skill categories from centralized data */
  skills: SkillCategory[] = SKILLS;
}

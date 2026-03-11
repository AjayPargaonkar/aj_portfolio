/**
 * Projects Component
 * ==================
 * Showcases featured projects with tech stack tags,
 * key highlights, and gradient-bordered cards.
 */
import { Component } from '@angular/core';
import { PROJECTS, Project } from '../../shared/portfolio.data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  /** Project data from centralized store */
  projects: Project[] = PROJECTS;
}

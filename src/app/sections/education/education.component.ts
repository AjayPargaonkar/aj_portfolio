/**
 * Education Component
 * ===================
 * Displays educational qualifications in clean card layout.
 */
import { Component } from '@angular/core';
import { EDUCATION, Education } from '../../shared/portfolio.data';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  education: Education[] = EDUCATION;
}

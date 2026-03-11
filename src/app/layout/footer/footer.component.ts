/**
 * Footer Component
 * ================
 * Site footer with quick links, contact info, and scroll-to-top.
 */
import { Component } from '@angular/core';
import { PERSONAL_INFO } from '../../shared/portfolio.data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  email = PERSONAL_INFO.email;
  phone = PERSONAL_INFO.phone;
  location = PERSONAL_INFO.location;

  quickLinks = [
    { label: 'Home', target: 'home' },
    { label: 'About', target: 'about' },
    { label: 'Skills', target: 'skills' },
    { label: 'Projects', target: 'projects' },
    { label: 'Contact', target: 'contact' }
  ];

  /** Smooth scroll to target section */
  scrollTo(sectionId: string): void {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }

  /** Scroll to page top */
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

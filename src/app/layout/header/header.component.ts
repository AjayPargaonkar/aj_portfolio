/**
 * Header Component
 * ================
 * Fixed navigation bar with glassmorphism effect.
 * Features smooth-scroll navigation and mobile hamburger menu.
 * Background opacity increases on scroll for better readability.
 */
import { Component, signal, HostListener } from '@angular/core';
import { PERSONAL_INFO } from '../../shared/portfolio.data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  /** Toggle for mobile navigation menu */
  isMenuOpen = signal(false);

  /** Tracks whether user has scrolled past threshold */
  isScrolled = signal(false);

  /** Navigation links mapped to section IDs */
  navLinks = [
    { label: 'Home', target: 'home' },
    { label: 'About', target: 'about' },
    { label: 'Skills', target: 'skills' },
    { label: 'Experience', target: 'experience' },
    { label: 'Projects', target: 'projects' },
    { label: 'Education', target: 'education' },
    { label: 'Contact', target: 'contact' }
  ];

  name = PERSONAL_INFO.name;

  /** Listen for window scroll to toggle header background */
  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 50);
  }

  /** Smooth scroll to target section and close mobile menu */
  scrollTo(sectionId: string): void {
    this.isMenuOpen.set(false);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  /** Toggle mobile hamburger menu */
  toggleMenu(): void {
    this.isMenuOpen.update(v => !v);
  }
}

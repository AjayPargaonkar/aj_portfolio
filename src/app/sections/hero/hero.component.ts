/**
 * Hero Component
 * ==============
 * Full-viewport landing section with animated typing effect,
 * floating CSS particles, and gradient background animation.
 * Features CTA buttons for viewing work and downloading resume.
 */
import { Component, signal, OnInit, OnDestroy } from '@angular/core';
import { PERSONAL_INFO, TYPING_ROLES, SUMMARY } from '../../shared/portfolio.data';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit, OnDestroy {
  /** Currently displayed typed text */
  typedText = signal('');

  /** Controls cursor blink visibility */
  showCursor = signal(true);

  name = PERSONAL_INFO.name;
  summary = SUMMARY;
  resumePath = PERSONAL_INFO.resumePath;

  private roles = TYPING_ROLES;
  private roleIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private typingTimer: ReturnType<typeof setTimeout> | null = null;

  ngOnInit(): void {
    this.type();
  }

  ngOnDestroy(): void {
    if (this.typingTimer) clearTimeout(this.typingTimer);
  }

  /** Typing animation: types and deletes roles in sequence */
  private type(): void {
    const currentRole = this.roles[this.roleIndex];
    let delay: number;

    if (this.isDeleting) {
      this.charIndex--;
      delay = 40;
    } else {
      this.charIndex++;
      delay = 100;
    }

    this.typedText.set(currentRole.substring(0, this.charIndex));

    if (!this.isDeleting && this.charIndex === currentRole.length) {
      delay = 2000; // Pause at end
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      delay = 500; // Pause before next word
    }

    this.typingTimer = setTimeout(() => this.type(), delay);
  }

  /** Smooth scroll to a section by ID */
  scrollTo(sectionId: string): void {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }
}

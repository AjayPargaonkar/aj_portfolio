/**
 * Contact Component
 * =================
 * Contact section with info cards and a visual contact form.
 * Form uses Angular reactive forms with basic validation.
 */
import { Component, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PERSONAL_INFO } from '../../shared/portfolio.data';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  /** Form submission state */
  submitted = signal(false);

  /** Contact info for display */
  contactInfo = [
    { icon: '✉️', label: 'Email', value: PERSONAL_INFO.email, link: `mailto:${PERSONAL_INFO.email}` },
    { icon: '📱', label: 'Phone', value: PERSONAL_INFO.phone, link: `tel:${PERSONAL_INFO.phone}` },
    { icon: '📍', label: 'Location', value: PERSONAL_INFO.location, link: '' }
  ];

  /** Reactive form with validation */
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  /** Handle form submission */
  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Contact form data:', this.contactForm.value);
      this.submitted.set(true);
      this.contactForm.reset();
      setTimeout(() => this.submitted.set(false), 3000);
    }
  }
}

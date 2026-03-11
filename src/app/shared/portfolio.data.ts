/**
 * Portfolio Data Service
 * =====================
 * Centralized data store for the entire portfolio.
 * All resume information is maintained here for easy updates.
 * Components import specific data they need from this file.
 */

/* ─── Interfaces ─── */

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  resumePath: string;
}

export interface SkillCategory {
  icon: string;
  title: string;
  skills: string[];
}

export interface ExperienceEntry {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
}

export interface Project {
  title: string;
  period: string;
  role: string;
  subtitle: string;
  description: string;
  highlights: string[];
  techStack: string[];
  isCurrent?: boolean;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  score: string;
}

export interface Achievement {
  icon: string;
  title: string;
  description: string;
}

/* ─── Personal Info ─── */

export const PERSONAL_INFO: PersonalInfo = {
  name: 'Ajay Pargaonkar',
  title: 'Java Full Stack Developer',
  email: 'ajaypargaonkar73@gmail.com',
  phone: '+918408815440',
  location: 'Pune, Maharashtra, India',
  linkedin: 'https://linkedin.com/in/ajay-pargaonkar',
  resumePath: 'resume/ajay_pargaonkar_full_stack.pdf'
};

/* ─── Professional Summary ─── */

export const SUMMARY = `Java Full Stack Developer with 3+ years of experience developing scalable web
applications and enterprise software solutions. Expertise in Java, Spring Boot, Hibernate, Microservices
architecture, Angular, and Multitenant architecture. Proven track record delivering healthcare EMR systems
and legal technology solutions while ensuring uptime, access control, network security, and HIPAA compliance.`;

/* ─── Typing Roles (for hero animation) ─── */

export const TYPING_ROLES: string[] = [
  'Java Full Stack Developer',
  'Backend Architect',
  'Spring Boot Expert',
  'Angular Developer',
  'Microservices Specialist'
];

/* ─── Skills ─── */

export const SKILLS: SkillCategory[] = [
  { icon: '💻', title: 'Programming Languages', skills: ['Java', 'JavaScript', 'TypeScript'] },
  { icon: '🎨', title: 'Frontend Development', skills: ['Angular', 'NGRX', 'Single Page Applications', 'Responsive Design'] },
  { icon: '⚙️', title: 'Backend Development', skills: ['Spring Boot', 'Spring MVC', 'Spring Security', 'Spring Data JPA', 'Hibernate', 'RESTful APIs', 'Maven'] },
  { icon: '🗄️', title: 'Databases', skills: ['PostgreSQL', 'Redis', 'MySQL'] },
  { icon: '🔒', title: 'Security', skills: ['OAuth2', 'JWT', 'Keycloak', 'Single Sign-On', 'HIPAA Compliance'] },
  { icon: '🚀', title: 'DevOps & CI/CD', skills: ['Docker', 'Docker Compose', 'GitHub Actions', 'Jenkins', 'Kubernetes'] },
  { icon: '🏗️', title: 'Architecture & Design', skills: ['Microservices', 'Monolithic', 'Multitenant Architecture'] },
  { icon: '🧪', title: 'Testing', skills: ['JUnit', 'Mockito', 'Unit Testing', 'Integration Testing', 'TDD'] },
  { icon: '🔗', title: 'Integrations', skills: ['Keycloak', 'SendGrid', 'Twilio', 'RabbitMQ', 'Firebase', 'Google Maps API', 'Redis GEO'] },
];

/* ─── Experience ─── */

export const EXPERIENCE: ExperienceEntry[] = [
  {
    role: 'Senior Software Engineer',
    company: 'Thinkitive Technologies Pvt. Ltd',
    location: 'Pune',
    period: 'Dec 2022 – Present',
    highlights: [
      'Building and optimizing enterprise-scale, multi-tenant EMR and healthcare platforms delivering secure, scalable, high-performance systems.',
      'Improved API and system performance by 40–60% through SQL optimization, efficient schema design, caching, and asynchronous processing.',
      'Extensive experience in multi-tenant architecture including schema-level isolation and discriminator column strategy.',
      'Hands-on security and identity management using Keycloak, JWT, opaque token security, and role-based access control.',
      'Led backend architecture design and acted as technical lead for critical modules, mentoring developers and ensuring best practices.',
      'Delivered AI-enabled healthcare solutions for personalized care planning with Firebase, SendGrid, and Twilio integrations.'
    ]
  }
];

/* ─── Projects ─── */

export const PROJECTS: Project[] = [
  {
    title: 'eAmata (EMR)',
    period: 'Current Project',
    role: 'Java Backend Lead',
    subtitle: 'Europe Healthcare Platform',
    description: 'Multi-tenant EMR platform for European healthcare, supporting patient, nurse, and admin services with backend consumed by mobile and web portals.',
    highlights: [
      'Nurse appointment broadcasting using Redis Geo-based location matching',
      'RabbitMQ for async processing improving scalability during high-volume workflows',
      'Remote Patient Monitoring (RPM) data from iHealth medical devices',
      'Discriminator column strategy for cross-tenant data access with tenant isolation'
    ],
    techStack: ['Java', 'Spring Boot', 'PostgreSQL', 'Redis Geo', 'RabbitMQ', 'Docker', 'Keycloak'],
    isCurrent: true
  },
  {
    title: 'Firefly (EHR)',
    period: '2023 – 2024',
    role: 'Backend Engineer',
    subtitle: 'Healthcare Education Platform',
    description: 'Healthcare EHR platform focused on patient and provider workflows for university students practicing real-world healthcare scenarios.',
    highlights: [
      'Consultation notes and supervising provider reviews',
      'Clinical documentation for university healthcare students',
      'APIs for patient assessment, mental health records, radiology, and family history',
      'Secure and reliable access to sensitive healthcare data'
    ],
    techStack: ['Java', 'Spring Boot', 'Spring Security', 'PostgreSQL', 'REST APIs'],
    isCurrent: false
  },
  {
    title: 'NodMD',
    period: '2022 – 2023',
    role: 'Full Stack Engineer',
    subtitle: 'Hospital Web Platform',
    description: 'Production hospital website built with microservices architecture, contributing to both backend services and Angular frontend modules.',
    highlights: [
      'Insurance-based payment flows for doctor-patient transactions',
      'Appointment booking and doctor consultation workflows',
      'SendGrid email notification integration and fixes',
      'Angular public portal library bug fixes and frontend stability'
    ],
    techStack: ['Java', 'Spring Boot', 'Angular', 'Microservices', 'SendGrid', 'PostgreSQL'],
    isCurrent: false
  }
];

/* ─── Education ─── */

export const EDUCATION: Education[] = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Savitribai Phule Pune University',
    period: 'July 2020 – April 2022',
    score: '9.2 CGPA'
  },
  {
    degree: 'Bachelor of Science (BSC)',
    institution: 'Dr Babasaheb Ambedkar University',
    period: 'March 2017 – May 2020',
    score: '70%'
  }
];

/* ─── Achievements ─── */

export const ACHIEVEMENTS: Achievement[] = [
  {
    icon: '🏆',
    title: 'Star Performer of the Year (2025)',
    description: 'Awarded at Thinkitive Technology for exceptional performance, ownership of complex features, and significant contributions to system scalability.'
  },
  {
    icon: '⭐',
    title: 'Key Contributor',
    description: 'Recognized at Thinkitive Technology for delivering high-impact backend solutions and consistently contributing to critical healthcare projects.'
  },
  {
    icon: '📜',
    title: 'Professional Java Certification',
    description: 'Demonstrated strong proficiency in core Java, object-oriented programming, and backend development fundamentals.'
  }
];

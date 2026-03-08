export const publications: Array<{ title: string; venue?: string; year?: string; link?: string }> = []

export const profile = {
  description:
    'Passionate about web development, specialized in the **Next.js / React / TypeScript** ecosystem. I enjoy creating modern, smooth interfaces, with a strong focus on performance, code quality, and user experience. I am particularly passionate about building SaaS because I genuinely enjoy solving problems.',
}

export const experiences = [
  {
    company: 'LPSolution',
    time: 'Nov 2025 – Present',
    title: 'Full Stack Developer (Part-time)',
    location: 'Montreal',
    description:
      'Techs: Next.js - React - TypeScript - Tailwind CSS - React Hook Form - Zod - GitHub\n\nBuilt the company website: https://lpsolution.ca/',
  },
  {
    company: 'PHPCréation',
    time: 'Mar 2024 – Present',
    title: 'Frontend Developer',
    location: 'Granby',
    description:
      'Techs: Next.js - React - TypeScript - Tailwind CSS - DynamoDB - React Hook Form - Zod - Playwright - GitHub - Sentry\n\nSpécialisation: Modernized the ERP PHPReaction interfaces into Next.js, creating more efficient and user-friendly experiences while ensuring smooth transitions from legacy technologies.\n\nModernized full modules:\n• Point of Sale: Interface for invoice creation/printing, product addition/scan/management\n• Punch System: Employee work hour tracking (punch-in, punch-out)\n• Inventory System: Stock management interface, product scanning, data verification\n• Email System: Sending standard emails or company template-based emails\n• Centralized Authentication: Unified login interface for all ERP applications\n\nSet up private npm packages to centralize reusable elements: components, utility files, caching system with DynamoDB, centralized authentication with OIDC and OAuth 2.0',
  },
]

export type ProjectCategory = 'professional' | 'personal'

export type PersonalProject = {
  name: string
  slug: string
  category: ProjectCategory
  time: string
  location?: string
  description: string
  technologies: string[]
  link?: string
  videoUrl?: string
  details?: string[]
}

export const personalProjects: PersonalProject[] = [
  {
    name: 'Diaderma Booking',
    slug: 'diaderma-booking',
    category: 'professional',
    time: '2025',
    location: 'LPSolution',
    description:
      'Full-stack booking platform for Diaderma (esthetics clinic): clients book appointments online, manage subscriptions and packages, and receive confirmations/modifications by email. A major part of the project is the admin panel, which gives staff and admins full control over the business.',
    technologies: [
      'Laravel',
      'React',
      'TypeScript',
      'Inertia.js',
      'Tailwind CSS',
      'Radix UI',
      'Vite',
      'Laravel Fortify',
      'Clover (payments)',
    ],
    link: 'https://booking.diaderma.ca/',
    details: [
      'Admin panel: dashboard, calendar, appointments, today’s bookings and sales, finance and statistics.',
      'Client management: profiles, notes, measurements, assigned packages and subscriptions, invitation-based registration.',
      'Admin management of services, packages, subscription plans, products, rooms, employees, business settings, and blocked time slots.',
      'Invoicing, forms, and export; signed URLs for booking confirm, cancel, and modify flows.',
    ],
  },
  {
    name: 'RDS Avocats',
    slug: 'rds-avocats',
    category: 'professional',
    time: '2025',
    location: 'Clients',
    description:
      'Website for RDS Avocats — a law firm specializing in business law, business immigration, commercial, corporate, family, criminal and civil law. Bilingual (English / French) with embedded consultation booking.',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'next-intl',
      'Cal.com',
      'Lucide React',
    ],
    link: 'https://rds-avocats.com',
    details: [
      'App Router, locale-based routes (EN/FR) with next-intl.',
      'Lawyer profile pages, services, team section, and about.',
      'Cal.com embed for consultation booking; service and subject choices driven by config.',
      'QR code and share functionality on lawyer contact pages.',
    ],
  },
  {
    name: 'Spync',
    slug: 'spync',
    category: 'personal',
    time: 'June 2025 – Present',
    location: 'Montreal',
    description:
      'SaaS (in development): Smart teleprompter that automatically scrolls text based on your voice for more natural and interactive presentations and speeches.',
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind',
      'Shadcn',
      'MongoDB',
      'NextAuth',
      'Stripe',
      'Deepgram (Speech-to-text API)',
    ],
    details: [
      "Captures speaker's voice in real time via microphone.",
      'Analyzes voice to auto-scroll text according to progress.',
      'Provides feedback on presentation speed to optimize pacing.',
    ],
  },
  {
    name: 'Fixt',
    slug: 'fixt',
    category: 'personal',
    time: 'Aug 2024 – Sep 2024',
    location: 'Montreal',
    description:
      'SaaS that finds errors in the text of a website and shows them to the user so they can fix the content. Users enter a URL; the app fetches and analyzes the page text, then surfaces grammar, vocabulary, and typo issues with suggestions for improvement.',
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind',
      'Shadcn',
      'MongoDB',
      'NextAuth',
      'OpenAI API',
      'Stripe',
    ],
    videoUrl: 'https://www.youtube.com/watch?v=0wY_WLX34lU',
    details: [
      'User provides a website URL; Fixt fetches and extracts the text content.',
      'Detects grammar, vocabulary, and typo errors and highlights them in context.',
      'Shows suggestions and improvements so the user can correct the text directly.',
      'Helps content owners and editors improve website copy before publishing.',
    ],
  },
]

export const professionalProjects = personalProjects.filter(
  (p) => p.category === 'professional'
)
export const personalOnlyProjects = personalProjects.filter(
  (p) => p.category === 'personal'
)

export const education = [
  {
    school: 'Cégep Saint-Jean-sur-Richelieu',
    time: 'Sep 2021 – June 2024',
    degree: 'Diploma of College Studies - Computer Science Technology',
    location: 'Saint-Jean-sur-Richelieu',
    description: '',
  },
]

export const certifications = [
  {
    name: 'Google Cybersecurity Certificate',
    issuer: 'Google',
    time: 'Oct 2025',
  },
  {
    name: 'CompTIA Security+',
    issuer: 'CompTIA',
    time: '',
    status: 'In progress',
  },
]

export const competitions = [
  {
    name: 'Hackathons: Conuhack VIII et IX',
    time: 'Jan 2024 et Feb 2025',
    description: '',
    achievements: [
      'Conuhack IX: Conupitch (https://devpost.com/software/conupitch)',
      'Conuhack VIII: Montréal Budget AI (https://devpost.com/software/montreal-budget-slai)',
    ],
  },
  {
    name: 'CTFs (Capture The Flag)',
    time: 'Sep 2022 – Present',
    description:
      'Cégep Saint-Jean-sur-Richelieu CTF (2023), United CTF (2023) & PICO CTF (2022 & 2023)',
  },
]

export const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      {
        name: 'Next.js',
        icon: 'simple-icons:nextdotjs',
      },
      {
        name: 'React',
        icon: 'simple-icons:react',
      },
      {
        name: 'TypeScript',
        icon: 'simple-icons:typescript',
      },
      {
        name: 'Tailwind CSS',
        icon: 'simple-icons:tailwindcss',
      },
      {
        name: 'Shadcn',
        icon: undefined, // Not available in simple-icons
      },
      {
        name: 'React Hook Form',
        icon: 'simple-icons:reacthookform',
      },
      {
        name: 'Zod',
        icon: 'simple-icons:zod',
      },
    ],
  },
  {
    title: 'Backend',
    skills: [
      {
        name: 'Next.js API Routes',
        icon: 'simple-icons:nextdotjs',
      },
      {
        name: 'Python',
        icon: 'simple-icons:python',
      },
      {
        name: 'Flask',
        icon: 'simple-icons:flask',
      },
      {
        name: 'MongoDB',
        icon: 'simple-icons:mongodb',
      },
      {
        name: 'DynamoDB',
        icon: 'simple-icons:amazondynamodb',
      },
      {
        name: 'Stripe',
        icon: 'simple-icons:stripe',
      },
      {
        name: 'NextAuth',
        icon: undefined, // Not available in simple-icons
      },
      {
        name: 'OAuth 2.0',
        icon: undefined, // Not available in simple-icons
      },
    ],
  },
  {
    title: 'Tools & Others',
    skills: [
      {
        name: 'Jest',
        icon: 'simple-icons:jest',
      },
      {
        name: 'Playwright',
        icon: 'simple-icons:playwright',
      },
      {
        name: 'Sentry',
        icon: 'simple-icons:sentry',
      },
      {
        name: 'AWS CloudWatch',
        icon: 'simple-icons:amazoncloudwatch',
      },
      {
        name: 'Git',
        icon: 'simple-icons:git',
      },
      {
        name: 'GitHub',
        icon: 'simple-icons:github',
      },
    ],
  },
]

// Legacy skills format for backward compatibility
export const skills = []

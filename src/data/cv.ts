export const profile = {
  description:
    'Passionate about web development, specialized in the **Next.js / React / TypeScript** ecosystem. I enjoy creating modern, smooth interfaces, with a strong focus on performance, code quality, and user experience. I am particularly passionate about building SaaS because I genuinely enjoy solving problems.',
}

export const experiences = [
  {
    company: 'LPSolution',
    time: 'Nov 2025 – Present',
    title: 'Frontend Developer',
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

export const personalProjects = [
  {
    name: 'Spync',
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
    time: 'Aug 2024 – Sep 2024',
    location: 'Montreal',
    description:
      'SaaS that automatically analyzes website text content using only the URL.',
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
    details: [
      'Highlights grammar, vocabulary, and typo errors in the text.',
      'Suggests improvements to optimize the content.',
    ],
  },
]

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
    status: 'In progress',
  },
  {
    name: 'CompTIA Security+',
    issuer: 'CompTIA',
    time: '',
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

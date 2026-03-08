/**
 * Map technology display names (as used in personalProjects) to simple-icons icon names.
 * Only includes icons available in simple-icons for consistent rendering.
 */
export const techIconMap: Record<string, string> = {
  'Laravel': 'simple-icons:laravel',
  'React': 'simple-icons:react',
  'TypeScript': 'simple-icons:typescript',
  'Inertia.js': 'simple-icons:inertia',
  'Tailwind CSS': 'simple-icons:tailwindcss',
  'Tailwind': 'simple-icons:tailwindcss',
  'Radix UI': 'simple-icons:radixui',
  'Vite': 'simple-icons:vite',
  'Laravel Fortify': 'simple-icons:laravel',
  'Next.js': 'simple-icons:nextdotjs',
  'Shadcn': 'simple-icons:shadcnui',
  'MongoDB': 'simple-icons:mongodb',
  'NextAuth': 'simple-icons:nextdotjs',
  'Stripe': 'simple-icons:stripe',
  'Deepgram (Speech-to-text API)': 'simple-icons:deepgram',
  'OpenAI API': 'simple-icons:openai',
}

export function getTechIcon(techName: string): string | undefined {
  return techIconMap[techName]
}

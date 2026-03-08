export interface Experience {
  company: string
  time: string
  title: string
  location?: string
  description?: string
}

export interface Education {
  school: string
  time: string
  degree: string
  location?: string
  description?: string
}

export interface Skill {
  name: string
  icon?: string // Iconify icon name (e.g., "simple-icons:react")
}

export interface SkillCategory {
  title: string
  skills: Skill[]
}

export interface Publication {
  title: string
  authors: string
  journal: string
  time: string
  link?: string
  abstract?: string
}

export interface PersonalProject {
  name: string
  time: string
  location?: string
  description: string
  technologies: string[]
  link?: string
  details?: string[]
}

export interface Certification {
  name: string
  issuer?: string
  time: string
  status?: string // e.g., "In progress"
  link?: string
}

export interface Competition {
  name: string
  time: string
  description?: string
  link?: string
  achievements?: string[]
}

export function isExperience(
  element: Experience | Education
): element is Experience {
  return 'title' in element && 'company' in element
}

export function isEducation(
  element: Education | Experience
): element is Education {
  return 'school' in element && 'degree' in element
}

export function isSkill(element: Skill | Publication): element is Skill {
  return 'name' in element
}

export function isPublication(
  element: Skill | Publication
): element is Publication {
  return 'authors' in element
}

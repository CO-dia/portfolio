import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function trimExcerpt(text: string, maxLength = 200): string {
  const plain = text.replace(/\s+/g, ' ').trim()
  if (plain.length <= maxLength) return plain
  return plain.slice(0, maxLength).trim() + '…'
}

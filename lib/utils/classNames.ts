import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines class names using clsx and twMerge for optimal Tailwind CSS usage
 * This allows proper class merging and overriding when using variants
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
} 
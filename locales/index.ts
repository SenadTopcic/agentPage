import { en } from './en'
import { de } from './de'
import { sk } from './sk'
import { ar } from './ar'

export const translations = {
  en,
  de,
  sk,
  ar,
} as const

export type Language = keyof typeof translations

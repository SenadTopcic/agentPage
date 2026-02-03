# Translation Guide

## Overview
This project supports 4 languages:
- 🇬🇧 **EN** - English (default, complete)
- 🇩🇪 **DE** - German
- 🇸🇰 **SK** - Slovak
- �� **AR** - Arabic

## Files to Translate

All translation files are located in `/locales/`:
- `en.ts` - English (reference/source)
- `de.ts` - German
- `sk.ts` - Slovak
- `ar.ts` - Arabic

## How to Translate

### 1. Open the language file
For example, to translate German, open `/locales/de.ts`

### 2. Find text marked with `[TRANSLATE]`
All text that needs translation is marked with `[TRANSLATE]` prefix:

```typescript
title: '[TRANSLATE] Never Miss Another Business',
```

### 3. Replace with translated text
Remove `[TRANSLATE]` and add the proper translation:

```typescript
title: 'Verpassen Sie nie wieder eine geschäftliche',
```

### 4. Keep the structure
- **DO NOT** change the key names (e.g., `title`, `description`)
- **DO NOT** change the file structure
- **DO** keep the same punctuation and formatting where appropriate
- **DO** preserve HTML entities like `\'` for apostrophes

## What's Already Translated

Some basic words are already translated:
- Navigation items (Features, Industries, etc.)
- Common UI elements (badges, buttons)
- Basic phrases

## What Needs Translation

Look for `[TRANSLATE]` markers in these sections:
- Hero section (main headline and description)
- Features descriptions
- Capabilities descriptions  
- Industries details (all 7 industries)
- How It Works process steps
- Demo section

## Example

**Before:**
```typescript
hero: {
  title: '[TRANSLATE] Never Miss Another Business',
  titleHighlight: '[TRANSLATE] Opportunity',
  description: '[TRANSLATE] While you focus on the big picture...',
}
```

**After (German):**
```typescript
hero: {
  title: 'Verpassen Sie nie wieder eine geschäftliche',
  titleHighlight: 'Gelegenheit',
  description: 'Während Sie sich auf das große Ganze konzentrieren...',
}
```

## Tips for Translators

1. **Context matters**: Read the English version on the website to understand context
2. **Brand voice**: Keep the conversational, direct tone of the original
3. **Technical terms**: "Ethan" and "Vanadium" should NOT be translated
4. **Consistency**: Use the same translation for repeated terms
5. **Length**: Try to keep similar length to avoid layout issues

## Testing Translations

After translating:
1. Save the file
2. Open the website
3. Click the language switcher (flag icon in navigation)
4. Select your language
5. Check all pages for correct display

## Questions?

If you're unsure about a translation:
- Check the English version for context
- Look at how similar terms are translated in the same file
- Ask the development team for clarification

## Progress Tracking

Mark your progress by removing `[TRANSLATE]` markers as you complete each section.

To find remaining work:
```bash
grep -r "\[TRANSLATE\]" locales/
```

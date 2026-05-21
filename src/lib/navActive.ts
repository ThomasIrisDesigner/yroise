/** Section principale active selon l’URL (menu mobile). */
export type NavSectionId = 'histoires' | 'collections' | 'carte' | 'jeunesse'

export function getActiveNavSection(pathname: string): NavSectionId | null {
  if (pathname.startsWith('/histoires')) return 'histoires'
  if (pathname.startsWith('/collections')) return 'collections'
  if (pathname.startsWith('/carte')) return 'carte'
  if (pathname.startsWith('/jeunesse')) return 'jeunesse'
  return null
}

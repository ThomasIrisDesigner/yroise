import * as React from 'react'

import { PastilleTriangle } from '@/components/ui/pastille-triangle'
import { cn } from '@/lib/utils'

type Lang = 'fr' | 'br'

function LangActiveIndicator() {
  return <PastilleTriangle />
}

export function SiteHeaderLangSwitcher({ className }: { className?: string }) {
  const [lang, setLang] = React.useState<Lang>('fr')

  const buttonClass = (active: boolean) =>
    cn(
      'flex items-center gap-2 font-outfit text-base font-medium tracking-[1px]',
      active ? 'text-text' : 'text-muted'
    )

  return (
    <div
      className={cn(
        'site-header-lang flex h-10 items-center gap-2 rounded-full border-[1.5px] border-solid border-border px-4',
        className
      )}
      role="group"
      aria-label="Langue"
    >
      <button
        type="button"
        aria-pressed={lang === 'fr'}
        onClick={() => setLang('fr')}
        className={buttonClass(lang === 'fr')}
      >
        {lang === 'fr' ? <LangActiveIndicator /> : null}
        FR
      </button>
      <button
        type="button"
        aria-pressed={lang === 'br'}
        onClick={() => setLang('br')}
        className={buttonClass(lang === 'br')}
      >
        {lang === 'br' ? <LangActiveIndicator /> : null}
        BR
      </button>
    </div>
  )
}

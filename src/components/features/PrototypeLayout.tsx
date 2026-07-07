import * as React from 'react'
import { LogOut, Monitor, Smartphone } from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import { MOBILE_MOCKUP_H, MOBILE_MOCKUP_W } from '@/config/wireframe-mobile'
import {
  PROJECT_DISPLAY_NAME,
  PROJECT_TYPE,
  PROTOTYPE_CHROME_EXTRAS_ENABLED,
} from '@/config/project'
import { logout } from '@/lib/auth'
import { resetPageScroll } from '@/lib/resetPageScroll'
import { cn } from '@/lib/utils'
import { useMediaQuery } from '@/lib/useMediaQuery'

type ViewMode = 'mobile' | 'desktop'

const CHROME_BAR_H = 32
const MOBILE_PADDING = 32

function computeMobileScale() {
  if (typeof window === 'undefined') return 1
  const scale = Math.min(
    (window.innerHeight - CHROME_BAR_H - MOBILE_PADDING * 2) / MOBILE_MOCKUP_H,
    (window.innerWidth - MOBILE_PADDING) / MOBILE_MOCKUP_W,
    1
  )
  return Number.isFinite(scale) ? Math.max(scale, 0) : 1
}

function PrototypeChromeBar({
  allowSwitch,
  effectiveMode,
  onSetMode,
}: {
  allowSwitch: boolean
  effectiveMode: ViewMode
  onSetMode: (mode: ViewMode) => void
}) {
  const navigate = useNavigate()

  return (
    <header className="h-8 shrink-0 border-b border-surface/10 bg-text text-surface">
      <div className="mx-auto flex h-8 w-full max-w-7xl items-center justify-between px-4">
        <div className="flex min-w-0 items-center gap-2">
          <Link to="/prototype" className="truncate text-xs text-surface/70">
            Thomas Iris. Designer — {PROJECT_DISPLAY_NAME}
          </Link>
        </div>

        <div className="flex items-center gap-2">
          {PROTOTYPE_CHROME_EXTRAS_ENABLED ? (
            <>
              <div
                className={cn(
                  'hidden items-center gap-2 md:flex',
                  !allowSwitch && 'hidden'
                )}
              >
                <button
                  type="button"
                  aria-label="Vue mobile"
                  onClick={() => onSetMode('mobile')}
                  className={cn(
                    'inline-flex h-8 w-8 items-center justify-center rounded-md bg-surface/10 text-surface/80 transition-colors hover:bg-surface/15 hover:text-surface',
                    effectiveMode === 'mobile' && 'bg-glaz-700 text-surface'
                  )}
                >
                  <Smartphone className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  aria-label="Vue plein écran"
                  onClick={() => onSetMode('desktop')}
                  className={cn(
                    'inline-flex h-8 w-8 items-center justify-center rounded-md bg-surface/10 text-surface/80 transition-colors hover:bg-surface/15 hover:text-surface',
                    effectiveMode === 'desktop' && 'bg-glaz-700 text-surface'
                  )}
                >
                  <Monitor className="h-4 w-4" />
                </button>
              </div>

              <Link
                to="/design-system"
                className="text-xs text-surface/70 hover:text-surface"
              >
                DS
              </Link>
            </>
          ) : null}

          <a
            href="/login"
            aria-label="Déconnexion"
            onClick={(e) => {
              e.preventDefault()
              logout()
              navigate('/login', { replace: true })
            }}
            className="inline-flex h-7 w-7 items-center justify-center rounded-md text-surface/70 transition-colors hover:bg-surface/10 hover:text-surface"
          >
            <LogOut className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  )
}

export function PrototypeLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation()
  const isDesktop = useMediaQuery('(min-width: 768px)')
  const [mode, setMode] = React.useState<ViewMode>(
    PROJECT_TYPE === 'desktop' ? 'desktop' : 'mobile'
  )
  const [mobileScale, setMobileScale] = React.useState(computeMobileScale)

  const allowSwitch = PROJECT_TYPE === 'responsive'
  const effectiveMode: ViewMode = isDesktop
    ? allowSwitch
      ? mode
      : PROJECT_TYPE === 'desktop'
        ? 'desktop'
        : 'mobile'
    : 'desktop'

  const chromeBar = (
    <PrototypeChromeBar
      allowSwitch={allowSwitch}
      effectiveMode={effectiveMode}
      onSetMode={setMode}
    />
  )

  React.useEffect(() => {
    function recomputeScale() {
      setMobileScale(computeMobileScale())
    }

    recomputeScale()
    window.addEventListener('resize', recomputeScale)
    return () => window.removeEventListener('resize', recomputeScale)
  }, [])

  React.useLayoutEffect(() => {
    resetPageScroll()
  }, [location.pathname])

  return (
    <div
      className="fixed inset-0 overflow-hidden bg-text text-surface"
      data-prototype-view={effectiveMode === 'desktop' ? 'desktop' : 'mobile'}
    >
      {effectiveMode === 'mobile' ? (
        <div className="mx-auto flex h-full w-full flex-col">
          {chromeBar}

          <div className="flex min-h-0 flex-1 items-center justify-center px-4 py-8 text-on-dark">
            <div
              style={{
                width: MOBILE_MOCKUP_W * mobileScale,
                height: MOBILE_MOCKUP_H * mobileScale,
              }}
              className="flex-none"
            >
              <div
                style={{
                  width: MOBILE_MOCKUP_W,
                  height: MOBILE_MOCKUP_H,
                  transformOrigin: 'top left',
                  transform: `scale(${mobileScale})`,
                }}
              >
                <div
                  className="mockup-scroll-root card-slider-viewport scrollbar-none flex h-full w-[390px] flex-col overflow-hidden overscroll-contain rounded-[40px] bg-surface shadow-2xl shadow-black/30"
                >
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex h-full w-full flex-col overflow-hidden bg-background text-text">
          {chromeBar}
          <div className="flex h-0 min-h-0 min-h-dvh flex-1 flex-col overflow-hidden">
            {children}
          </div>
        </div>
      )}
    </div>
  )
}

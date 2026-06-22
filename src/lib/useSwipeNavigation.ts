import * as React from 'react'

const SWIPE_THRESHOLD_PX = 40

type SwipeStart = { pointerId: number; x: number; y: number }

/** Swipe horizontal discret — prev / next (ne bloque pas le scroll vertical). */
export function useSwipeNavigation(onPrev: () => void, onNext: () => void) {
  const swipe = React.useRef<SwipeStart | null>(null)

  const onPointerDown = React.useCallback((e: React.PointerEvent<HTMLElement>) => {
    if (e.button !== 0) return
    swipe.current = { pointerId: e.pointerId, x: e.clientX, y: e.clientY }
  }, [])

  const onPointerUp = React.useCallback(
    (e: React.PointerEvent<HTMLElement>) => {
      const start = swipe.current
      if (!start || start.pointerId !== e.pointerId) return
      swipe.current = null

      const dx = e.clientX - start.x
      const dy = e.clientY - start.y
      if (Math.abs(dx) < SWIPE_THRESHOLD_PX || Math.abs(dx) < Math.abs(dy)) return

      if (dx < 0) onNext()
      else onPrev()
    },
    [onNext, onPrev]
  )

  const onPointerCancel = React.useCallback((e: React.PointerEvent<HTMLElement>) => {
    if (swipe.current?.pointerId === e.pointerId) swipe.current = null
  }, [])

  return {
    onPointerDown,
    onPointerUp,
    onPointerCancel,
  }
}

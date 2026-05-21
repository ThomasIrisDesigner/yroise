import * as React from 'react'

const DRAG_THRESHOLD_PX = 6

export function useHorizontalSwipeScroll<T extends HTMLElement = HTMLDivElement>() {
  const ref = React.useRef<T>(null)
  const drag = React.useRef({ active: false, startX: 0, scrollLeft: 0 })
  const didDrag = React.useRef(false)

  const endDrag = React.useCallback((pointerId: number) => {
    const el = ref.current
    if (!el) return
    drag.current.active = false
    try {
      el.releasePointerCapture(pointerId)
    } catch {
      /* capture déjà libéré */
    }
    el.style.cursor = ''
  }, [])

  const onPointerDown = React.useCallback((e: React.PointerEvent<T>) => {
    const el = ref.current
    // Ne pas intercepter les clics sur liens / boutons (cartes cliquables du carousel).
    if ((e.target as HTMLElement).closest('a, button')) return
    // Souris : drag horizontal. Touch : scroll natif (swipe) du navigateur.
    if (!el || e.button !== 0 || e.pointerType !== 'mouse') return

    didDrag.current = false
    drag.current = { active: true, startX: e.pageX, scrollLeft: el.scrollLeft }
    el.setPointerCapture(e.pointerId)
    el.style.cursor = 'grabbing'
  }, [])

  const onPointerMove = React.useCallback((e: React.PointerEvent<T>) => {
    const el = ref.current
    if (!el || !drag.current.active) return

    const delta = e.pageX - drag.current.startX
    if (Math.abs(delta) > DRAG_THRESHOLD_PX) {
      didDrag.current = true
    }
    el.scrollLeft = drag.current.scrollLeft - delta
  }, [])

  const onPointerUp = React.useCallback(
    (e: React.PointerEvent<T>) => {
      if (!drag.current.active) return
      endDrag(e.pointerId)
      window.setTimeout(() => {
        didDrag.current = false
      }, 0)
    },
    [endDrag]
  )

  const onPointerCancel = React.useCallback(
    (e: React.PointerEvent<T>) => {
      if (!drag.current.active) return
      endDrag(e.pointerId)
      didDrag.current = false
    },
    [endDrag]
  )

  const onClickCapture = React.useCallback((e: React.MouseEvent) => {
    if (didDrag.current) {
      e.preventDefault()
      e.stopPropagation()
    }
  }, [])

  return {
    ref,
    didDrag,
    handlers: {
      onPointerDown,
      onPointerMove,
      onPointerUp,
      onPointerCancel,
      onClickCapture,
    },
  }
}

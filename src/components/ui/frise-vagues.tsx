import { useLayoutEffect, useRef, useState } from 'react'

const UNIT_WIDTH = 24
const UNIT_HEIGHT = 16
/** Figma — padding négatif entre motifs pour jointure sans espace */
const UNIT_OVERLAP = 3.84
const PATTERN_WIDTH = UNIT_WIDTH - UNIT_OVERLAP

/** Source : public/images/Frise_Vague.svg (24×16) */
const UNIT_PATH =
  'M20.143 13.9149C19.5386 13.9149 18.9086 13.8583 18.2528 13.7386C14.9224 13.1212 12.9679 10.3054 13.5851 7.10534C14.0802 4.5604 16.5747 2.96036 18.96 3.66589C20.4516 4.10685 21.2295 5.5809 20.6316 6.92896C20.4966 7.23133 20.1751 7.45181 19.8279 7.83607C19.6544 6.29902 18.9086 5.61239 17.7706 5.71318C16.7355 5.80137 15.8675 6.85967 16.0218 7.98095C16.099 8.5227 16.3047 9.10224 16.6197 9.54949C17.6291 10.9668 20.1558 11.2125 21.7889 10.1731C24.1677 8.66758 24.3992 5.42341 23.5184 3.5273C22.6054 1.5682 20.9788 0.472116 18.8185 0.13825C16.3561 -0.239711 14.1059 0.100454 12.2221 1.87057C10.9941 3.02336 10.0683 4.37142 9.32891 5.86437C8.70526 7.12424 8.06876 8.39041 7.30368 9.56839C5.55491 12.2582 3.17607 13.9086 0 13.9212V16C5.56134 16 13.5658 16 20.143 16V13.9212V13.9149Z'

function motifCount(containerWidth: number) {
  return Math.ceil(containerWidth / PATTERN_WIDTH) + 1
}

/** Frise décorative vagues — transition vers le footer (ocean-900), sans fond fixe */
export function FriseVagues() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [count, setCount] = useState(() => motifCount(390))

  useLayoutEffect(() => {
    const el = containerRef.current
    if (!el) return

    const update = () => setCount(motifCount(el.offsetWidth))
    update()

    const observer = new ResizeObserver(update)
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef} className="frise-vagues" aria-hidden>
      <svg
        width="100%"
        height={UNIT_HEIGHT}
        className="block translate-y-4"
        overflow="visible"
      >
        {Array.from({ length: count }, (_, i) => (
          <path
            key={i}
            d={UNIT_PATH}
            fill="rgb(var(--ocean-900))"
            transform={`translate(${i * PATTERN_WIDTH}, 0)`}
          />
        ))}
      </svg>
    </div>
  )
}

export function TriangleYroise({ color, size = 10 }: { color: string; size?: number }) {
  const w = (size * Math.sqrt(3)) / 2
  const h = size
  return (
    <svg
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      aria-hidden
      className="shrink-0"
    >
      <polygon points={`0,0 0,${h} ${w},${h / 2}`} fill={color} />
    </svg>
  )
}

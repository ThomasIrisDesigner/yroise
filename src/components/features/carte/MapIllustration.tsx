/** Illustration carte type OSM Positron (wireframe — pas d’embed réel en phase prototype). */
export function MapIllustration() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-muted/80">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 208 200"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <path d="M0,160 Q50,148 100,155 Q155,163 208,150 L208,200 L0,200 Z" fill="rgb(var(--color-muted))" />
        <line x1="0" y1="80" x2="208" y2="70" stroke="rgb(var(--color-border))" strokeWidth="5" />
        <line x1="0" y1="110" x2="208" y2="106" stroke="rgb(var(--color-border))" strokeWidth="7" />
        <line x1="75" y1="0" x2="65" y2="200" stroke="rgb(var(--color-border))" strokeWidth="4" />
        <line x1="138" y1="0" x2="130" y2="200" stroke="rgb(var(--color-border))" strokeWidth="3" />
        <rect x="18" y="30" width="20" height="13" rx="1" fill="rgb(var(--color-border))" />
        <rect x="88" y="18" width="17" height="11" rx="1" fill="rgb(var(--color-border))" />
        <rect x="148" y="42" width="24" height="16" rx="1" fill="rgb(var(--color-border))" />
      </svg>
      <p className="absolute bottom-1 right-1.5 rounded bg-surface/80 px-1 py-0.5 text-[9px] text-text/40">
        © OpenStreetMap · uMap
      </p>
    </div>
  )
}

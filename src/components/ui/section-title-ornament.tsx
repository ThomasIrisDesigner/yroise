/** Ornement sous-titre de section liste — vague glaz (Figma Header row) */
export function SectionTitleOrnament({ className }: { className?: string }) {
  return (
    <img
      src="/images/separator_line.svg"
      alt=""
      aria-hidden
      width={20}
      height={5}
      draggable={false}
      className={className}
    />
  )
}

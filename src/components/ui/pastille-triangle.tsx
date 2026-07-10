import { cn } from '@/lib/utils'

export function PastilleTriangle({ className }: { className?: string }) {
  return (
    <img
      src="/images/Pastille_triangle.svg"
      alt=""
      aria-hidden
      className={cn('h-[7px] w-[6px] shrink-0', className)}
      draggable={false}
    />
  )
}
